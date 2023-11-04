export const rollAllDice = () => {
    const diceToClick = document.querySelectorAll(".dice");
    diceToClick.forEach((die) => (die as HTMLElement).click());
};