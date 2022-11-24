import React from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import styles from "../styles/Home.module.css";

export default function Home() {
  const logout = useLogout();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Members Only Access</h1>
      <p className={styles.explain}>
        Thanks for being a member of our organization!
      </p>
      <br></br>
      <br></br>

      <button className={styles.mainButton} onClick={logout}>
        Logout
      </button>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = 'f02a6b0a7ca480ffac86bc57dae14c74b04d3965b21fc5a890e5d03112eb5747';
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    'f02a6b0a7ca480ffac86bc57dae14c74b04d3965b21fc5a890e5d03112eb5747',
    "mumbai"
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}
