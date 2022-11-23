import { Stat } from "../public/Stat";
import { CandyShopDataValidator } from "../public/Context";
import { OrdersHD } from "../public/OrdersHD";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";
const HomeDesignFilter: React.FC = () => {
  MetaTagsPage(
    "HOME DESIGNS",
    "YOU CAN PLACE VARIOUS HOME DESIGNS HERE THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
    "https://www.homeqube.io/home-designs"
  );
  const wallet = useAnchorWallet();

  return (
    <>
      <section className="pt-5 bg-collection-2 text-start text-light text-uppercase">
        <h1 className="community-collection-title">Community Collection</h1>
      </section>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-5">
        <li>
          <NavLink to="/home-designs" className="active">
            Home Generative Designs and Algorithms
          </NavLink>
        </li>
        <li>
          <NavLink to="/home-products">Home Products</NavLink>
        </li>
        <li>
          <NavLink to="/just-for-fun">JUST-FOR-FUN (JFF)</NavLink>
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
          <OrdersHD
            wallet={wallet}
            candyShop={candyShop}
            walletConnectComponent={<WalletMultiButton />}
            filters={FILTERS}
            defaultFilter={{ collection: "1", shop: "" }}
            filterSearch
            search
          />
        </CandyShopDataValidator>
      </DesContainer>
    </>
  );
};

export default HomeDesignFilter;

const FILTERS = [
  {
    name: "Highlighted Projects",
    collectionId: "1",
    identifier: 1462698944,
    qubeClaims: "",
    description:
      "Community collection of home designs generating bottom-up architecture",
    description2: "HomeQube’s Structural Legacy System.",
    description3: "",
    description4: "",
  },
  {
    name: "Community Projects",
    collectionId: "2",
    identifier: -16541584,
    qubeClaims: "",
    description:
      "Community collection of home designs generating bottom-up architecture",
    description2: "HomeQube’s Structural Legacy System.",
    description3: "",
    description4: "",
  },
];

const DesContainer = styled.div`
  width: 100%;
  margin-bottom: 150px;
  .candy-filter {
    color: #fff;

    li:hover {
      color: #7522f5;
    }

  }
`;
