import style from "./index.module.scss"

export const ProductCard = ({ product ,addCart }) => {
    return(
        <li className={style.display}>
            <img className={style.card_img} src={product.img} alt={product.name} />
            <div className={style.description} >
                <h3 className="font three" >{product.name}</h3>
                <span className="font seven" >{product.category}</span>
                <span className="font five" >{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="button__2" onClick={()=>addCart(product)} >Adicionar</button>
            </div>
        </li>
    )
}