export const startNewGame = (onUpdateTenzies: (
  arg: boolean)=> void, 
  onUpdateClickCount: (arg: number) => void
  ) => {
    onUpdateTenzies(false);
    onUpdateClickCount(0);
  };