import { TenziesWinnersBoardProps } from "../../types/types";

export default function TenziesWinnersBoard(props: TenziesWinnersBoardProps) {
  return (
    <div className="players-board">
      {!props.isPlayerOnTheBoard && (
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={props.playerName}
            onChange={props.handlePlayerName}
          />
          <button id="players-board__button" onClick={props.addNewPlayer}>
            save
          </button>
        </div>
      )}
      <h2>TOP 10</h2>
      <table className="players-board__table">
        <thead>
          <tr>
            <td>NAME</td>
            <td>SCORE</td>
            <td>DATE</td>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}
