export const updateSidesOfAllDice = (
    prevSides: string[], 
    id: number, 
    newSide: string
    ) => {
    return prevSides.map((side, index) => (index === id ? newSide : side))
}