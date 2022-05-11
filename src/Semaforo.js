import { useState } from "react";



const Semaforo = () => {

    const [color, setColor] = useState("yellow");

    console.log(color)

    return (

        <div className="container">
            <div className="semaforo">
                <span className="circulos3" onClick={() => {
                    setColor("red")
                }}></span>
                <span className="circulos2" onClick={() => {
                    setColor("yellow")
                }}></span>
                <span className="circulos1" onClick={() => {
                    setColor("green")
                }}></span>
            </div>
        </div>
    )
}
export default Semaforo;