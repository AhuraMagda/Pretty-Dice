
import { usersArrayProps } from "../../../types/types";

export const displayTop10players = (usersArray: usersArrayProps[]) => {
    const playersByScore: JSX.Element[] = [];
      
    usersArray.forEach(
      (player) =>
        playersByScore.length <= 9 &&
        playersByScore.push(
          <li key={player.id}>
            {`${player.name} - ${player.score} - ${player.date}`}
          </li>
        )
    );

    return playersByScore;
}










