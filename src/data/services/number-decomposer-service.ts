import { Decomposed, NumberDecomposer } from '../../domain/userCases/number-decomposer';

class NumberDecomposerService implements NumberDecomposer {
    decomposer(number: number): Decomposed {
        const decomposed = {
            number,
            dividingNumbers: [],
            primeNumbers: [],
        };

        return decomposed;
    }
}

export { NumberDecomposerService };
