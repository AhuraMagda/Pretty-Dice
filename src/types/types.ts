import { ChangeEvent } from "react";

export type D6Props = {
  id: number;
  key: number;
  isHeld?: boolean;
  changeSide?: (newSide: string, id: number) => void;
};

export type RollDiceButtonsProps = {
  addDie: () => void;
  deleteDie: () => void;
};

export interface TenziesProps {
  onUpdateTenzies: (value: boolean) => void;
  clickCount?: number;
  onUpdateClickCount: (value: number) => void;
}


export type usersArrayProps = {
  id: string,
  name: string,
  score: number,
  date: Date
}

export interface TenziesWinnersBoardProps {
    isPlayerOnTheBoard: boolean,
    playerName: string,
    handlePlayerName: (event: ChangeEvent<HTMLInputElement>)=>void,
    addNewPlayer: ()=> void,
    children: JSX.Element[]
}