import { useState } from "react";



const Semaforo = () => {

    const [uno, setUno] = useState(false);
    const [dos, setDos] = useState(false);
    const [tres, setTres] = useState(false);

    const cambiaColor = (a) => {

        if (a.target.className == "circulos3") {
            setUno(true)
            setDos(false)
            setTres(false)
        }

        else if (a.target.className == "circulos2") {
            setUno(false)
            setDos(true)
            setTres(false)


        }
        else if (a.target.className == "circulos1") {
            setUno(false)
            setDos(false)
            setTres(true)

        }



    }

    return (

        <div className="container">
            <div className="semaforo">
                    <span className={uno==true?"circulos3 brillanteRed":"circulos3"}  onClick={(e) => {
                    cambiaColor(e)
                    console.log("red")

                }}></span>
                <span className={dos==true? "circulos2 brillanteYellow":"circulos2"} onClick={(e) => {
                    cambiaColor(e)
                }}></span>
                <span className={tres==true?"circulos1 brillanteGreen":"circulos1"} onClick={(e) => {
                    cambiaColor(e)
                }}></span>

                <div className="sombreado"></div>
            </div>

        </div>
    )
}
export default Semaforo;