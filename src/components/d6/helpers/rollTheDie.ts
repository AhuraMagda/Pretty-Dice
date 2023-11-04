export const rollTheDie = (changeCurrentSide: ()=>void) => {
    changeCurrentSide()
    setTimeout(() => {changeCurrentSide();}, 500);
    setTimeout(() => {changeCurrentSide();}, 900);
    setTimeout(() => {changeCurrentSide();}, 1200);
    setTimeout(() => {changeCurrentSide();}, 1600);
}