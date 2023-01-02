// https://ethereum.stackexchange.com/questions/113329/is-there-a-way-to-get-an-interface-id-of-a-solidity-interface-using-ethersjs
import { Interface } from 'ethers/lib/utils';
import { ethers } from 'ethers';

export const getInterfaceID = (abi) => {
  const contractInterface = new Interface(abi);
  let interfaceID = ethers.constants.Zero;
  const functions = Object.keys(contractInterface.functions);
  for (let i = 0; i < functions.length; i++) {
    interfaceID = interfaceID.xor(contractInterface.getSighash(functions[i]));
  }
  return interfaceID;
}
