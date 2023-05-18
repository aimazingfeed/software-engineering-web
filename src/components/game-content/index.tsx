import Image from 'next/image';
import styles from '@/styles/Game.module.css'

export const GameContent = ({image, title, answers, handleAnswerClick}: any) => {
  return (
    <div className={styles.contentContainer}>
      <p className={styles.question}>{title}</p>
      <Image
        key={image}
        src={image}
        alt=""
        placeholder='blur'
        blurDataURL='/loader.svg'
        quality={40}
        width={790} 
        height={450}
        className={styles.picture}
      />
      <div className={styles.buttonContainer}>
        {answers.map(({title, value}: any, index: number) => (
          <button className={styles.button} key={index} onClick={() => {
            handleAnswerClick(value);
          }}>{title}</button>
        ))}
      </div>
    </div>
  )
}