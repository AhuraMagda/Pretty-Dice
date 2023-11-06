import { useEffect, useState } from "react";
import { getRandom } from "../helpers/getRandom";


export const useDiceCube = (
  changeSide: ((newSide: string, id: number) => void) | undefined,
  id: number
) => {
  const sides = ["show-1", "show-2", "show-3", "show-4", "show-5", "show-6"];

  const [currentSide, setCurrentSide] = useState(getRandom(sides));

  const changeCurrentSide = () => {
    setCurrentSide((prevCurrentSide) => {
      let newCurrentSide;
      do {
        newCurrentSide = getRandom(sides);
      } while (newCurrentSide === prevCurrentSide);
      return newCurrentSide;
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeSide && changeSide(currentSide, id);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [currentSide]);

  return {
    changeCurrentSide,
    currentSide
  }
}

