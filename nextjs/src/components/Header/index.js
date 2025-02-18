"use client"

import react from "react";

const Header = (props) => {
    console.log(props);
    const {title} = props;
return(
    <div>
        <h1>{title}</h1>
    </div>
);
}

export default Header;