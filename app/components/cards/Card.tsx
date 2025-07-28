import type { MenuCategory } from "@/app/types"
import style from './card.module.css'


const Card = ({ link }: { link: MenuCategory }) => {
  return (
    <section className={style.cardBorder}>

      <div className={style.mainCard}>
        <div className={style.categoryTitleContainer}> <h3 className={style.categoryTitle}>{link.item}</h3></div>

        {link.products.map((product, index) => (
          <div className={style.product} key={index}>
            <div className={style.dish}> <p className={style.productTitle}>{product.name}</p>
              <p className={style.productPrice}>{product.price}</p>
            </div>
          </div>
        ))

        }



      </div>

    </section>
  )
}

export default Card
