import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name, region, area, flags} = props.country;
    return (
        <div className="info">
        <h3> Name: {name.common} </h3>
        <img src={flags.png} alt="" />
        <p> Area: {area} </p>
        <p> <small> Region :{region} </small></p>

        </div>
    );
};

export default Country;