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

    const [currentSide, setCurrentSide] = React.useState(sides[Math.floor(Math.random()*sides.length)]);    

    const changeCurrentSide = () => {
    setCurrentSide((prevCurrentSide) => {
        let newCurrentSide;
        do {
        newCurrentSide = sides[Math.floor(Math.random() * sides.length)];
        } while (newCurrentSide === prevCurrentSide);
        return newCurrentSide;
    });
    };

    const roll = () => {
        changeCurrentSide()
        setTimeout(() => {changeCurrentSide();}, 500);
        setTimeout(() => {changeCurrentSide();}, 900);
        setTimeout(() => {changeCurrentSide();}, 1200);
        setTimeout(() => {changeCurrentSide();}, 1600);
    }

    React.useEffect(()=> {
        const timeoutId = setTimeout(()=>{
            props.changeSide && props.changeSide(currentSide, props.id)
        }, 300)
        return () => clearTimeout(timeoutId)
    }, [currentSide])
    
    return (
        <div className={`dice ${currentSide}`} id={(props.id).toString()} onClick={roll}>
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