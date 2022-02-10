import { NumberDecomposerService } from './number-decomposer-service';

describe('Number Decomposer Service', () => {
    test('Should call NumberDecomposerService.decompose with correct values', () => {
        const sut = new NumberDecomposerService();

        const number = 1;

        const spyNumberDecomposerService = jest.spyOn(sut, 'decomposer');

        sut.decomposer(number);

        expect(spyNumberDecomposerService).toHaveBeenCalledWith(number);
    });
});
