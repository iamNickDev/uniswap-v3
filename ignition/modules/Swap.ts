import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SwapModule", (m) => {
  const uniswapV3 = m.contract("UniswapV3SingleHopSwap", []);

//   m.call(apollo, "launch", []);

  return { uniswapV3 };
}); 