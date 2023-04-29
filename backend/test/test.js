const { expect } = require("chai");

describe("ShardeumGreeter", function () {
    it("Should return the new message once it's changed", async function () {
        const ShardeumGreeter = await ethers.getContractFactory("ShardeumGreeter");
        const greeter = await ShardeumGreeter.deploy("Hello, Shardeum!");

        await greeter.deployed();
        expect(await greeter.getMessage()).to.equal("Hello, Shardeum!");

        await greeter.setMessage("Updated message");
        expect(await greeter.getMessage()).to.equal("Updated message");
    }).timeout(80000);
});





