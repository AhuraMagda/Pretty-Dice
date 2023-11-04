export const checkIfAllSame = (arr: string[]) => {
    return arr.every((part) => part === arr[0])
}