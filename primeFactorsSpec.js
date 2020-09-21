describe("sieveOfEratosthenes", () => {

});
describe("primeFactors", () => {

    it('returns an empty collection for 1', () => {
        expect(primeFactors(1)).toEqual([]);
    });

    it('returns prime numbers in a collection by themselves', () => {
        let primes = [2, 3, 5, 7, 11];
        primes.forEach((number) => {
            expect(primeFactors(number)).toEqual([number]);
        });
    });

    it('returns prime factorization of non-prime numbers greater than 1', () => {
        let knownFactorizations = {
            4: [2, 2],
            6: [2, 3],
            8: [2, 2, 2],
            9: [3, 3],
            10: [2, 5],
            12: [2, 2, 3],
            873: [3, 3, 97],
            12056: [2, 2, 2, 11, 137],
            123123123: [3, 3, 41, 333667],
        };

        for (const key of Object.keys(knownFactorizations)) {
            expect(primeFactors(key)).toEqual(knownFactorizations[key]);
            console.log(key, knownFactorizations[key]);
        }
    });
});