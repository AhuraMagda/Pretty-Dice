import "./DiceCube.css";
import { DiceCubeProps } from "../../types/types";
import { rollTheDie } from "./helpers/rollTheDie";
import { useDiceCube } from "./hooks/useD6";

export default function DiceCube({ changeSide, id }: DiceCubeProps) {
  const { changeCurrentSide, currentSide } = useDiceCube(changeSide, id)
  return (
    <div
      className={`dice ${currentSide}`}
      id={id.toString()}
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
