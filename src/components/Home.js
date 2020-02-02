import React from "react";

const lakes = [];
const fetchlakes = () => {
    fetch("https://jasonserverhoustonfishing.herokuapp.com/lakes")
        .then(res => res.json())
        .then(rsp => {
            console.log(rsp);
            lakes.push(rsp);
        });
};

const Home = () => {
    return(
    <div>
        <h1>THIS IS HOME</h1>
        
        <button onClick={() => fetchlakes()}>Call for Lakes</button>
    </div>
    )};
export default Home;
