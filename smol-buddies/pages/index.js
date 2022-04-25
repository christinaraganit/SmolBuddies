import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>Smol Buddies</title>
        <meta
          name="description"
          content="Smol Buddies wants to push the boundaries of NFT's to provide users the ability to recreate their own NFT. Buddies will be able to do the following: trade items within an internal marketplace or P2P, craft using earned or staked materials/tokens, stake for $Budcoin which is paired with $magic, and access special parks and ability to earn in BuddyWorld."
        />
        <link rel="icon" href="/monke.svg" />
      </Head>

      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
