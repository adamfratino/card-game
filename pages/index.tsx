import Head from "next/head";
import React from "react";
import Card from "components/Card/Card";

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
        <Card value="2" suit="diamonds" height={64} />
        <Card value="3" suit="diamonds" height={64} />
        <Card value="4" suit="diamonds" height={64} />
        <Card value="5" suit="diamonds" height={64} />
        <Card value="6" suit="diamonds" height={64} />
        <Card value="7" suit="diamonds" height={64} />
        <Card value="8" suit="diamonds" height={64} />
        <Card value="9" suit="diamonds" height={64} />
        <Card value="10" suit="diamonds" height={64} />
        <Card value="J" suit="diamonds" height={64} />
        <Card value="Q" suit="diamonds" height={64} />
        <Card value="K" suit="diamonds" height={64} />
        <Card value="A" suit="diamonds" height={64} />
      </div>
      <div>
        <Card value="2" suit="clubs" height={64} />
        <Card value="3" suit="clubs" height={64} />
        <Card value="4" suit="clubs" height={64} />
        <Card value="5" suit="clubs" height={64} />
        <Card value="6" suit="clubs" height={64} />
        <Card value="7" suit="clubs" height={64} />
        <Card value="8" suit="clubs" height={64} />
        <Card value="9" suit="clubs" height={64} />
        <Card value="10" suit="clubs" height={64} />
        <Card value="J" suit="clubs" height={64} />
        <Card value="Q" suit="clubs" height={64} />
        <Card value="K" suit="clubs" height={64} />
        <Card value="A" suit="clubs" height={64} />
      </div>
      <div>
        <Card value="2" suit="hearts" height={64} />
        <Card value="3" suit="hearts" height={64} />
        <Card value="4" suit="hearts" height={64} />
        <Card value="5" suit="hearts" height={64} />
        <Card value="6" suit="hearts" height={64} />
        <Card value="7" suit="hearts" height={64} />
        <Card value="8" suit="hearts" height={64} />
        <Card value="9" suit="hearts" height={64} />
        <Card value="10" suit="hearts" height={64} />
        <Card value="J" suit="hearts" height={64} />
        <Card value="Q" suit="hearts" height={64} />
        <Card value="K" suit="hearts" height={64} />
        <Card value="A" suit="hearts" height={64} />
      </div>
      <div>
        <Card value="2" suit="spades" height={64} />
        <Card value="3" suit="spades" height={64} />
        <Card value="4" suit="spades" height={64} />
        <Card value="5" suit="spades" height={64} />
        <Card value="6" suit="spades" height={64} />
        <Card value="7" suit="spades" height={64} />
        <Card value="8" suit="spades" height={64} />
        <Card value="9" suit="spades" height={64} />
        <Card value="10" suit="spades" height={64} />
        <Card value="J" suit="spades" height={64} />
        <Card value="Q" suit="spades" height={64} />
        <Card value="K" suit="spades" height={64} />
        <Card value="A" suit="spades" height={64} />
      </div>
    </main>
    {/* <footer>footer</footer> */}
  </>
);

export default Home;
