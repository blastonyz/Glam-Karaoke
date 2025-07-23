'use client'
import styles from './header.module.css'
import Navbar from '../navbar/Navbar'

const Header = () => {
    return (
        <header className={styles.mainHeader}>

            <Navbar/>

            <picture>
                <source media="(max-width: 768px)" srcSet="head.jpg" />
                <source media="(min-width: 769px)" srcSet="/head-desk.jpg" />
                <img
                    src="/head-desk.jpg"
                    alt="Escenario glam"
                    className={styles.imageHead}
                />
            </picture>

            <div className={styles.titlesContainer}>
                <h2 className={styles.title}>Glam</h2>
                <h1 className={styles.mainTitle}>Karaoke</h1>
            </div>

        </header>
    )
}

export default Header