import { useEffect, useState } from "react";
import { getRandom } from "../helpers/getRandom";


export const useD6 = (
  changeSide: ((newSide: string, id: number) => void) | undefined,
  id: number
) => {
  const sides = ["show-5", "show-6", "show-4", "show-3", "show-1", "show-2"];

  const [currentSide, setCurrentSide] = useState(sides[getRandom(sides)]);

  const changeCurrentSide = () => {
    setCurrentSide((prevCurrentSide) => {
      let newCurrentSide;
      do {
        // FIXME move the logic out
        newCurrentSide = sides[Math.floor(Math.random() * sides.length)];
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

