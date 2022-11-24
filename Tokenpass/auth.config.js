import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { domainName } from "./const/yourDetails";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey:"f02a6b0a7ca480ffac86bc57dae14c74b04d3965b21fc5a890e5d03112eb5747",
  domain: 'nftpass.com',
});
