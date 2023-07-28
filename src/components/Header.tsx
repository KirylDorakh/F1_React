import * as React from "react";

import "../styles/Header.css";

function Header(props) {
    let [count, setNewCount] = React.useState(0)
    const handleClick = () => {
        setNewCount(count + 1)
        console.log("hello", count)
    };

    return (
        <header>This is header
            <button className={count > 2 ? "push" : "click"}
                    onClick={handleClick}>{props.buttonName} clicked: {count} times</button>
        </header>
    )
}

export default Header;