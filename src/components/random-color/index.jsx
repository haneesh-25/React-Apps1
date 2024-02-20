import { useState } from "react"

export default function RandomColor() {

  const [color, setColor] = useState('#000000')

  function changeColor() {
    const arr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'

    for (let i=0;i<6;i++) {
      hexColor += arr[Math.floor(Math.random()*arr.length)]
    }
    setColor(hexColor)
  }

  return <div className="container" style={{
    width: '100vw',
    height: '100vh',
    background: color,
    'box-sizing': 'border-box',
    padding: '50px',
  }}>
    <button onClick={changeColor}>Generate RandomColor</button>
    <div className="colorInfo" style={{
      display: 'flex',
      marginTop: '50px',
      justifyContent: 'center',
      fontSize: '60px',
      color: 'white',
    }}>
      {color}
    </div>
  </div>
}
