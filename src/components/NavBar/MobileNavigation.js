import React, { useRef, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, useLocation } from "react-router-dom";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import styled from "styled-components";
import "./MobileNavigation.css"
import { RouteName } from "../../constant/routeNames";

const DROP_DOWN_MENU = [
    { url: RouteName.HomeDesignFilter, name: "Community Collection" },
    { url: RouteName.MyCollection, name: "My Collection" },
    { url: RouteName.multipleCurrencyMarketplace, name: "Dao Projects" },
];

const ROUTES = [];

const MobileNavigation = ({isOpen, setIsOpen}) =>{
    const wallet = useAnchorWallet();

    const [open, setOpen] = useState(false);
    const [open_sub, setOpen_sub] = useState(false);
    const anchorRef = useRef(null);
    const anchorRef_sub = useRef(null);

    const { pathname } = useLocation();
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleToggle_sub = () => {
      setOpen_sub((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current?.contains(event.target)) return;
      setOpen(false);
    };
  
    const handleClose_sub = (event) => {
      if (anchorRef_sub.current?.contains(event.target)) return;
      setOpen_sub(false);
    };
  
    const handleListKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        setOpen(false);
      }
    };
    const handleListKeyDown_sub = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        setOpen_sub(false);
      }
    };

    return(
        <div className={isOpen?"mobile-navigation-active":"mobile-navigation-inactive"}>
            <NavbarContainer>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <Logo>
                            <Link to={RouteName.HomePage}>
                                <img alt="" src="/nav-Logo.png" />
                            </Link>
                        </Logo>
                    </LeftContainer>
                    <OpenLinksButton onClick={() => { setIsOpen(!isOpen) }}>
                        {isOpen ? (
                        <i className="fas fa fa-solid fa-xmark fa-2xl" />
                        ) : (
                        <i className="fas fa fa-solid fa-bars fa-2xl" />
                        )}
                    </OpenLinksButton>
                </NavbarInnerContainer>
            </NavbarContainer>
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
                        { open?<>
                            <div className="dropdown-header-container">
                                Collection 
                                <i className="icon-down fas fa-chevron-up" />
                            </div>
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
                                        onClick={()=>setIsOpen(false)}
                                        key={item.url}
                                    >
                                        <Link to={item.url}>{item.name}</Link>
                                    </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                            
                            </>:
                            <div className="dropdown-header-container">
                                Collection 
                                <i className="icon-down fas fa-chevron-down" />
                            </div>
                        }
                    </DropdownAnchor>
                    {ROUTES.map((item) => (
                        <li
                        key={item.url}
                        onClick={()=>setIsOpen(false)}
                        className={pathname === item.url ? "active" : ""}
                        >
                        <Link to={item.url}>{item.name}</Link>
                        </li>
                    ))}
                    {/* <DropdownAnchor_Sub
                        ref={anchorRef_sub}
                        onClick={handleToggle_sub}
                    >
                        { open_sub?<>
                            <div className="dropdown-header-container">
                                Other Products 
                                <i className="icon-down fas fa-chevron-up" />
                            </div>
                                <ClickAwayListener onClickAway={handleClose_sub}>
                                    <MenuList
                                        autoFocusItem={open_sub}
                                        onKeyDown={handleListKeyDown_sub}
                                    >
                                        <MenuItem onClick={()=>setIsOpen(false)}>
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
                                        <MenuItem onClick={()=>setIsOpen(false)}>
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
                                        <MenuItem onClick={()=>setIsOpen(false)}>
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
                            </>:
                            <div className="dropdown-header-container">
                            Other Products 
                            <i className="icon-down fas fa-chevron-down" />
                        </div>
                        }
                    </DropdownAnchor_Sub> */}
                </Menu>
            </CenterContainer>
            <RightContainer>
                <li>
                {/* <a
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
                >
                    <img src="/discord2.svg" alt="" className="mx-3" />
                </a> */}
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
            </RightContainer>
        </div>
    );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-top: 1%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 30px;
  margin-top: 30px;
  row-gap: 30px;

  li {
    display: flex;
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
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
`;

const Logo = styled.div`
  img {
    height: 3rem;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  padding-inline: 30px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  row-gap: 20px;
  margin-bottom: 0;

  li {

    color: #fff;
    font-family: "Rajdhani";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    width: 100%;
    text-align: left;

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
    margin-top: 20px;
    background: #3f3f4b;
    width: 100%;
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
    margin-top: 20px;
    background: #3f3f4b;
    width: 100%;
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

const Wallet = styled.div`
    display: flex;
    justify-items: center;
    .wallet-adapter-button {
        line-height: 1rem;
    }
`;

const ConnectButton = styled(WalletMultiButton)`
  border-radius: 50rem !important;
  background-color: #f4f4f8;
  font-family: "Rajdhani", sans-serif !important;
  width: 169px;
  height: 56px;
  color: #040f24;
  font-style: normal;
  font-weight: 700;

  text-align: center;
  text-transform: uppercase;
`;

export default MobileNavigation;