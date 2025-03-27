 "use client"

 import HeaderString from "@/assets/header_string.svg"
 import styles from "./header.module.css";

 const Header = (props) => {
    console.log(props);
    const {title} = props;
    return(
        <header 
            className={styles.header} 
            style={{backgroundImage: `url(${HeaderString.src})` }}
        >
            <div className={styles.menuIcon}></div>
            <h1>{title}</h1>
        </header>
    );
}
export default Header; 


/* const Header = (props) => {
    console.log(props);
    const {title} = props;
    return(
        <div>
            <h1>{title}</h1>
        </div>
    );
} */