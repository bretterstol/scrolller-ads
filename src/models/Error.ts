
interface ErrorType {
    _type: string
}

export interface Error extends ErrorType{
    statusCode: number,
    status: string,
    message?: string
}

const _defaultError = {
    _type: "Error"
}

const _error404 = {
    statusCode: 404,
    status: "Not found",
}

const _error500 = {
    statusCode: 500,
    status: "Server is having some problems"
}

export const error404 : Error = {
    ..._defaultError,
    ..._error404
}

export const error500 : Error = {
    ..._defaultError,
    ..._error500
}