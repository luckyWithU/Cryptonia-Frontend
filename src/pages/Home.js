import {Container, Button, Row, Col} from "react-bootstrap"

import catgroup from '../assets/catgroup.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import complex from '../assets/complex.png';
import howcat1 from '../assets/1.png';
import howcat2 from '../assets/2.png';
import howcat3 from '../assets/3.png';


const Home = () => {
    return(
        <div className="HomeContainer">
            <div className="CatShowImage">
                <img src={complex}/>
            </div>
            <div style={{height: "80px", background: "#000", borderRadius: "50px 50px 0 0", marginTop: "-35px"}}>
            </div>
            <Container>
                <div className="UnderLabel">
                    <h1>Purchase your interactive Cryptonia Kittens from 0.05 eth</h1>
                    <p>Cryptonia Kittens is a collection of 10,000 generative NFTs and 50 Genesis-exclusive interactive NFTs that are created programmatically.<br />
                    You can interact with your Cryptonia Kitten.<br />
                    The development of this collection needed the participation of the founders and engineers over a period of many months to be able to provide this interactive NFT to the whole NFT-loving community.
                    </p>
                    <p>Genesis Cryptonia Kitten</p>
                    <p>There are just 50 “Cryptonia Kittens” available in the Genesis universe.<br />
                    The customer who purchased a “Genesis Cryptonia Kitten” will receive a random kitten in<br />
                    exchange for their payment.</p>
                    <p>Generative Cryptonia Kitten</p>
                    <p>There will be several accessories available for the “Generative Cryptonia Kitten,” such as spectacles, hats, helmets, caps, bows, crowns, wigs, masks, eagle wings, and so on, to alter its look.<br />
                    A random kitten will be given to the buyer who paid for a “Generative Cryptonia Kitten”.</p>
                </div>    
                {/*<div className="AboutLabel">The Cryptonia Kittens generated will be found in the Ethereum blockchain and under the ERC-721 standard. Since it is the buyer who generates a unique Cryptonia Kitten (there will never be two alike) and in a random way; he will be assigned the copyright to do in the future with his kitten whatever he wants: commercials, sales transactions, simply play with it or whatever he wants.</div>
                        
                <div className="BuyButton">
                    <div className="BuyLabel">Buy Genesis</div>
                </div>
                
                <div className="GoContainer">
                    <div className="BuyMultipleBtn">
                        Buy Multiple
                    </div>
                    <div className="Gobutton">
                        <div className="Gobox"></div>
                        <div className="GoLabel">GO</div>
                    </div>
                </div>
                */}
                <div className="buttonContainer">
                    <Col md={8} className="text-center">
                        <Button className="borderButton"></Button>
                        <Button className="imgButton">CLAIM</Button>
                        <img src={catgroup}/>
                    </Col>
                    <Col md={4} style={{position: "relative"}}>
                        <img className="right-image" src={howcat3} />
                    </Col>
                </div>
                <Row className="HowContainer">
                    <Col md={8} xs={12}  className="HowLabel">
                        <h1>How do the interactions work?</h1>
                        <p>With your “Cryptonia Kitten,” you may engage and play with her.<br />
                            Simply drag the mouse over the screen, and make it move its head to look around.<br />
                            Take pleasure in making it bounce,<br />
                            lift its paws, and wag its tail.
                        </p>
                        <p>Move the mouse over the head or any other location outside of the “Cryptonia Kitten” to cause it to move its eyes and head in the direction of the mouse cursor.</p>

                        <p>To make the Cryptonia Kitten bounce, simply click on its body three times in a row.</p>
                        <p>Select one of the “Cryptonia Kitten’s” paws and it will lick the paw you selected.<br />
                        This interaction operates on both paws at the same time.
                        </p>
                        <p>To get the Cryptonia Kitten to wag its tail, click on the tail of the kitten. The interactions are completely independent of one another, and you can complete more than one at a time.</p>
                    </Col>
                    <Col md={4} className="d-none d-lg-block">
                        <div className="text-right"><img src={howcat2} /></div>
                        <div><img src={howcat3} /></div>
                        <div className="text-right mt-5"><img src={howcat1} /></div>
                    </Col>
                </Row>
                <div className="SocialMediaGroup">
                    <img src={twitter}/>
                    <img src={discord}/>
                </div>
            </Container>
            <div style={{height: "50px", background: "#000", borderRadius: "50px 50px 0 0"}}></div>
       </div>
    )
}

export default Home;