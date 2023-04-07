import { PLAYNANCE_ABI } from './abi';
import {
  toUtf8Bytes,
  hexlify,
  parseEther,
  formatEther,
} from 'ethers/lib/utils';
import { getContract } from '@wagmi/core';
import { alchemy } from './alchemy';
import { BigNumber } from 'ethers';

const PLAYNANCE_ADDRESS_MUMBAI = '0xe9c238201373FA63E402f85Ff7d954782F271ceA';

type HexString = `0x${string}`;

export async function prepareTransaction({
  address,
  upOrDown,
}: {
  address: string;
  upOrDown: boolean;
}) {
  const contract = getContract({
    address: PLAYNANCE_ADDRESS_MUMBAI,
    abi: PLAYNANCE_ABI,
  });

  const gasPrice = await alchemy.core.getGasPrice();

  const tx = await contract.populateTransaction.makeTrade(
    {
      poolId: hexlify(toUtf8Bytes('30:30')) as HexString,
      avatarUrl: 'https://avatars.githubusercontent.com/u/1120141?v=4',
      countryCode: 'US',
      upOrDown: upOrDown,
      whiteLabelId: 'quv',
    },
    {
      from: address as HexString,
      value: parseEther('0.0002'),
      gasPrice: gasPrice,
      gasLimit: BigNumber.from(750000),
    }
  );

  const hexlified = {
    ...tx,
  };

  // @ts-ignore
  hexlified.value = BigNumber.from(tx.value).toHexString();
  // @ts-ignore
  hexlified.gasLimit = BigNumber.from(tx.gasLimit).toHexString();
  // @ts-ignore
  hexlified.gasPrice = BigNumber.from(tx.gasPrice).toHexString();

  return hexlified;
}
