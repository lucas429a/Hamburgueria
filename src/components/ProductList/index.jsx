import { ProductCard } from "./ProductCard";
import style from "./index.module.scss"

export const ProductList = ({ productList ,addCart}) => {
   return (
      <div className="container">
         <ul className={style.display}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addCart={addCart} />
            ))}
         </ul>
      </div>
   );
};
