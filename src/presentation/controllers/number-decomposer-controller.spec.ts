import { Decomposed, NumberDecomposer } from '../../domain/userCases/number-decomposer';
import { badRequest } from '../helpers/http-helpers';
import { NumberDecomposerController } from './number-decomposer-controller';

type SutTypes = {
    sut: NumberDecomposerController
    numberDecomposerStub: NumberDecomposer
}

const makeNumberDecomposer = (): NumberDecomposer => {
    class NumberDecomposerStub implements NumberDecomposer {
        // eslint-disable-next-line no-unused-vars
        decomposer(number: number): Decomposed {
            const fakeNumberDecomposeD = {
                number: 45,
                dividingNumbers: [1, 3, 5, 9, 15, 45],
                primeNumbers: [1, 3, 5],
            };

            return fakeNumberDecomposeD;
        }
    }

    return new NumberDecomposerStub();
};

const makeSut = (): SutTypes => {
    const numberDecomposerStub = makeNumberDecomposer();
    const sut = new NumberDecomposerController(numberDecomposerStub);

    return { sut, numberDecomposerStub };
};

describe('Number Decomposer Controller', () => {
    test('Should return 400 if no number is provided', () => {
        const { sut } = makeSut();

        const httpRequest = {
            body: {},
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('O número é obrigatório!'));
    });

    test('Should return 400 if number is no a numeric type', () => {
        const { sut } = makeSut();

        const httpRequest = {
            body: {
                number: '1',
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('Formato do número inválido!'));
    });

    test('Should return 400 if number provided is less to be one', () => {
        const { sut } = makeSut();

        const httpRequest = {
            body: {
                number: -1,
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse).toEqual(badRequest('O número fornecido não pode ser menor que um!'));
    });

    test('Should call NumberDecomposer with correct value', () => {
        const { sut, numberDecomposerStub } = makeSut();

        const spyNumberDecomposerStub = jest.spyOn(numberDecomposerStub, 'decomposer');

        const httpRequest = {
            body: {
                number: 1,
            },
        };

        sut.handle(httpRequest);

        expect(spyNumberDecomposerStub).toHaveBeenCalledWith(httpRequest.body.number);
    });

    test('Should return 500 if NumberDecomposer throws ', () => {
        const { sut, numberDecomposerStub } = makeSut();

        jest.spyOn(numberDecomposerStub, 'decomposer').mockImplementationOnce(() => { throw new Error(); });

        const httpRequest = {
            body: {
                number: 1,
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.body).toEqual(new Error());
    });
});
