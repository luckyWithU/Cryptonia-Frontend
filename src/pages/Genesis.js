import styled from 'styled-components'
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import kitties from '../assets/genesis.png';

import { Button, Container } from "react-bootstrap";

const Genesis = () => {
    return(
        <div>
            <Container className="genesis">
                <div className="pageHeader">GENESIS</div>
                <SubHeader>You’ll find a mystery kitty waiting for you. </SubHeader>
                
                <div className="buttonContainer mb-5">
                        <Button className="borderButton"></Button>
                        <Button className="imgButton">CLAIM</Button>
                </div>

                {/*<LimitedLabel>limited edition</LimitedLabel>

                <BuySection>
                    <BuyLabel>Buy Cat</BuyLabel>
                    <TextBox />
                </BuySection>
                <GenesisLabel>Genesis cryptonya kittens is limited to 1,500 pieces, each with a fixed cost of 0.5 ETH. This includes some unique 1/1 pieces!</GenesisLabel>
                */}
                <div className="text-center mt-5">
                    <img src={kitties} />
                </div>
            </Container>
            <div className="footer">
                <img src={twitter} />
                <img src={discord} />
                <div></div>
            </div>
        </div>
    )
}

const SocialMediaGroup = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 140px;
    margin-bottom: 88px;
`
const TwitterImage = styled.div`
    width: 226px;
    height: 200px;
    background: transparent url(${props => props.src}) 0% 0% no-repeat padding-box;
`
const DiscordImage = styled.div`
    width: 247px;
    height: 200px;
    background: transparent url(${props => props.src}) 0% 0% no-repeat padding-box;
`

const GenesisLabel = styled.div`
    font: normal normal normal 42px/50px Kerox-NonCommercial;
    color: #000000;
    margin-top: 240px;
    margin-inline: auto;
    text-align: center;
`

const TextBox = styled.input`
    width: 495px;
    height: 114px;
    border: 8px solid #FED144;
    border-radius: 57px;
    margin-left: 45px;
`
const BuyLabel = styled.div`
    font: normal normal normal 42px/50px Kerox-NonCommercial;
    color: #000000;
`
const BuySection = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    place-items: center;
`

const LimitedLabel = styled.div`
    margin-top: 30px;    
    font: normal normal normal 42px/50px Kerox-NonCommercial;
    text-align: center;
`

const ClaimLabel = styled.div`
    font: normal normal normal 42px/50px Kerox-NonCommercial;   
`
const ClaimButton = styled.div`
    background: #FED144 0% 0% no-repeat padding-box;
    border: 8px solid #FED144;
    border-radius: 57px;
    display: flex;
    justify-content: center;
    width: 495px;
    place-items: center;
    height: 114px;
    margin-inline: auto;
    margin-top: 75px;
`
const Header = styled.div`
    margin-top: 101px;
    text-align: center;
    font-size:152px;
    font-family:Arial-Black;
    color: #FDCE36;
`
const SubHeader = styled.div`
    font-family:Arial-Black;
    font-size:35px;
    text-align: center;
    color: #FED144;
    margin-inline: auto;
    margin-top: 73px;
    text-align:center;
`

export default Genesis;