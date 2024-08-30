import Hamburger from '../assets/Hamburger.jpg'
import Croissant from '../assets/Croissant.jpg'
import ExtraCheesyBurger from '../assets/Extra Cheesy burger.jpg'
import FarmhousePizza from '../assets/Farmhouse Pizza.jpg'
import LeafyPizza from '../assets/Leafy Pizza.jpg'
import VegiesBurger from '../assets/Vegies Burger.jpg'
import EggRoll from '../assets/Special Egg Roll.jpg'
import styles from './Menu.module.css'
import Cart from '../Cart/Cart.jsx'
import React,{useState} from 'react'

function Menu(props){
    const pageState=props.value;
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    const [count3,setCount3]=useState(0);
    const [count4,setCount4]=useState(0);
    const [count5,setCount5]=useState(0);
    const [count6,setCount6]=useState(0);
    const [count7,setCount7]=useState(0);

    const hamburger={
        image:Hamburger,
        id:"0",
        name:"Hamburger",
        price:500,
        description:"A juicy beef patty topped with fresh lettuce, tomatoes, onions, and pickles, served in a soft sesame bun.",
        buttons:<button className={styles.button} onClick={() => setCount1(count1+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount1(count1-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount1(0)}><b>Remove these Burgers from cart</b></button>,
        cartted:count1,
       };
    
    const croissant={
        image:Croissant,
        id:"1",
        name:"Croissant",
        price:70,
        description:" A buttery, flaky French pastry with a golden crust, perfect for a light snack or breakfast treat..",
        buttons:<button className={styles.button} onClick={() => setCount2(count2+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount2(count2-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount2(0)}><b>Remove Croissants from cart</b></button>,
        cartted:count2,
       };
    
    const eggRoll={
        image:EggRoll,
        id:"2",
        name:"Special Egg Roll",
        price:700,
        description:"A crispy egg roll filled with seasoned vegetables double omlet, offering a satisfying crunch in every bite, with extra boiled eggs included.",
        buttons:<button className={styles.button} onClick={() => setCount3(count3+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount3(count3-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount3(0)}><b>Remove Sp. Egg Rolls from cart</b></button>,
        cartted:count3,
       };
    
    const farmhousePizza={
        image:FarmhousePizza,
        id:"3",
        name:"Farmhouse Pizza",
        price:400,
        description:"A delightful pizza loaded with farm-fresh veggies, tangy tomato sauce, and a blend of mozzarella and cheddar cheese.",
        buttons:<button className={styles.button} onClick={() => setCount4(count4+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount4(count4-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount4(0)}><b>Remove these Pizzas from cart</b></button>,
        cartted:count4,
       };
    
    const extraCheesyBurger={
        image:ExtraCheesyBurger,
        id:"4",
        name:"Extra Cheesy Burger",
        price:550,
        description:"A mouthwatering burger layered with double the cheese, juicy beef, and crisp lettuce in a toasted bun.",
        buttons:<button className={styles.button} onClick={() => setCount5(count5+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount5(count5-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount5(0)}><b>Remove these Burgers from cart</b></button>,
        cartted:count5,
       };
    
    const leafyPizza={
        image:LeafyPizza,
        id:"5",
        name:"Leafy Pizza",
        price:300,
        description:"A wholesome pizza topped with fresh leafy greens, bell peppers, olives, and a sprinkle of feta cheese.",
        buttons:<button className={styles.button} onClick={() => setCount6(count6+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount6(count6-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount6(0)}><b>Remove these Pizzas from cart</b></button>,
        cartted:count6,
       };
    
    const vegiesBurger={
        image:VegiesBurger,
        id:"6",
        name:"Vegies Burger",
        price:350,
        description:"A savory vegetable patty, packed with seasonal veggies, lettuce, and tomatoes, served on a whole-grain bun.",
        buttons:<button className={styles.button} onClick={() => setCount7(count7+1)}><b>Add item to cart</b></button>,
        RemoveButtons:<button className={styles.Removebutton} onClick={() => setCount7(count7-1)}><b>Remove item from cart</b></button>,
        RemoveAllButtons:<button className={styles.RemoveAllbutton} onClick={() => setCount7(0)}><b>Remove these Burgers from cart</b></button>,
        cartted:count7,
       };
    
    const foodMenu=[hamburger,eggRoll,farmhousePizza,vegiesBurger,croissant,extraCheesyBurger,leafyPizza];
    
    if(pageState==true){
        return(
        <>{foodMenu.map((food,index) => 
            <React.Fragment key={index}>
                <div className={styles.card}>
                    <img src={food.image} alt="food"></img>
                    <h2 className={styles.food}>{food.name}</h2>
                    <p className={styles.price}>₹{food.price}</p>
                    <p className={styles.descr}>{food.description}</p>
                    {food.buttons}
                    {food.RemoveButtons}                                    {/*Fix the issue where number of items becomes less than 0 */}
                    {food.RemoveAllButtons}
                </div>
            </React.Fragment>
            )}
       </>)
    }
    else{
        return(
            <Cart value={foodMenu}/>)
    }
}

export default Menu