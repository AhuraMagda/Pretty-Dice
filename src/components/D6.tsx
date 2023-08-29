import "./D6.css"
import React from "react"


type D6Props = {
    id: Number, 
    key: Number
}

function D6(props: D6Props) {
    const sides = ['show-top', 'show-bottom', 'show-right', 'show-left', 'show-front', 'show-back']

    const [randomSide, setRandomSide] = React.useState(sides[Math.floor(Math.random()*sides.length)]);

    const changeSide = () => {
        let newRandomSide = sides[Math.floor(Math.random()*sides.length)]
        while (newRandomSide === randomSide) {
          newRandomSide = sides[Math.floor(Math.random()*sides.length)]
        }
        setRandomSide(newRandomSide)
      }

    const roll = () => {
        changeSide()
        setTimeout(() => {changeSide();}, 500);
        setTimeout(() => {changeSide();}, 1000);
        setTimeout(() => {changeSide();}, 1500);
        setTimeout(() => {changeSide();}, 2000);
    }

    // zamiana właściwości ale nie mogę dostać wysokości
    // document.documentElement.style.setProperty('--half-height', '200px');
    // document.documentElement.style.setProperty('--half-height', '100px');
    // document.documentElement.style.setProperty('--quarter-height', '50px');
    // document.documentElement.style.setProperty('--minus-quarter-height', '-50px');
    


    return (
        <div className={`dice ${randomSide}`} id={(props.id).toString()}onClick={roll}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </div>     
    )
}

export default D6