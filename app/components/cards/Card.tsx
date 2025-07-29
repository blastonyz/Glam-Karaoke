'use client'
import type { MenuCategory } from "@/app/types"
import { CldImage } from "next-cloudinary"
import style from './card.module.css'


const Card = ({ link }: { link: MenuCategory }) => {
  return (
    <section className={style.cardBorder}>

      <div  
      className={style.mainCard}
      id={link.item.toLowerCase().replace(/\s+/g, "-")}
      >
        <div className={style.categoryTitleContainer}>
          <h3 className={style.categoryTitle}>{link.item}</h3>
        </div>

       <div className={style.cardBody}>
          <div className={style.productsContainer}>
            {link.products.map((product, index) => (
              <div className={style.product} key={index}>
                <div className={style.dish}> <p className={style.productTitle}>{product.name}</p>
                  <p className={style.productPrice}>
                    {product.price > 0 ?
                      `$${product.price}`
                      :
                      "-"}
                  </p>
                </div>
              </div>
            ))
            }
  
          </div>
          <div className={style.imageSection}>
            {
              link.images.map((img, index) => (
                <CldImage
                  width={220}
                  height={220}
                  src={img}
                  crop={'fill'}
                  alt={`de lo mejor en ${link.item} de nuestra carta`}
                  key={index}
                  className={style.images}
                />
  
  
              ))
            }
          </div>
       </div>

      </div>

    </section>
  )
}

export default Card
