export const instanceOf = (object: any, field: string) => {
    return field in object;
}