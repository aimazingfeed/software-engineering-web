/* eslint-disable @next/next/no-img-element */

import styles from '@/styles/Game.module.css'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import questions from '@/../public/questions.json';
import { useRouter } from 'next/router';
import { GameContent } from '@/components/game-content';

const Game = () => {
  const router = useRouter()
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [isPreviewResult, setIsPreviewResult] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const handleAnswerClick = (value: string) => {
    if (value === questions[activeQuestion].correctAnswer) {
      setCorrectAnswers((prev) => prev + 1)
    }
    if (activeQuestion === questions.length - 1) {
      setIsPreviewResult(true)
    } else {
      setActiveQuestion(prev => prev + 1)
    }
  }
  const getResultText = () => {
    if (correctAnswers >= 7) return 'Поздравляем!'
    return "Ты еще не совсем\nразбираешься в искусстве :(";
  }
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <img src="/vertical-left.svg" className={styles.linesLeft} alt="lines" />
        <img src="/vertical-right.svg" className={styles.linesRight} alt="lines" />
        {
          isPreviewResult ? (
            <>
            <div className={styles.resultContainer}>
              <p className={styles.resultText}>{getResultText()}</p>
              <p className={styles.resultText}>Твой результат</p>
              <p className={styles.resultText}>{correctAnswers}/{questions.length}</p>
            </div>
              <button className={styles.linkButton} onClick={() => {
                setActiveQuestion(0);
                setCorrectAnswers(0);
                setIsPreviewResult(false);
              }}>
                ИГРАТЬ ЕЩЕ РАЗ
              </button>
            </>
          ) : (
            <GameContent
              title={questions[activeQuestion].title}
              image={questions[activeQuestion].src}
              answers={questions[activeQuestion].answers}
              handleAnswerClick={handleAnswerClick}
            />
          )
        }
        
      </main>
    </>
  )
}

export default Game;