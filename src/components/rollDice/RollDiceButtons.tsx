import { rollAllDice } from "./helpers/rollAllDice"
import { RollDiceButtonsProps } from "../../types/types";

function RollDiceButtons(props: RollDiceButtonsProps) {
  return (
    <div className="buttons-container">
      <button className="add-btn" onClick={props.addDie}>
        Add Die
      </button>
      <button className="add-btn" onClick={props.deleteDie}>
        Delete Die
      </button>
      <button className="roll-btn" onClick={rollAllDice}>
        Roll
      </button>
    </div>
  );
}

export default RollDiceButtons;
