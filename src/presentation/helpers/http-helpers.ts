import { HttpResponse } from '../protocols/http';

const badRequest = (message: string, data?: unknown): HttpResponse => ({
    statusCode: 400,
    body: {
        success: false,
        message,
        data,
    },
});

export { badRequest };
