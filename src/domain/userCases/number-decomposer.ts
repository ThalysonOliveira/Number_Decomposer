/* eslint-disable no-unused-vars */
type Decomposed = {
    number: number
    dividingNumbers: number[],
    primeNumbers: number[],
}

interface NumberDecomposer {
    decomposer(number: number): Decomposed
}

export { NumberDecomposer, Decomposed };
