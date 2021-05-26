import Head from "next/head";
import React from "react";
import { Card } from "@adamfratino/playing-cards";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Card Game Sandbox</title>
      <meta
        name="description"
        content="Messing around with playing cards in a JS environment"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <header>header</header> */}
    <main>
      <div>
        <Card value="2" suit="diamonds" />
        <Card value="3" suit="diamonds" />
        <Card value="4" suit="diamonds" />
        <Card value="5" suit="diamonds" />
        <Card value="6" suit="diamonds" />
        <Card value="7" suit="diamonds" />
        <Card value="8" suit="diamonds" />
        <Card value="9" suit="diamonds" />
        <Card value="10" suit="diamonds" />
        <Card value="J" suit="diamonds" />
        <Card value="Q" suit="diamonds" />
        <Card value="K" suit="diamonds" />
        <Card value="A" suit="diamonds" />
      </div>
      <div>
        <Card value="2" suit="clubs" />
        <Card value="3" suit="clubs" />
        <Card value="4" suit="clubs" />
        <Card value="5" suit="clubs" />
        <Card value="6" suit="clubs" />
        <Card value="7" suit="clubs" />
        <Card value="8" suit="clubs" />
        <Card value="9" suit="clubs" />
        <Card value="10" suit="clubs" />
        <Card value="J" suit="clubs" />
        <Card value="Q" suit="clubs" />
        <Card value="K" suit="clubs" />
        <Card value="A" suit="clubs" />
      </div>
      <div>
        <Card value="2" suit="hearts" />
        <Card value="3" suit="hearts" />
        <Card value="4" suit="hearts" />
        <Card value="5" suit="hearts" />
        <Card value="6" suit="hearts" />
        <Card value="7" suit="hearts" />
        <Card value="8" suit="hearts" />
        <Card value="9" suit="hearts" />
        <Card value="10" suit="hearts" />
        <Card value="J" suit="hearts" />
        <Card value="Q" suit="hearts" />
        <Card value="K" suit="hearts" />
        <Card value="A" suit="hearts" />
      </div>
      <div>
        <Card value="2" suit="spades" />
        <Card value="3" suit="spades" />
        <Card value="4" suit="spades" />
        <Card value="5" suit="spades" />
        <Card value="6" suit="spades" />
        <Card value="7" suit="spades" />
        <Card value="8" suit="spades" />
        <Card value="9" suit="spades" />
        <Card value="10" suit="spades" />
        <Card value="J" suit="spades" />
        <Card value="Q" suit="spades" />
        <Card value="K" suit="spades" />
        <Card value="A" suit="spades" />
      </div>
    </main>
    {/* <footer>footer</footer> */}
  </>
);

export default Home;
