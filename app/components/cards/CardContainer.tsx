import type { MenuCategory } from '@/app/types'
import styles from './container.module.css'
import Card from './Card'
import {links} from '../navbar/links'

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
        {
            links.map((cat,index)=>(
                <Card link={cat} key={index}/>
            ))
        }
    </div>
  )
}

export default CardContainer