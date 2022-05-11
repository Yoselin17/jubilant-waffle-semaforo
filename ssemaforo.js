import { useState } from "react";
import './app.css';



const ssemaforo = () => {

    const [color, setColor] = useState("red");

    console.log(color)

    return (

        <div id="ssemaforo">
            <div onClick={() => {
                setColor("red")
            }} className="light" id="red"></div>

        </div>
    )
}

<div id="ssemaforo">
        <div onClick={()=>{
            setColor("orange")
        }}className="light" id="orange"></div>

    </div>
    }

<div id="ssemaforo">
<div onClick={()=>{
    setColor("green")
}}className="light" id="green"></div>

</div>
}