import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localStorageCartList = localStorage.getItem("@CARTLIST")
   const [cartList, setCartList] = useState( localStorageCartList ? JSON.parse(localStorageCartList) : []);

   const [isOpen,setIsOpen] = useState(false)

   // useEffect montagem - carrega os produtos da API e joga em productList

   useEffect(()=>{
         const getProducts = async ()=>{
            try{
               const {data} = await api.get("products")
               setProductList(data)
            }
            catch{
               console.log("erro")
            }
         }
         getProducts()
   },[])
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)

   useEffect(()=>{
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
   },[cartList])

   // adição, exclusão, e exclusão geral do carrinho

   const addCart = (newProduct)=>{
      if(!cartList.some(product => product.id === newProduct.id)){
         setCartList([...cartList , newProduct])
         toast.success("produto adicionado com sucesso")
      }else{
         toast.error("produto ja adicionado")
      }
   }

   const removeCart = (productID)=>{
      const newCartList = cartList.filter((product) => product.id !== productID)
      setCartList(newCartList)
      toast.success("produto removido com sucesso")
   }
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva
   return (
      <>
         <Header setProductList={setProductList} productList={productList} cartList={cartList} setIsOpen={setIsOpen} />
         <main>
            <ProductList addCart={addCart} productList={productList} />
            {isOpen && <CartModal setIsOpen={setIsOpen} cartList={cartList} setCartList={setCartList}  removeCart={removeCart} />}
         </main>
      </>
   );
};
