import React, { useEffect, useRef, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, useLocation } from "react-router-dom";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CurrencyToggle from "./CurrencyToggle";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import styled from "styled-components";
import { RouteName } from "../constant/routeNames";
import MobileNavigation from "./NavBar/MobileNavigation";
import { Button, Grid } from "@material-ui/core";

interface TopNavProps {
  showCurrencyToggle?: boolean;
}

const ROUTES = [{ url: RouteName.ClaimQubes, name: "Claim Qubes" }];

const DROP_DOWN_MENU = [
  { url: RouteName.HomeDesignFilter, name: "Community Collection" },
  { url: RouteName.MyCollection, name: "My Collection" },
  { url: RouteName.multipleCurrencyMarketplace, name: "Dao Projects" },
];

const BentoNavigation: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        <svg
          width="58"
          height="53"
          viewBox="0 0 148 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.0003 102C80.7837 102 86.3337 107.737 86.3337 114.75C86.3337 121.763 80.7837 127.5 74.0003 127.5C67.217 127.5 61.667 121.763 61.667 114.75C61.667 107.737 67.217 102 74.0003 102ZM74.0003 63.75C80.7837 63.75 86.3337 69.4875 86.3337 76.5C86.3337 83.5125 80.7837 89.25 74.0003 89.25C67.217 89.25 61.667 83.5125 61.667 76.5C61.667 69.4875 67.217 63.75 74.0003 63.75ZM74.0003 25.5C80.7837 25.5 86.3337 31.2375 86.3337 38.25C86.3337 45.2625 80.7837 51 74.0003 51C67.217 51 61.667 45.2625 61.667 38.25C61.667 31.2375 67.217 25.5 74.0003 25.5ZM37.0003 102C43.7837 102 49.3337 107.737 49.3337 114.75C49.3337 121.763 43.7837 127.5 37.0003 127.5C30.217 127.5 24.667 121.763 24.667 114.75C24.667 107.737 30.217 102 37.0003 102ZM37.0003 63.75C43.7837 63.75 49.3337 69.4875 49.3337 76.5C49.3337 83.5125 43.7837 89.25 37.0003 89.25C30.217 89.25 24.667 83.5125 24.667 76.5C24.667 69.4875 30.217 63.75 37.0003 63.75ZM37.0003 25.5C43.7837 25.5 49.3337 31.2375 49.3337 38.25C49.3337 45.2625 43.7837 51 37.0003 51C30.217 51 24.667 45.2625 24.667 38.25C24.667 31.2375 30.217 25.5 37.0003 25.5ZM111 102C117.784 102 123.334 107.737 123.334 114.75C123.334 121.763 117.784 127.5 111 127.5C104.217 127.5 98.667 121.763 98.667 114.75C98.667 107.737 104.217 102 111 102ZM111 63.75C117.784 63.75 123.334 69.4875 123.334 76.5C123.334 83.5125 117.784 89.25 111 89.25C104.217 89.25 98.667 83.5125 98.667 76.5C98.667 69.4875 104.217 63.75 111 63.75ZM111 25.5C117.784 25.5 123.334 31.2375 123.334 38.25C123.334 45.2625 117.784 51 111 51C104.217 51 98.667 45.2625 98.667 38.25C98.667 31.2375 104.217 25.5 111 25.5Z"
            fill="white"
          />
        </svg>
      </Button>
      <Popper
        open={open}
        anchorEl={buttonRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Paper
            style={{
              width: "360px",
              height: "360px",
              backgroundColor: "rgb(41, 44, 53)",
              padding: "2rem",
            }}
          >
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <a
                    href="https://shop.homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-shop.png"
                      style={{
                        objectFit: "contain",
                        width: "85px",
                        height: "90px",
                      }}
                      alt="HOMEQUBE Shop"
                    />
                  </a>
                </Grid>
                <Grid item md={4}>
                  <a
                    href="https://nft.homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-nft.png"
                      style={{
                        objectFit: "contain",
                        width: "85px",
                        height: "90px",
                      }}
                      alt="HOMEQUBE NFT"
                    />
                  </a>
                </Grid>
                <Grid item md={4}>
                  <a
                    href="https://qube.homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-buyqube.png"
                      style={{
                        objectFit: "contain",
                        width: "85px",
                        height: "90px",
                      }}
                      alt="HOMEQUBE QUBE"
                    />
                  </a>
                </Grid>
                <Grid item md={4}>
                  <a
                    href="https://dapp.homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-dapp.png"
                      style={{
                        objectFit: "contain",
                        width: "85px",
                        height: "90px",
                      }}
                      alt="HOMEQUBE dApp"
                    />
                  </a>
                </Grid>
                <Grid item md={4}>
                  <a
                    href="https://dao.homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-dao.png"
                      style={{
                        objectFit: "contain",
                        width: "85px",
                        height: "90px",
                      }}
                      alt="HOMEQUBE DAO"
                    />
                  </a>
                </Grid>
                <Grid item md={4}>
                  <a
                    href="https://faq.homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-faq.png"
                      style={{
                        objectFit: "contain",
                        width: "85px",
                        height: "90px",
                      }}
                      alt="HOMEQUBE FAQ"
                    />
                  </a>
                </Grid>
                <Grid item md={4}>
                  <a
                    href="https://homeqube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./sitenav-corporate.png"
                      style={{
                        objectFit: "contain",
                        width: "60px",
                        height: "72px",
                      }}
                      alt="HOMEQUBE"
                    />
                  </a>
                </Grid>
              </Grid>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </>
  );
};

const TopNav: React.FC<TopNavProps> = ({ showCurrencyToggle = false }) => {
  const wallet = useAnchorWallet();

  const [open, setOpen] = useState(false);
  const [open_sub, setOpen_sub] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);
  const anchorRef_sub = useRef<HTMLLIElement>(null);

  const { pathname } = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle_sub = () => {
    setOpen_sub((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current?.contains(event.target)) return;
    setOpen(false);
  };

  const handleClose_sub = (event: any) => {
    if (anchorRef_sub.current?.contains(event.target)) return;
    setOpen_sub(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };
  const handleListKeyDown_sub = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen_sub(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <Logo>
              <Link to={RouteName.HomePage}>
                <img alt="" src="/Rework-Logo_3.svg" />
              </Link>
            </Logo>
          </LeftContainer>

          <CenterContainer>
            <Menu>
              <DropdownAnchor
                ref={anchorRef}
                onClick={handleToggle}
                className={
                  DROP_DOWN_MENU.some((item) => item.url === pathname)
                    ? "active"
                    : ""
                }
              >
                Collection <i className="icon-down fas fa-chevron-down" />
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        onKeyDown={handleListKeyDown}
                      >
                        {DROP_DOWN_MENU.map((item) => (
                          <MenuItem
                            className={
                              item.url === pathname
                                ? "active active-submenu"
                                : ""
                            }
                            key={item.url}
                          >
                            <Link to={item.url}>{item.name}</Link>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Popper>
              </DropdownAnchor>
              {ROUTES.map((item) => (
                <li
                  key={item.url}
                  className={pathname === item.url ? "active" : ""}
                >
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
              <DropdownAnchor_Sub
                ref={anchorRef_sub}
                onClick={handleToggle_sub}
              >
                Other Products <i className="icon-down fas fa-chevron-down" />
                <Popper
                  open={open_sub}
                  anchorEl={anchorRef_sub.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose_sub}>
                      <MenuList
                        autoFocusItem={open_sub}
                        onKeyDown={handleListKeyDown_sub}
                      >
                        <MenuItem>
                          <a
                            href="https://www.homeqube.io/"
                            key={"homeqube"}
                            target="_blank"
                            rel="noreferrer"
                            className="qube-text"
                          >
                            HOMEQUBE.IO{" "}
                            <i className="fas fa-solid fa-arrow-right mx-2" />
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="https://www.homeqube.com/"
                            key={"homeqube"}
                            target="_blank"
                            rel="noreferrer"
                            className="qube-text"
                          >
                            HOMEQUBE.COM{" "}
                            <i className="fas fa-solid fa-arrow-right mx-3" />
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="https://www.homeqube.ai/"
                            key={"homeqube"}
                            target="_blank"
                            rel="noreferrer"
                            className="qube-text"
                          >
                            HOMEQUBE.AI{" "}
                            <i className="fas fa-solid fa-arrow-right mx-3" />
                          </a>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Popper>
              </DropdownAnchor_Sub>
            </Menu>
          </CenterContainer>

          <RightContainer>
            {showCurrencyToggle && <CurrencyToggle />}
            <li>
              <a
                href="https://t.me/homeqube"
                key={"telegram"}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/telegram2.svg" alt="" />
              </a>
              <a
                href="https://discord.gg/JhQXmjm59e"
                key={"telegram"}
                target="_blank"
                rel="noreferrer"
                hidden
              >
                <img src="/discord2.svg" alt="" className="mx-3" />
              </a>
            </li>
            <Wallet>
              {wallet ? (
                <ConnectButton className="wallet-width" />
              ) : (
                <ConnectButton className="wallet-width-connect">
                  Connect Wallet
                </ConnectButton>
              )}
            </Wallet>
            <BentoNavigation />
          </RightContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar(!extendNavbar);
            }}
          >
            {extendNavbar ? (
              <i className="fas fa fa-solid fa-xmark fa-2xl" />
            ) : (
              <i className="fas fa fa-solid fa-bars fa-2xl" />
            )}
          </OpenLinksButton>
        </NavbarInnerContainer>
      </NavbarContainer>
      <MobileNavigation isOpen={extendNavbar} setIsOpen={setExtendNavbar} />
    </>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #0a0909;
  backdrop-filter: blur(5px);
  z-index: 998;
`;

const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-top: 1%;
`;
const CenterContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  padding-top: 1%;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 60px;

  li {
    display: flex;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 30px;
  margin-block: auto;
  margin-right: 5%;
  background: none;
  border: none;
  color: white;
  z-index: 999;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
`;
const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    display: none;
  }
`;

const DropdownAnchor = styled.li`
  cursor: pointer;
  font-family: "Rajdhani";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    color: rgb(131, 146, 161);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 30px;
    background: #3f3f4b;
    width: auto;
    height: auto;
    z-index: 4;

    a {
      color: #fff;
      font-family: "Rajdhani";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      &:hover {
        border-bottom: 0px;
        color: #fff;
      }
    }
  }
`;
const DropdownAnchor_Sub = styled.li`
  cursor: pointer;
  font-family: "Rajdhani";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    color: rgb(131, 146, 161);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 30px;
    background: #3f3f4b;
    width: auto;
    height: auto;

    a {
      color: #fff;
      font-family: "Rajdhani";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      &:hover {
        border-bottom: 0px;
        color: #fff;
      }
    }
  }
`;

const Wallet = styled.ul`
  margin-bottom: 0;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */

  .wallet-adapter-button {
    margin: 0 auto;
    line-height: 1rem;
  }
`;

const ConnectButton = styled(WalletMultiButton)`
  /* padding: 6px 16px; */
  border-radius: 50rem !important;
  background-color: #f4f4f8;
  /* margin: 0 auto;
  margin-top: 1.5rem !important; */
  font-family: "Rajdhani", sans-serif !important;
  width: 169px;
  height: 56px;
  color: #040f24;
  font-style: normal;
  font-weight: 700;

  text-align: center;
  text-transform: uppercase;
`;

const Logo = styled.div`
  /* flex: 0 0 auto; */
  /* margin-right: 5rem; */

  img {
    height: 3rem;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0px;
  /* flex: 1 0 auto; */
  margin-bottom: 0;
  /* padding-left: 10%;
  gap: 6%; */

  li {
    margin: 0 40px;

    color: #fff;
    font-family: "Rajdhani";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    a {
      color: #fff;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;
      text-transform: uppercase;

      img {
        max-height: 50px;
      }
    }

    a:hover,
    a:active {
      color: rgb(131, 146, 161);
      border-bottom: 4px solid var(--title-text-color);
    }
  }
`;

export default TopNav;
