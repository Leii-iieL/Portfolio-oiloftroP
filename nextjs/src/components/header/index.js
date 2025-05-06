 "use client"
import React from 'react';
//import HeaderString from "@/assets/header_string.svg"
import styles from "./header.module.css";
import Link from 'next/link';

 const Header = (props) => {
    console.log(props); //not NEEDED, just console log for testing
    const {title} = props; 

    return(
        <header 
            className={styles.header} 
            // header string from old version, not needed: style={{backgroundImage: `url(${HeaderString.src})` }}
        >
            <div className={styles.menuIcon}><h1>{title}</h1>
            </div>
            
            
            <nav className="styles.topnav_links">
                <div className="styles.topnav_menu">
                    <ul >
                        <li className={styles.topnav_item}>
                            <Link className={styles.topnav_link} href="/" >Home</Link>
                        </li>

                        <li className={styles.topnav_item}>
                            <Link className={styles.topnav_link} href="/" >Resume</Link>
                        </li>

                        <li className={styles.topnav_item}>
                            <Link className={styles.topnav_link} href="/projects" >Projects</Link>
                        </li>

                        <li className={styles.topnav_item}>
                            <Link className={styles.topnav_link} href="/contact" >Contact</Link>
                        </li>
                    </ul> 
                </div>
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