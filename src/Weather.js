import React from "react";
import './App.css';
import axios from 'axios';
import { Hearts } from 'react-loader-spinner'

export default function Weather(props) {
    function handleResponse(response) {
        alert(`Weather is in ${response.data.name} is ${response.data.main.temp}℃`);
    }
    let apiKey = "ef83a86d6c6e19e2b4352f1ab9249fd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return (
        <h1><Hearts
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /></h1>
    );
}
