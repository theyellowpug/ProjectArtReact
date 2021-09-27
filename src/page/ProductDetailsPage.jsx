import React, {useState,useEffect} from "react";
import "../App.css";
import { getProductById } from "../api/ProductApi";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { CartActionCreators } from "../state/CartActions";

export const ProductDetailsPage= (props) => {
    
    const productId=props.match.params.productId;
    const history = useHistory();

    const dispatch = useDispatch();    
    const { addToCart,removeFromCart } = bindActionCreators( CartActionCreators, dispatch);

    const [productData,setProductData]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getProductById(productId)
            .then(response=>{
                console.log(response.data)
                setProductData(response.data)
            }).then(response2=>setIsLoaded(true))
    },[])

    return (
        isLoaded ? 
        <div className="App">
            <h1>{productData.name}</h1>
            <p>{productData.price}</p>
            <button onClick={()=>addToCart(productData.id)}>Add to cart</button>
        </div>
        :
        <p>Loading</p>              
      );
}
