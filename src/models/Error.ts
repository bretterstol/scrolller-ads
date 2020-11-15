
export interface Error{
    statusCode: number,
    status: string,
    message?: string
}

export const error404 : Error = {
    statusCode: 404,
    status: "Not found",
}