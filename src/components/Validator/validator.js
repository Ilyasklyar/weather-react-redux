export const requred = value => {
    if(value) return undefined;
    return 'please enter a city';
}

export const maxLength = (maxLength) => value => {
    if(value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}
