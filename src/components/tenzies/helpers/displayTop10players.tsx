import { UsersArrayProps } from "../../../types/types";

export const displayTop10players = (usersArray: UsersArrayProps[]) => {
  const playersByScore: JSX.Element[] = [];

  usersArray.forEach(
    (player) =>
      playersByScore.length <= 9 &&
      playersByScore.push(
        <tr key={player.id}>
          <td>{player.name}</td>
          <td>{player.score}</td>
          <td>{`${player.date}`}</td>
        </tr>
      )
  );

  return playersByScore;
};
