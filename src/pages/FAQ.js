import styled from 'styled-components';
import roadMap from '../assets/roadmap.png';
import { Container } from 'react-bootstrap';
import faqImg from '../assets/faq.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
const FAQ = () => {
    return(
        <>
        <Container className="Faq">
            <div className="pageHeader">FAQ</div>
            <div>
            <p>Why should I buy a Cryptonia Kitten? Why is it unique?</p>

            <p>A total of 10’000 generative and 50 unique Genesis Kittens are available on the ERC-721 standard Ethereum blockchain.</p>

            <p>Your Cryptonia Kitten is yours to do with as you please: advertisements, merchandising, watching it, keeping it, or just playing with it.</p>

            <p>How can I buy a Cryptonia Kitten?</p>

               <p style={{marginLeft: "120px"}}><img src={roadMap} />For websites to access your wallet, you’ll need to download and install the
               MetaMask browser plugin.</p>

               <p style={{marginLeft: "120px"}}><img src={roadMap} />If you have an account, you can either create a new one or log in.</p>
              
               <p style={{marginLeft: "120px"}}><img src={roadMap} />Add Ether to the wallet by purchasing or transferring funds. Coinbase also    
               allows you to buy MetaMask directly.</p>

               <p style={{marginLeft: "120px"}}><img src={roadMap} />This website will identify your MetaMask wallet and let you bid on, purchase
               and sell your “Cryptonia Kitten” after the extension is loaded.</p>

                <p>What is the difference between a Genesis Cryptonia Kitten and a Generative Cryptonia Kitten?
                The Genesis Cryptonia Kittens are a series of 50 unique and exclusive Cryptonia Kittens . Every “Cryptonia Kitten” is unique and they all have interactions.</p>

                <p>What standard is the Cryptonia Kitten?<br />
                The Cryptonia Kitten is created under the ERC-721 standard on the Ethereum blockchain.</p>

                <p>Can I choose a Generative or a Genesis Cryptonia Kitten before buying?<br />
                Both the Genesis and the Generative “Cryptonia Kitten” are random purchases.<br />
                Only the Kittens that have already been purchased or resold can be selected on Opensea.</p>

                <p>What is MetaMask?<br />
                MetaMask is a crypto wallet software that supports Ethereum-based tokens. Once the MetaMask plugin is installed, cryptoniakittens.com, will automatically detect the MetaMask wallet and add all the options that will allow you to bid, buy and sell.</p>

                <p>How can I sell my Cryptonia Kitten?</p>

                <p>Once you have bought a Cryptonia Kitten with MetaMask, you can resell it directly or via opensea.</p>

                <p>I have bought a Cryptonia Kitten, now what? What can I do with my Cryptonia Kitten?
                You can interact and play with your Kitten:</p>

                <p>Move the mouse over the head or any other location outside of the “Cryptonia Kitten”
                to cause it to move its eyes, and head in the direction of the mouse cursor.</p>

                <p>To make the Cryptonia Kitten bounce, simply click on its body three times in a row.<br />
                Select one of the “Cryptonia Kitten’s” paws and it will lick the paw you selected.<br />
                This interaction operates on both paws at the same time.</p>

                <p>To get the Cryptonia Kitten to wag its tail, click on the tail of the kitten. The interactions are
                completely independent of one another, and you can complete more than one at a time.</p>

                <p>Our Twitter and Discord channels are the best places to share your Cryptonia Kittens and
                masterpieces.</p>
              </div>
              <div className="text-center" style={{marginTop:"200px"}}>
                  <img src={faqImg} />
              </div>
        </Container>
        <div className="footer">
            <img src={twitter} />
            <img src={discord} />
            <div></div>
        </div>
        </>
    )
}

export default FAQ;