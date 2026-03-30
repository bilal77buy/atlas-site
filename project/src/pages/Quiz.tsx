import { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import QuizIntro from '../components/quiz/QuizIntro';
import QuizQuestionView from '../components/quiz/QuizQuestion';
import QuizResult from '../components/quiz/QuizResult';

type Phase = 'intro' | 'questions' | 'result';

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );

  useEffect(() => {
    if (phase === 'result') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [phase]);

  const score = answers.reduce((total, answerIndex, qIndex) => {
    if (answerIndex === null) return total;
    return total + quizQuestions[qIndex].options[answerIndex].points;
  }, 0);

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setPhase('result');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = () => {
    setPhase('intro');
    setCurrentIndex(0);
    setAnswers(Array(quizQuestions.length).fill(null));
    window.scrollTo(0, 0);
  };

  if (phase === 'intro') {
    return <QuizIntro onStart={() => setPhase('questions')} />;
  }

  if (phase === 'questions') {
    return (
      <QuizQuestionView
        question={quizQuestions[currentIndex]}
        currentIndex={currentIndex}
        total={quizQuestions.length}
        selectedAnswer={answers[currentIndex]}
        onSelect={handleSelect}
        onNext={handleNext}
        onPrev={handlePrev}
        isLast={currentIndex === quizQuestions.length - 1}
      />
    );
  }

  return (
    <QuizResult
      answers={answers}
      score={score}
      onReset={handleReset}
    />
  );
}
