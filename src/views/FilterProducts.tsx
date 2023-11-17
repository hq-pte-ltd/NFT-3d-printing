import { Stat } from "../public/Stat";
import { CandyShopDataValidator } from "../public/Context";
import { OrdersP } from "../public/OrdersP";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";
const ProductsFilter: React.FC = () => {
  MetaTagsPage(
    "PRODUCTS",
    "YOU CAN PLACE VARIOUS “PRODUCTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
    "https://www.homeqube.io/products"
  );
  const wallet = useAnchorWallet();

  return (
    <>
      <section className="pt-5 bg-collection-2 text-start text-light text-uppercase">
        <h1 className="community-collection-title">Community Collection</h1>
      </section>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-5">
        <li>
          <NavLink to="/home-designs">
            Home Generative Designs and Algorithms
          </NavLink>
        </li>
        <li>
          <NavLink to="/home-products">Home Products</NavLink>
        </li>
        <li>
          <NavLink to="/just-for-fun" className="active">
            JUST-FOR-FUN (JFF)
          </NavLink>
        </li>
      </nav>
      <nav className="candy-orders-filter-mobile menu text-uppercase pb-3 pt-5">
        <li className="nav-item dropdown">
          <NavLink to="/just-for-fun" className="nav-link active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            JUST-FOR-FUN (JFF) <i className="fas fa-caret-down"></i>
          </NavLink>
          <div className="dropdown-menu mt-2 p-3" aria-labelledby="navbarDropdown">
            <NavLink to="/home-designs" className="dropdown-item" style={{ whiteSpace: 'normal', overflow: 'hidden' }}>Home Generative Designs and Algorithms</NavLink>
            <NavLink to="/home-products" className="dropdown-item" style={{ whiteSpace: 'normal', overflow: 'hidden' }}>Home Products</NavLink>
            <NavLink to="/just-for-fun" className="dropdown-item" style={{ whiteSpace: 'normal', overflow: 'hidden' }}>JUST-FOR-FUN (JFF)</NavLink>
          </div>
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
          <OrdersP
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

export default ProductsFilter;

const FILTERS = [
  {
    name: "",
    collectionId: "1",
    identifier: [-1434943395, 691144404],
    qubeClaims: "",
    description: "",
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
