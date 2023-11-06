import DiceCube from "../../d6/DiceCube";

export const makeNewDiceBoard = (
  handleSideChange: (newSide: string, id: number) => void
) => {
  const randomDiceArray = [];
  for (let i = 0; i < 8; i++) {
    randomDiceArray.push(<DiceCube key={i} id={i} changeSide={handleSideChange} />);
  }
  return randomDiceArray;
};
