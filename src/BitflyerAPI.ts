// 'use strict';
import * as ccxt from 'ccxt';
// var ccxt = require ('ccxt')
import * as configKeys from './ConfigKeys.js';

export class BitflyerAPI {

    private bitflyer: ccxt.bitflyer

    constructor() {
        var config: {[key in keyof ccxt.Exchange]?: ccxt.Exchange[key]} = {
            apiKey: configKeys.default.apiKey,
            secret: configKeys.default.secret
        }
        var bf = new ccxt.bitflyer(config)
        this.bitflyer = bf
    }

    async fetchPrice(): Promise<number | undefined> {

        let ticker = await this.bitflyer.fetchTicker('FX_BTC_JPY')
        return ticker.last

        // return new Promise((resolve, reject) => {
        //     const ticker: Promise<ccxt.Ticker> = this.bitflyer.fetchTicker('FX_BTC_JPY')
        //     ticker.then { aa

        //     }
        //     return ticker.last
        //     })

    }
}
