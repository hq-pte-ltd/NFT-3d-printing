import { candyShop } from "../utils/candy-shop";
// import { Sell } from "@liqnft/candy-shop";
import { UserCollection } from "../public/MyCollection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useCurrency } from "../components/Currency";
import styled from "styled-components";
import { useMemo } from "react";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

const Fetch: React.FC = () => {
  const wallet = useAnchorWallet();
  // const { getCurrencySettings } = useCurrency();
  // const settings = getCurrencySettings();

  // const candyShop = useMemo(
  // //   () =>
  // //     new CandyShop({
  // //       candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
  // //       treasuryMint: new PublicKey(settings.treasuryMint),
  // //       candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
  // //       env: NETWORK,
  // //       settings,
  // //     }),
  // //   [settings]
  // // );

  // // if (!candyShop) {
  // //   return <></>;
  // // }

  return (
    <DesContainer>
      <section className="pt-5 bg-collection-2 text-start text-light text-uppercase">
        <h1 className="community-collection-title">My Collection</h1>
      </section>
      <UserCollection
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default Fetch;
