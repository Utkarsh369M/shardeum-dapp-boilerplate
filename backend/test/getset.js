const {time,loadFixture,} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { assert } = require("chai");

describe("StringStorage", function () {
  let getseto;

  beforeEach(async () => {
    // Deploy a new instance of the StringStorage contract before each test
    const StringStorage = await ethers.getContractFactory("StringStorage");
    getseto = await StringStorage.deploy();
    await getseto.deployed();
  });

  it("should set and get string correctly", async () => {
    const newString = "Hello, world!";
    await getseto.setString(newString);
    const storedString = await getseto.getString();
    assert.equal(storedString, newString, "String not set or retrieved correctly");
  });
});