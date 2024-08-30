import React,{useState} from "react"
import styles from './Cart.module.css'

function Cart(props){
    const orderedMenu=props.value;
    let totPrice=0;
    orderedMenu.map(food => totPrice=totPrice+(food.cartted*food.price));

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

export default Cart