import React,{useState} from "react"
import styles from './Cart.module.css'

function Cart(props){
    const orderedMenu=props.value;
    let totPrice=0;
    orderedMenu.map(food => totPrice=totPrice+(food.cartted*food.price));

    if(orderedMenu[0].cartted==0 && orderedMenu[1].cartted==0 && orderedMenu[2].cartted==0 && orderedMenu[3].cartted==0 && orderedMenu[4].cartted==0 && orderedMenu[5].cartted==0 && orderedMenu[6].cartted==0){
        return(<h1 style={{textAlign:"center"}}>🛒 Your cart is empty 🙁</h1>)
    }
    else{
        return(
        <>{orderedMenu.map((food,index) => 
            <React.Fragment key={index}>
                {food.cartted !=0 && 
                
                <div className={styles.Cart}>
                    <div className={styles.Item}>
                        <p><b>Name : </b>{food.name}</p>
                        <p><b>Items : </b>{food.cartted}</p>
                        <p><b>Price : </b>{food.cartted*food.price}</p> 
                    </div>
                </div>}

            </React.Fragment>
            )}
            <button className={styles.Pay}>Pay: ₹ {totPrice}</button>
        </>)
    }
}

export default Cart