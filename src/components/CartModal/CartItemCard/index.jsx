import { MdDelete } from "react-icons/md";
import style from "./index.module.scss"

export const CartItemCard = ({ product ,removeCart }) => {
   return (
      <li className={style.display} >
         <div className={style.display1} >
            <img className={style.card_img} src={product.img} alt={product.name} />
            <h3 className="font three" >{product.name}</h3>
         </div>
         <button onClick={()=>removeCart(product.id)} aria-label="delete" title="Remover item">
            <MdDelete color="#BDBDBD" size={21} />
         </button>
      </li>
   );
};
