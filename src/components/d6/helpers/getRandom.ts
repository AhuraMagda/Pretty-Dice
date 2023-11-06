export const getRandom = (value: string[]) => {
    return value[Math.floor(Math.random() * value.length)]
}