 
import { useState } from "react";


export function Valami(){
    const [ color, setColor ] = useState("#e6abab")

    function changeColor() {
        const ujSzin = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
        //document.body.style.backgroundColor = ujSzin
        setColor(ujSzin)
    }


    return(
        <>
            <button style={{
                backgroundColor: color
            }} onClick={changeColor}>
                Katt {color}
            </button>
        </>
    )
}