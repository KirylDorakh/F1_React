import * as React from "react";
import Alert from 'react-bootstrap/Alert';

import "../styles/Alerts.css"

function Alerts(props){
    let children= props.children
    return (
        <>
            {
                React.Children.count(children)
            }
            {
                React.Children.map(children, (child, index) => {
                if(index < 2){
                    return child
                    }
                })
            }
        </>

    )
}

export default Alerts