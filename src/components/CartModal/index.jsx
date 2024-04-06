import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import {v4 as uuidV4} from "uuid"
import style from "./index.module.scss"

export const CartModal = ({ cartList,removeCart,setIsOpen,setCartList }) => {


   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const reset = ()=>{
      setCartList([])
   }
   
   

   return (
      <div className={style.modalPosition} role="dialog">
         <div className={style.modalBox} >
            <div className={style.header} >
               <h2>Carrinho de compras</h2>
               <button onClick={()=>setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose color="#fff" size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={uuidV4()} product={product} removeCart={removeCart} />
                  ))}
               </ul>
            </div>
            <div>
               <div className={style.footer} >
                  <span className="font four" >Total</span>
                  <span className="font five" >{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className={style.button} onClick={reset} >Remover todos</button>
            </div>
         </div>
      </div>
   );
};
