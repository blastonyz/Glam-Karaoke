import type { MenuCategory } from "@/app/types"
import style from './card.module.css'


const Card = ({link}:{link:MenuCategory }) => {
  return (
    <section className={style.mainCard}>
       <h3>{link.item}</h3>

        {   link.products.map((product,index)=>(
            <div className={style.product} key={index}>
               <div className={style.dish}> <p>{product.name}</p>
               <p>{product.price}</p>
               </div>
            </div>
        ))

        }




    </section>
  )
}

export  default Card
