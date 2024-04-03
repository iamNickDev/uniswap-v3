import { ethers } from "ethers";
import { SingleSwap__factory } from "artifacts/contracts/swap.sol";

async function deploySingleSwap(provider: ethers.Provider , swapRouterAddress: string) {
  const signer = provider.getSigner();
  const factory = new SingleSwap__factory(signer);
  const contract = await factory.deploy(swapRouterAddress);
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

const provider = ; 
const swapRouterAddress = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E";
deploySingleSwap(provider, swapRouterAddress)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
