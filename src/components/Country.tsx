import * as React from "react";
import {Button} from "react-bootstrap";
// import PropTypes from "prop-types";

import "../styles/Country.css"

function Country({name, capital}){
    const [selected, changeSelected] = React.useState(false)

    return(
        <tr className={selected ? "selected-country" : ""}>
            <td>{name}</td>
            <td>{capital}</td>
            <td>
                {
                    selected ?
                        <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button>
                        : <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                }


            </td>
        </tr>
    );
}

Country.defaultProps = {
    capital: "Not Available"
}

// Country.propTypes = {
//     country: PropTypes.object
// };

export default Country;