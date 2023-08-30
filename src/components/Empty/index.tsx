import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import styled from "styled-components";
import Nofound from "../../../src/img/Nofound.svg";

import "./index.less";

interface EmptyProps {
  description?: string;
}

const Wallet = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .wallet-adapter-button {
    margin: 0 auto;
    line-height: 1rem;
  }
`;

const ConnectButton = styled(WalletMultiButton)`
  padding: 6px 16px;
  border-radius: 50rem !important;
  background-color: #040f24;
  margin-top: 1.5rem !important;
  font-family: "Rajdhani", sans-serif !important;
  width: 193px;
  height: 56px;
  color: #fff;
  font-style: normal;
  font-weight: 700;

  text-align: center;
  text-transform: uppercase;
`;

export const Empty: React.FC<EmptyProps> = ({
  description = "UNDER CONSTRUCTION",
}) => {
  const wallet = useAnchorWallet();
  return (
    <div className="candy-empty-found">
      <div className="">
        {/* <img src={Nofound} /> */}
      </div>
      <div className="no-found-subtext">{description}</div>
      {/* <div className="no-found-subtext-2">
        <p>Looks like there's nothing here.</p>
      </div> */}
      <div className="me-4 pt-3 no-found-wallet">
        {/* <Wallet>
          {wallet ? (
            <ConnectButton className="wallet-width" />
          ) : (
            <ConnectButton className="wallet-width-connect">
              Connect Wallet
            </ConnectButton>
          )}
        </Wallet> */}
      </div>
    </div>
  );
};
