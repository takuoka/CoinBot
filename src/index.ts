/// <reference path="../node_modules/better-typescript-lib/lib.es5.d.ts" />
/// <reference path="../node_modules/better-typescript-lib/lib.dom.d.ts" />

import {BitflyerAPI} from "./BitflyerAPI.js"

// START
console.log("START!!!!")

const bitflyer = new BitflyerAPI()

var price = bitflyer.fetchPrice()
console.log(price)