/*
  # Create form submissions tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, nullable)
      - `company` (text, nullable)
      - `sector` (text, nullable)
      - `service` (text, nullable)
      - `description` (text, nullable)
      - `budget` (text, nullable)
      - `deadline` (text, nullable)
      - `created_at` (timestamptz)
      - `email_sent` (boolean, default false)
    
    - `quiz_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `company_size` (text)
      - `phone` (text, nullable)
      - `score` (integer)
      - `level` (text)
      - `answers` (jsonb)
      - `created_at` (timestamptz)
      - `email_sent` (boolean, default false)

  2. Security
    - Enable RLS on both tables
    - Only authenticated service role can insert (via Edge Function)
    - Admin dashboard can read all (future)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  sector text,
  service text,
  description text,
  budget text,
  deadline text,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false
);

CREATE TABLE IF NOT EXISTS quiz_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  company_size text NOT NULL,
  phone text,
  score integer NOT NULL,
  level text NOT NULL,
  answers jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can insert quiz submissions"
  ON quiz_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can read quiz submissions"
  ON quiz_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can update quiz submissions"
  ON quiz_submissions
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);
