
import { useState } from "react";
import { ethers } from "ethers";
import Head from 'next/head';
import abi from "../contracts/ShardeumGreeter.json";
import styles from '../styles/Home.module.css';

// The contract address
const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


  function Home() {
  
  const [inputValue, setInputValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in
  async function fetchGreeting() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        abi.abi,
        provider
      );
      try {
        const data = await contract.getMessage();
        console.log("data: ", data);
        setUpdatedValue(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function setGreeting() {
    if (!inputValue) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(greeterAddress, abi.abi, signer);
      const transaction = await contract.setMessage(inputValue);

      setInputValue("");
      await transaction.wait();
      fetchGreeting();
    }
  }



  // Return
  return (
    <div className={styles.container}>
      <Head>
        <title>Shardeum DApp Boilerplate</title>
      </Head>

      <h2 className={styles.title}>Gm</h2>
       
      <body className = {styles.classi}>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className={styles.button} onClick={setGreeting}>
          Update
        </button>
      

      
        <button className={styles.button} onClick={fetchGreeting}>
          Get 
        </button>

        <p className={styles.value}>{`Updated value: ${updatedValue}`}</p>
      </div>
      </body>
    </div>
  );
};

export default Home;