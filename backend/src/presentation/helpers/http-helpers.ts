import { HttpResponse } from '../protocols/http';

const badRequest = (message: string, data?: unknown): HttpResponse => ({
    statusCode: 400,
    body: {
        success: false,
        message,
        data,
    },
});

const ok = (message: string, data?: unknown): HttpResponse => ({
    statusCode: 200,
    body: {
        success: true,
        message,
        data,
    },
});

const serverError = (): HttpResponse => ({
    statusCode: 500,
    body: {
        message: 'Error interno no servidor!',
    },
});

export { badRequest, ok, serverError };
