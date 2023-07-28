import * as React from "react";
import axios from "axios";
import {Table} from "react-bootstrap";

import Country from "./Country";
import "../styles/Countries.css"
import {string} from "prop-types";

function Countries(){
    const [countries, setCountries] = React.useState([]);

    type NameType = {
        common: string,
        official: string,
        nativeName: Array<object>
    }

    type CountryType = {
        // name: Array<NameType>
        name: any
        capital: string
        cca3: string
    }

    if (!countries.length){
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                setCountries(res.data);
            })
            .catch(err => console.error(err))
    }

    return(
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Name</th><th>Capital</th><th>Button</th></tr></thead>
            <tbody>
            {countries.map((country : CountryType) => country.capital ?
                <Country key={country.cca3}
                         name={country.name.common} capital={country.capital}/> :
                <Country key={country.cca3}
                         name={country.name.common}/>
            )}
            </tbody>
        </Table>
    )
}

export default Countries