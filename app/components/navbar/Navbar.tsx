'use client'
import { links } from './links'
import style from './navbar.module.css'
import { useState, useEffect } from 'react'
import MenuIcon from '../ui/icons/MenuIcon'
import '../../colors.css'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)


  const handleClick = (): void => {
    setOpenMenu(prev => !prev);
  };

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 200);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
    <nav className={style.navbar}>
      <div className={style.iconContainer} onClick={handleClick}>
       <div className={style.iconBorder}> <MenuIcon size={30} color={scrolled? 'turquoise' : 'white'} /></div>
      </div>

     

    </nav>
     <div className={openMenu? style.links : style.hide} >
        <ul className={style.linksList}>
          {openMenu ?
            links.map((cat, index) => (

              <li key={index} className={style.li}>
                <a 
                href={`#${cat.item.toLowerCase().replace(/\s+/g, "-")}`} 
                className={style.link}
                onClick={() => setOpenMenu(false)} >

                {cat.item}
                </a>
              </li>

            ))
            :
            null
          }
        </ul>

        <div className={style.familyLogo}>
          <img src="logo-cardones.jpg" alt="logo de peña Los Cardones" className={style.familyImage}/>
        </div>
      </div>
      </>
  )
}

export default Navbar