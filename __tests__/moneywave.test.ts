import Moneywave from '../src/Moneywave';
import { config } from './config';

describe("Moneywave", () => {
    test("cache is not null", () => {
        let moneywave = new Moneywave({
            apiKey: config.apiKey,
            apiSecret: config.apiSecret,
            cache: true
        });
        expect(moneywave.cache).not.toBeNull();
    })
})