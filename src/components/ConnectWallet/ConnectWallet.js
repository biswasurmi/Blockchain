import React from 'react';
import './ConnectWallet.css'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
const ConnectWallet = () => {

    const [walletAddress, setWalletAddress] = useState("");

    async function requestAccount() {
    
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting...');
            }

        } else {
            alert('Meta Mask not detected');
        }
    }

    return (
        <div>
            <Navbar />
            <div className="connectwallet-container">
                <header className="connectwallet-header">
                    <button onClick={requestAccount}>Connect Wallet</button>
                    <h3>Wallet Address: {walletAddress}</h3>
                </header>
            </div>
        </div>
        
    );
};

export default ConnectWallet;