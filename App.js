import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () =>(
    <div>
        <h1>Hello from Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);