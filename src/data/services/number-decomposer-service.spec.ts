import { NumberDecomposerService } from './number-decomposer-service';

describe('Number Decomposer Service', () => {
    test('Should call NumberDecomposerService.decompose with correct values', () => {
        const sut = new NumberDecomposerService();

        const number = 1;

        const spyNumberDecomposerService = jest.spyOn(sut, 'decomposer');

        sut.decomposer(number);

        expect(spyNumberDecomposerService).toHaveBeenCalledWith(number);
    });

    test('Should return the number decomposed with its properties', async () => {
        const sut = new NumberDecomposerService();

        const number = 1;

        const decomposed = sut.decomposer(number);

        expect(decomposed).toHaveProperty('number');
        expect(decomposed).toHaveProperty('dividingNumbers');
        expect(decomposed).toHaveProperty('primeNumbers');
    });
});
