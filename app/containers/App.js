
import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";


class App extends React.Component{

	render(){
		return (<div>
			<h1>Shopping</h1>
			<ProductsContainer />
			<CartContainer />
		</div>);		
	}

}

export default App;