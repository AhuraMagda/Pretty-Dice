import "./D6.css"
import React from "react"

type D6Props = {
    id: number, 
    key: number,
    isHeld?: boolean,
    changeSide?: (newSide: string, id: number) => void
}

function D6(props: D6Props) {
    const sides = ['show-5', 'show-6', 'show-4', 'show-3', 'show-1', 'show-2']

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
        setTimeout(() => {changeSide();}, 900);
        setTimeout(() => {changeSide();}, 1200);
        setTimeout(() => {changeSide();}, 1600);
    }

    React.useEffect(()=>{
        props.changeSide && props.changeSide(randomSide, props.id)
    }, [randomSide])
    
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