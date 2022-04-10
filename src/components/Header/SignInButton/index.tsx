import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, useSession, signOut } from 'next-auth/react'


export function SignInButton() {
    const { data: session, status } = useSession()
    
    return session ? (
        <div className={styles.signInContainer}>
            <button
              type="button"
              className={styles.signInButton}
            >
                <FaGithub color="#04d361"/>
                {status === "loading" ? "..." : session.user.name}
            </button>
            <div 
              className={styles.closeSessionContainer}
              onClick={() => signOut()}
            >
                <FiX 
                  color="#cccccc"
                  className={styles.closeIcon}
                  size={24}
                />
            </div>
        </div>
    ) : (
        <button
          type="button"
          className={styles.signInButton}
          onClick={() => signIn('github')}
         >
            <FaGithub color="#eba417"/>
            {status === "loading" ? "..." : "Sign in with Github" }
        </button>
    )
}