import React, {useState} from 'react'

export default function Prueba_1() {

    const [text, setText] = useState()
    
    const [update, setUpdate] = useState()


    const textOnChange = (event) => {
        setText(event.target.value)
    }
    
    const buttonOnClick = (event) => {
        setText(event.target.value)
    }
    
    return (
        <div>
            <input type="text" value={text} onChange={textOnChange}/>
            <button>Actualizar</button>
            <p>Texto input: {text}</p>
            <p>Texto actualizar</p>
        </div>
    )
}
