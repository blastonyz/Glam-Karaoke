import Image from 'next/image' ;
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.mainHeader}>

        <Image 
        src={'/head.jpg'}
        width={650}
        height={150}
        alt='imagen de humo de escenario'
        />


    <div className={styles.titlesContainer}>
            <h2 className={styles.title}>Glam</h2>
          <h1 className={styles.mainTitle}>Karaoke</h1>
    </div>

    </header>
  )
}

 export default Header