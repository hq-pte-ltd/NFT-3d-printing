import { Stat } from "../public/Stat";
import { CandyShopDataValidator } from "../public/Context";
import { OrdersP } from "../public/OrdersP";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";
import { OrdersA } from "../public/OrdersA";
const AlgorithmFilter: React.FC = () => {
  MetaTagsPage(
    "PRODUCTS",
    "YOU CAN PLACE VARIOUS “PRODUCTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
    "https://www.homeqube.io/products"
  );
  const wallet = useAnchorWallet();

  return (
    <>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
        <li>
          <NavLink to="/structural-legacies">Structural Legacies</NavLink>
        </li>
        <li>
          <NavLink to="/home-designs">Home Designs</NavLink>
        </li>
        <li>
          <NavLink to="/system-architecture">SYSTEM ARCHITECTURE</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/algorithm" className="active">
            ALGORITHM
          </NavLink>
        </li>
      </nav>
      <DesContainer>
        <Stat
          candyShop={candyShop}
          title={""}
          description={""}
          style={{ paddingBottom: 50 }}
        />
        <CandyShopDataValidator>
          <OrdersA
            wallet={wallet}
            candyShop={candyShop}
            defaultFilter={{ collection: "1", shop: "" }}
            walletConnectComponent={<WalletMultiButton />}
            filters={FILTERS}
            filterSearch
            search
          />
        </CandyShopDataValidator>
      </DesContainer>
    </>
  );
};

export default AlgorithmFilter;

const FILTERS = [
  {
    name: "Algorithms",
    collectionId: "1",
    identifier: [-45564651],
    qubeClaims: "",
    description:
      "YOU CAN PLACE VARIOUS “ALGORITHM” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
    description2: "HomeQube’s Structural Legacy System.",
    description3: "",
    description4: "",
  },
];

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #fff;

    li:hover {
      color: #7522f5;
    }

    .candy-search input {
      padding: 10px 4px 10px 24px;
      width: 100%;
    }
  }
`;
