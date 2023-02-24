import React, { useState, useEffect } from "react";
import styles from "./Card.module.css"
import {useDispatch, useSelector } from "react-redux";
import { addBasket ,deleteProduct } from "../../redux/moneySlice";
function Card({ item , id }) {
  const dispatch = useDispatch()
    const wallet = useSelector((state)=>state.money.wallet)
    const [count,setCount] = useState(0)
    const [disabled,setDisabled] = useState(false)
    

    const buyBtn = () => {
      if(wallet>item.productPrice){
        setCount(count + 1);
        setDisabled(false)
        dispatch(addBasket({ id: item.id, name:item.productName , count: count ,price:item.productPrice }));
        
      }
      
    };
    
    const sellBtn = () => {
      dispatch(addBasket({ id: item.id, name:item.productName , count: count,price:item.productPrice }));
      if(count>0){
        setCount(count - 1);
      }else if (count === 0 ){
        setDisabled(true)
        dispatch(deleteProduct(item.id))
        console.log(item.id)
      }
      
    };
    
    useEffect(()=>{
      
      setDisabled(count === 0);

    },[count])

   
  return (
    <div>
      <div className="card" style={{ width: 250, height:400 }}>
        <img src={item.image} className={`card-img-top ${styles.product_img}`} alt="..." />
        <div className="card-body">
          <h5 className={`card-title ${styles.product_name}`}>{item.productName}</h5>
          <p className={`card-text ${styles.product_price}`}>{Number(item.productPrice).toLocaleString()} $ </p>
        </div>
        <div className={styles.footer}>
          <button onClick={sellBtn} className={`btn btn-danger ${disabled ? styles.disabled : "" }`}>Sell</button>
          <input onChange={(e)=>e.target.value}   value={count } />
          <button onClick={buyBtn} className={`btn btn-success `}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
