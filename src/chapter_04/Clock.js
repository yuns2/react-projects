import React from "react"
import ReactDOM from 'react-dom';

function Clock(props) {
    const element = (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}

export default Clock