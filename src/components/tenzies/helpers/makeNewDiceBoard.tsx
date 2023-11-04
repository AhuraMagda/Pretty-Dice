import D6 from "../../d6/D6";

export const makeNewDiceBoard = (handleSideChange: (newSide: string, id: number)=> void) => {
    const randomDiceArray = [];
    for (let i = 0; i < 8; i++) {
      randomDiceArray.push(<D6 key={i} id={i} changeSide={handleSideChange} />);
    }
    return randomDiceArray;
  };