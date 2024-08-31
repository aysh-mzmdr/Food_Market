import logo from '../assets/logo.jpg'
import styles from './Header.module.css'
function Header(){
    
    return(
        <div className={styles.head}>
            <img src={logo} alt='Logo'></img>
            <h2 className={styles.Name}>Food Market</h2>
            <div className={styles.styleDetails}>
                <p><b>Contact No. :</b> +91 1234567890</p>
                <p><b>Location:</b> Hirapur, Dhanbad, Jharkhand, India</p>
            </div>
        </div>
    )
}

export default Header