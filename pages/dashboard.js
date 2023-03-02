import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import AccountHeader from "@/components/AccountHeader";
import { useState, useEffect, createRef } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectModal from "@/components/ConnectModal";
import MyDomains from "@/components/MyDomains";
import DomainTab from "@/components/DomainTab";

const Dashboard = () => {
  const [openMintModal, setOpenMintModal] = useState(true);
  const { isConnected, address } = useAccount();
  console.log(isConnected);

  const handleMintOnClose = () => setOpenMintModal(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        {isConnected && (
          <div className="bg-black-gradient-2 h-screen">
            <div className="flex">
              <Sidebar />
              <ProfileNavbar />
            </div>
            <div>
              <AccountHeader />
              <div>
                <DomainTab />
              </div>
            </div>
          </div>
        )}
        {!isConnected && (
          <div className="bg-primary-black h-screen">
            <ConnectModal
              openMintModal={openMintModal}
              handleOnClose={handleMintOnClose}
            />
          </div>
        )}
      </>
    )
  );
};

export default Dashboard;