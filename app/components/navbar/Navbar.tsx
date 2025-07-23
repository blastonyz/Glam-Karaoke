'use client'
import { links } from './links'
import styles from './navbar.module.css'
import { useState } from 'react'
import MenuIcon from '../ui/icons/MenuIcon'
import '../../colors.css'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)


  const handleClick = (): void => {
    setOpenMenu(prev => !prev);
  };



  return (
    <nav className={styles.navbar}>
      <div className={styles.iconContainer} onClick={handleClick}>
        <MenuIcon size={30} color={'white'} />
      </div>

      <div className={openMenu? styles.links : styles.hide} >
        <ul className={styles.linksList}>
          {openMenu ?
            links.map((cat, index) => (

              <li key={index} className={styles.li}>
                {cat.item}
              </li>

            ))
            :
            null
          }
        </ul>
      </div>

    </nav>
  )
}

export default Navbar