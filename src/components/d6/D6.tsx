import "./D6.css";
import { D6Props } from "../../types/types";
import { rollTheDie } from "./helpers/rollTheDie";
import { useD6 } from "./hooks/useD6";

export default function D6({ changeSide, id }: D6Props) {
  const { changeCurrentSide, currentSide } = useD6(changeSide, id)
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
