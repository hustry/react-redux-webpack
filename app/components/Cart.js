
import React,{Component} from "react"
import Product from "./Product"

export default class Cart extends Component{
	render(){
		const {products,total} = this.props;
		const hasProducts = products.length>0;
		const nodes = !hasProducts?<em>请添加商品到购物车</em>:
			  products.map(product=>
			  	<Product 
			  		title = {product.title}
			  		price = {product.price}
			  		quantity={product.quantity}
			  		key={product.id}/>
			  )
		return (
			 <div>
			 	<h3>购物车</h3>
			 	<div>{nodes}</div>
			 	<p>Total:&#36;{total}</p>
			 	<button>Check Out</button>
			 </div>
			);
	}
}