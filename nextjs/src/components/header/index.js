 "use client"
import React from 'react';
 import HeaderString from "@/assets/header_string.svg"
 import styles from "./header.module.css";

 const Header = (props) => {
    console.log(props); //not NEEDED, just console log for testing
    const {title} = props; 

    return(
        <header 
            className={styles.header} 
            // header string style, not needed style={{backgroundImage: `url(${HeaderString.src})` }}
        >
            <div className={styles.menuIcon}></div>
            <h1>{title}</h1>
            
            <nav>
                <l className="topnav__links">
                    <li className="topnav__item">Home<a href="" class="topnav__link"></a></li>
                    <li className="topnav__item">Resume<a href="" className="topnav__link"></a></li>
                    <li className="topnav__item">Projects<a href="@/constants/projects/js" className="topnav__link"></a></li>
                    <li className="topnav__item">Contact<a href="" className="topnav__link"></a></li>
                </l>
            </nav>

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