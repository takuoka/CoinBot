/// <reference path="../node_modules/better-typescript-lib/lib.es5.d.ts" />
/// <reference path="../node_modules/better-typescript-lib/lib.dom.d.ts" />

import {BitflyerAPI} from "./BitflyerAPI"

// START
console.log("START!!!!")

const bitflyer = new BitflyerAPI()

async function main() {
    var price = await bitflyer.fetchPrice()
    console.log(price)
}

main()