import { useAddress, useLogin, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

// replace this with your contract address
const contractAddress = "0x1fCbA150F05Bbe1C9D21d3ab08E35D682a4c41bF";

export default function Login() {
  const address = useAddress(); // Get the user's address
  const login = useLogin(); // Sign in

  return (
    <div className={styles.container}>
      <h1 className={styles.h1} >ToknPass</h1>
      
      <p className={styles.explain}>
         Authenticate easily using NFTs, access Exclusive content
       
      </p>

      
      <hr className={styles.divider} />

      <>
        <h4>Welcome, {address?.slice(0, 6)}</h4>

        <button
          className={styles.mainButton}
          style={{ width: 256 }}
          onClick={login}
        >
          Sign In
        </button>
        <br></br>

        <p>

          For demo purposes, you can claim an NFT from our collection below:

        </p>
        

        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.erc1155.claim(0, 1)}
          accentColor="#ec470b"
        >
          Claim NFT
        </Web3Button>
      </>
      <div>
        <p>


        </p>
      </div>
      <hr className={styles.divider} />
      <p className={styles.explain}>

        You cannot access the main page unless you own the Auth Non Fungible Token!
      </p>
    </div>
  );
}
