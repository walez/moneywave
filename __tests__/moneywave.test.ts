import Moneywave from '../src/Moneywave';

describe("Moneywave", () => {
    test("cache is not null", () => {
        let moneywave = new Moneywave({
            apiKey: "",
            apiSecret: "",
            cache: true
        });
        expect(moneywave.cache).not.toBeNull();
    })
})