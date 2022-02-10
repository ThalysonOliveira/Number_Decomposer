import { NumberDecomposerService } from './number-decomposer-service';

const makeSut = (): NumberDecomposerService => {
    const sut = new NumberDecomposerService();

    return sut;
};

describe('Number Decomposer Service', () => {
    test('Should call NumberDecomposerService.decompose with correct values', () => {
        const sut = makeSut();

        const number = 1;

        const spyNumberDecomposerService = jest.spyOn(sut, 'decomposer');

        sut.decomposer(number);

        expect(spyNumberDecomposerService).toHaveBeenCalledWith(number);
    });

    test('Should return the number decomposed with its properties', async () => {
        const sut = makeSut();

        const number = 1;

        const decomposed = sut.decomposer(number);

        expect(decomposed).toHaveProperty('number');
        expect(decomposed).toHaveProperty('dividingNumbers');
        expect(decomposed).toHaveProperty('primeNumbers');
    });

    test('Should return the number decomposed on success', async () => {
        const sut = makeSut();

        const number = 1;

        const decomposed = sut.decomposer(number);

        expect(decomposed).toEqual(decomposed);
    });
});
