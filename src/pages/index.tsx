/*import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Shardeum DApp Boilerplate</title>
      </Head>

        <h2 className={styles.title}>
          gm
        </h2>

        </div>  )
}

export default Home
*/

import { useState } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import abi from "../contracts/StringStorage.json";

const Home = () => {
  const contractAddress = '0x9A0461428cc93Dde2DC6F025D7a2D9ED7fBbCC51'; 
  const contractAbi = abi.abi;
  const provider = new ethers.providers.JsonRpcProvider('https://rpc.shardeum.org');
  const signer = provider.getSigner();
  const myContract = new ethers.Contract(contractAddress, contractAbi, signer);

  const [inputValue, setInputValue] = useState('');
  const [updatedValue, setUpdatedValue] = useState('');

  const handleClick = async () => {
    try {
      const tx = await myContract.setValue(inputValue);
      await tx.wait();
      console.log('Value updated on blockchain:', inputValue);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetValueClick = async () => {
    try {
      const value = await myContract.getValue();
      setUpdatedValue(value.toString());
      console.log('Value fetched from blockchain:', updatedValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Shardeum DApp Boilerplate</title>
      </Head>

      <h2 className={styles.title}>gm</h2>
       
      <body className = {styles.classi}>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className={styles.button} onClick={handleClick}>
          Update
        </button>
      

      
        <button className={styles.button} onClick={handleGetValueClick}>
          Get 
        </button>

        <p className={styles.value}>{`Updated value: ${updatedValue}`}</p>
      </div>
      </body>
    </div>
  );
};

export default Home;


