import { Decomposed, NumberDecomposer } from '../../domain/userCases/number-decomposer';

class NumberDecomposerService implements NumberDecomposer {
    decomposer(number: number): Decomposed {
        const decomposed: Decomposed = {
            number,
            dividingNumbers: [],
            primeNumbers: [1],
        };

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) decomposed.dividingNumbers.push(i);
        }

        for (const numbers of decomposed.dividingNumbers) {
            let numberOfDivisor = 0;

            for (let i = 1; i <= numbers; i++) {
                if (numbers % i === 0) numberOfDivisor++;
            }

            if (numberOfDivisor === 2) decomposed.primeNumbers.push(numbers);
        }

        return decomposed;
    }
}

export { NumberDecomposerService };
