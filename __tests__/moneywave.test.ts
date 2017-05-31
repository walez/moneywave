import Moneywave from '../src/Moneywave';
import Config from './config';

describe("Moneywave", () => {
    test("cache is not null", () => {
        let moneywave = new Moneywave({
            apiKey: Config.apiKey
            apiSecret: Config.apiSecret
            cache: true
        });
        expect(moneywave.cache).not.toBeNull();
    })
})