import styles from './Button.module.css'
import Menu from '../Menu/Menu.jsx'
import React,{useState} from 'react'

function Taskbar(){

    const styleTaskbar={
        marginTop:'25px',
        backgroundColor:'hsl(255, 78%, 49%)',
    }

    const [home,setHome]=useState(true);

    function handleHome(){
        setHome(true)
    }
    function handleCart(){
        setHome(false)
    }

    return(
        <>
            <div className="taskbar" style={styleTaskbar}>
                <button className={styles.button} onClick={handleHome}> Home</button>
                <button className={styles.button} onClick={handleCart}> Cart</button>
            </div>
            <Menu value={home}></Menu>
        </>
    )
}

export default Taskbar