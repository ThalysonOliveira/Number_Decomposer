import { NumberDecomposeController } from './number-decompose-controller';

describe('Number Decompose Controller', () => {
    test('Should return 400 if no number is provided', () => {
        const sut = new NumberDecomposeController();

        const httpRequest = {
            body: {
                number: 1,
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(400);
    });
});
