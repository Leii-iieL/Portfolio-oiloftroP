"use client"


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