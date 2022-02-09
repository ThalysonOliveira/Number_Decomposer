class NumberDecomposeController {
    handle(httpRequest: any): any {
        if (!httpRequest.body.number) {
            return {
                statusCode: 400,
                body: new Error('O número obrigatório!'),
            };
        }

        if (typeof httpRequest.body.number !== 'number') {
            return {
                statusCode: 400,
                body: new Error('Formato do número inválido!'),
            };
        }

        return {
            statusCode: 200,
        };
    }
}

export { NumberDecomposeController };
