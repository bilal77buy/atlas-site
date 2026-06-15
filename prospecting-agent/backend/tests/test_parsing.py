"""Unit tests for CSV parsing and schema validation."""
import pytest

from app.services.discovery.csv_importer import import_csv


SAMPLE_CSV_COMMA = """name,company,title,country,city,email,employees
Jean Dupont,JD Security,RSSI Freelance,France,Paris,jean@jd.fr,1
Alice Martin,AM Conseil,vCISO Independante,Belgique,Bruxelles,alice@am.be,2
"""

SAMPLE_CSV_SEMICOLON = """nom;entreprise;poste;pays;ville;email;effectif
Sophie Durand;SD Advisory;DSI Temps Partage;Suisse;Geneve;sophie@sd.ch;3
"""

SAMPLE_CSV_MISSING_REQUIRED = """name,company
,
"""

SAMPLE_CSV_INVALID_EMPLOYEES = """name,company,employees
Test User,Test Co,not-a-number
"""

SAMPLE_CSV_EMPTY = ""

SAMPLE_CSV_NO_HEADERS = "jean,jd,rssi"


class TestCSVParsing:
    def test_basic_comma_csv(self):
        leads, errors = import_csv(SAMPLE_CSV_COMMA)
        assert len(leads) == 2
        assert errors == []
        assert leads[0].full_name == "Jean Dupont"
        assert leads[0].public_email == "jean@jd.fr"
        assert leads[0].employee_size_estimate == 1

    def test_semicolon_delimiter_detected(self):
        leads, errors = import_csv(SAMPLE_CSV_SEMICOLON)
        assert len(leads) == 1
        assert leads[0].full_name == "Sophie Durand"
        assert leads[0].country == "Suisse"

    def test_french_headers_mapped(self):
        leads, errors = import_csv(SAMPLE_CSV_SEMICOLON)
        assert leads[0].company_name == "SD Advisory"
        assert leads[0].job_title == "DSI Temps Partage"

    def test_missing_name_and_company_skipped(self):
        leads, errors = import_csv(SAMPLE_CSV_MISSING_REQUIRED)
        assert len(leads) == 0
        assert len(errors) >= 1

    def test_invalid_employee_count_skipped_gracefully(self):
        leads, errors = import_csv(SAMPLE_CSV_INVALID_EMPLOYEES)
        # Row should still be imported, employee_size just dropped
        assert len(leads) == 1
        assert leads[0].employee_size_estimate is None

    def test_empty_csv_returns_empty(self):
        leads, errors = import_csv(SAMPLE_CSV_EMPTY)
        assert leads == []

    def test_csv_data_source_set(self):
        leads, errors = import_csv(SAMPLE_CSV_COMMA)
        assert leads[0].data_source == "csv_import"

    def test_multiple_rows_all_imported(self):
        csv = "name,company\nA,B\nC,D\nE,F\n"
        leads, errors = import_csv(csv)
        assert len(leads) == 3

    def test_whitespace_trimmed(self):
        csv = "name,company\n  Jean Dupont  ,  JD Security  \n"
        leads, errors = import_csv(csv)
        assert leads[0].full_name == "Jean Dupont"
        assert leads[0].company_name == "JD Security"
