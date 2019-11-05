
export const required = value => {
    if(value) return undefined
    return 'Поле не заполненно'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Превышено максимальное число символов ${maxLength}`
    return undefined
}
