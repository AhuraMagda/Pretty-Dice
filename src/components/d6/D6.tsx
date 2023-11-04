import "./D6.css";
import { D6Props } from "../../types/types";
import { rollTheDie } from "./helpers/rollTheDie";
import { getRandom } from "./helpers/getRandom";
import { useState, useEffect } from "react";

export default function D6(props: D6Props) {
  const sides = ["show-5", "show-6", "show-4", "show-3", "show-1", "show-2"];

  const [currentSide, setCurrentSide] = useState(sides[getRandom(sides)]);

  const changeCurrentSide = () => {
    setCurrentSide((prevCurrentSide) => {
      let newCurrentSide;
      do {
        newCurrentSide = sides[Math.floor(Math.random() * sides.length)];
      } while (newCurrentSide === prevCurrentSide);
      return newCurrentSide;
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.changeSide && props.changeSide(currentSide, props.id);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [currentSide]);

  return (
    <div
      className={`dice ${currentSide}`}
      id={props.id.toString()}
      onClick={() => {
        rollTheDie(changeCurrentSide);
      }}
    >
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  );
}
