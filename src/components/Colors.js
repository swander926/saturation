import React, { useState } from 'react'

const Colors = () => {
  const [hueValue, computeHueValue] = useState(Math.floor(Math.random() * 360))
  const [satValue, computeSatValue] = useState(Math.floor(Math.random() * 100))
  const [lightValue, computeLightValue] = useState(
    Math.floor(Math.random() * 100)
  )
  // const [alphaValue, computeAlphaValue] = useState(
  //   Math.floor(Math.random() * 100)
  // )

  const getHue = tempVariable => {
    computeHueValue(tempVariable.target.value)
  }

  const getSat = tempVariable => {
    computeSatValue(tempVariable.target.value)
  }

  const getLight = tempVariable => {
    //better explanation regarding temp variable
    computeLightValue(tempVariable.target.value)
  }

  // const getAlpha = tempVariable => {
  //   computeAlphaValue(tempVariable.target.value)
  // }

  const divStyle = {
    backgroundColor:
      'hsl(' + hueValue + ',' + satValue + '%,' + lightValue + '%)',
  }

  const reset = () => {
    window.location.reload()
  }

  return (
    <>
      <section className="container">
        <br></br>
        <div>Color</div>
        <br></br>
        <div className="background" style={divStyle}></div>
        <br></br>
        <section>
          <div>H</div>
          <input type="range" min="0" max="360" onChange={getHue} />
          <div>S</div>
          <input type="range" min="0%" max="360%" onChange={getSat} />
          <div>L</div>
          <input type="range" min="0%" max="360%" onChange={getLight} />
          <div>A</div>
          {/* <input type="range" min="0%" max="100%" onChange={getAlpha} /> */}

          <br></br>
          <br></br>
          <div>
            H: {hueValue} S: {satValue} L: {lightValue}
          </div>
        </section>
        <br></br>
        <button onClick={reset}>Pick a colorful Poison!</button>
      </section>
    </>
  )
}

export default Colors
