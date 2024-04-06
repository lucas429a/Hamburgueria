import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import { ProductList } from "../ProductList";
import style from "./index.module.scss"

export const Header = ( {setIsOpen,cartList,setProductList,productList}) => {
   const [value, setValue] = useState("");
   

   const cartOpen = ()=>{
      if(cartList.length >0 ){
         setIsOpen(true)
      }else{
         toast.error("Carrinho vazio")
      }
   }

   const seachProducts = ()=>{
      const newProducts = productList.filter((product)=> product.name.toLowerCase().includes(value.toLowerCase()) || product.category.toLowerCase().includes(value.toLowerCase()))
      event.preventDefault()
      setProductList(newProducts)
   }

   return (
      <header className="container">
         <div className={style.display}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={style.display} >
               <button onClick={cartOpen}>
                  <MdShoppingCart color="#BDBDBD" size={21} />
                  <span className={style.icons} >{cartList.length}</span>
               </button>
               <form>
                  <input
                     className="input__"
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button onClick={seachProducts} >
                  <MdSearch className={style.icons} color="#FFFFFF" size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
