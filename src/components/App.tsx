import * as React from "react";

import Header from "./Header"
import Main from "./Main";

import "../styles/App.css";

function App() {
    const buttonName="update"

    return (
        <>
            <Header buttonName={buttonName}/>
            <Main />
        </>
    );
}

export default App;