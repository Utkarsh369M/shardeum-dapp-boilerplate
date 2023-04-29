const hre = require("hardhat");

async function main() {
  const ShardeumGreeter = await hre.ethers.getContractFactory("ShardeumGreeter");
  const shardeumGreeter = await ShardeumGreeter.deploy("Hello, Shardeum!");

  await shardeumGreeter.deployed();

  console.log("ShardeumGreeter deployed to:", shardeumGreeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
