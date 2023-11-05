import { QuerySnapshot } from "firebase/firestore";
import { usersArrayProps } from "../../../types/types";

export const getAndSortUsersArray = (snapshot: QuerySnapshot) => {
  const usersArray: usersArrayProps[] = snapshot.docs.map((player) => ({
    ...player.data(),
    id: player.id,
    name: player.data().name,
    score: player.data().score,
    date: player.data().date,
  }));

  usersArray.sort((a, b) => a.score - b.score);
  return usersArray;
};
