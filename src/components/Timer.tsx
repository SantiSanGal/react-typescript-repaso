import { useEffect, useRef, useState } from "react"

type timerArgs = {
    milisegundos: number
}

export const Timer = ({ milisegundos }: timerArgs) => {
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timer>(); // No importa cuántas veces se reconstruya el componente
    //siempre va a guardar el mismo puntero de memoria 
    console.log(milisegundos);


    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos)
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}