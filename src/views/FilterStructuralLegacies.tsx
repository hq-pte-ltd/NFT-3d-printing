// import { Orders, Stat } from "@liqnft/candy-shop";
import { Stat } from "../public/Stat";
import { CandyShopDataValidator } from "../public/Context";
import { OrdersSL } from "../public/OrdersSL";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";
const StructuralLegaciesFilter: React.FC = () => {
  MetaTagsPage(
    "STRUCTURAL LEGACIES",
    "INTRODUCING HOMEQUBE’S STRUCTURAL LEGACY SYSTEM. EACH STRUCTURAL IS UNIQUE. WE GENERATED 2500 UNIQUE COMBINATIONS FROM OUR SYSTEMS ARCHITECTURE PLATFORM (DAPP). THIS LEGACY SYSTEM CAN BE USED TO BUILD LIMITLESS DESIGN CONFIGURATIONS FOR FLAT TOPOGRAPHIES AND UP TO 3 STORY HOUSING, ALLOWING OPEN ARCHITECTURE. OUR COMPOSITE MIX IS MORE SUSTAINABLE, WEATHER RESILIENT, AND EMITS MUCH LESS CARBON THAN REINFORCED CONCRETE/STEEL, AND CAN BE ERGONOMICALLY ASSEMBLED AT THE SITE.",
    "https://www.homeqube.io/structural-legacies"
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
          <NavLink to="/home-products" className="active">
            Home Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/just-for-fun">JUST-FOR-FUN (JFF)</NavLink>
        </li>
      </nav>
      <nav className="candy-orders-filter-mobile menu text-uppercase pb-3 pt-5">
        <li className="nav-item dropdown">
          <NavLink to="/home-products" className="nav-link active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Home Products <i className="fas fa-caret-down"></i>
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
          <OrdersSL
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

export default StructuralLegaciesFilter;

const FILTERS = [
  {
    name: "With Cantilever",
    collectionId: "1",
    identifier: -1775657236,
    qubeClaims: "",
    description: "Introducing:",
    description2: "HomeQube’s Structural Legacy System.",
    description3:
      "The system boasts 2500 unique structural combinations (without cantilever) generated from HomeQube’s System Architecture Platform (SAP). The Legacy System allows open architecture that can be used to build limitless design configurations up to 3-story housing for flat topographies." +
      "\n\n" +
      "HomeQube’s composite mix can be ergonomically assembled on-site, is more sustainable, weather resilient, and emits less carbon than traditional reinforced concrete or steel.",
    description4: "",
  },
  {
    name: "Without Cantilver",
    collectionId: "2",
    identifier: -354695101,
    qubeClaims: "(Qube Claims Available)",
    description: "Introducing:",
    description2: "HomeQube’s Structural Legacy System.",
    description3:
      "The system boasts 2500 unique structural combinations (without cantilever) generated from HomeQube’s System Architecture Platform (SAP). The Legacy System allows open architecture that can be used to build limitless design configurations up to 3-story housing for flat topographies." +
      "\n\n" +
      "HomeQube’s composite mix can be ergonomically assembled on-site, is more sustainable, weather resilient, and emits less carbon than traditional reinforced concrete or steel.",
    description4: "",
  },
  {
    name: "PBUs",
    collectionId: "3",
    identifier: 393799738,
    qubeClaims: "",
    description: "Introducing:",
    description2: "HomeQube’s Structural Legacy System.",
    description3:
      "The system boasts 2500 unique structural combinations (without cantilever) generated from HomeQube’s System Architecture Platform (SAP). The Legacy System allows open architecture that can be used to build limitless design configurations up to 3-story housing for flat topographies." +
      "\n\n" +
      "HomeQube’s composite mix can be ergonomically assembled on-site, is more sustainable, weather resilient, and emits less carbon than traditional reinforced concrete or steel.",
    description4: "",
  },
  {
    name: "3D PRINTED PARTS",
    collectionId: "4",
    identifier: -16541584,
    qubeClaims: "",
    description: "Introducing:",
    description2: "HomeQube’s Structural Legacy System.",
    description3:
      "The system boasts 2500 unique structural combinations (without cantilever) generated from HomeQube’s System Architecture Platform (SAP). The Legacy System allows open architecture that can be used to build limitless design configurations up to 3-story housing for flat topographies." +
      "\n\n" +
      "HomeQube’s composite mix can be ergonomically assembled on-site, is more sustainable, weather resilient, and emits less carbon than traditional reinforced concrete or steel.",
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
