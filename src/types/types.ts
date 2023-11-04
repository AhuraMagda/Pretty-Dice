export type D6Props = {
    id: number, 
    key: number,
    isHeld?: boolean,
    changeSide?: (newSide: string, id: number) => void
}

export type RollDiceButtonsProps = {
    addDie: () => void,
    deleteDie: () => void
  }