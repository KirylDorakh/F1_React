import * as React from "react";

import "../styles/Main.css"
import "./Countries"
import Countries from "./Countries";
import Alerts from "./Alerts";
import Alert from "react-bootstrap/Alert";

function Main() {
    let alertText = <p>this is text</p>;
    return (
        <main>
            <Alerts>
                <Alert variant={"primary"}>
                    {alertText}
                </Alert>
                <Alert variant={"secondary"}>
                    {alertText}
                </Alert>
            </Alerts>
            <Countries />
        </main>
    )
}

export default Main;