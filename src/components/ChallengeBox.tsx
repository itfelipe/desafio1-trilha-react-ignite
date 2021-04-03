import { useState } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
  var [hasActiveChallenge, setHasActiveChallenge] = useState(true)
  
  
  
  return(
    <div className={styles.challengeBoxContainer}>
      
      {hasActiveChallenge?(
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e alongue-se completamente</p>
            
          </main>
          <footer>
              <button
              type="button"
              className={styles.challengeFailedButton}

              >
                Falhei
              </button>
              <button
              type="button"
              className={styles.challengeSuceededButton}
              >
                Completei
                </button>
            </footer>
          </div>
      ):(
        <div className={styles.challengeNotActive}>
        <strong>
          Finalize um ciclo para receber um desfaio
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="level up"/>
          Avance de level completando desafios
        </p>
      </div>
      )}

    </div>
  )
}