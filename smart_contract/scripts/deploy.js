const main = async () => {
  //Create a new contract instance
  const Transactions = await hre.ethers.getContractFactory("Transaction");

  //Deploy the contract
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
