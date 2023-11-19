import { QuerySnapshot } from "firebase/firestore";
import { UsersArrayProps } from "../../../types/types";

export const getAndSortUsersArray = (snapshot: QuerySnapshot) => {
  const usersArray: UsersArrayProps[] = snapshot.docs.map((player) => ({
    ...player.data(),
    id: player.id,
    name: player.data().name,
    score: player.data().score,
    date: player.data().date,
  }));

  usersArray.sort((a, b) => a.score - b.score);
  return usersArray;
};