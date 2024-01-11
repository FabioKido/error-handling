export default class ApiError extends Error {
	readonly statusCode: number

	constructor(message: string, statusCode: number) {
		super(message)
		this.statusCode = statusCode
	}
}

export class BadRequestError extends ApiError {
	constructor(message: string) {
		super(message, 500)
	}
}