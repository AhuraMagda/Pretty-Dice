export const addEventListnerToAll = (
  elements: NodeListOf<HTMLDivElement>,
  clickHandler: () => void,
  event: string
) => {
  elements.forEach((element) => element.addEventListener(event, clickHandler));
};

export const removeEventListnersFromAll = (
  elements: NodeListOf<HTMLDivElement>,
  clickHandler: () => void,
  event: string
) => {
  elements.forEach((element) =>
    element.removeEventListener(event, clickHandler)
  );
};
