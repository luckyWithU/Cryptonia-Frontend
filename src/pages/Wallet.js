import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import image1 from '../assets/wallet1.png';
import image2 from '../assets/wallet2.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';

const Wallet = () => {
    return(
        <>
            <Container>
                <div class="pageHeader">wallet</div>
                <div className="text-center">
                    <img src={image1}/>
                </div>
                <div className="text-center wallet-div" style={{marginTop: "500px"}}>
                    <img src={image2}/>
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

const SubHeader = styled.div`
    font: normal normal normal 42px/48px Kerox-NonCommercial;
    text-align: center;
    margin-inline: auto;
    margin-top: 300px;
`
const Header = styled.div`
    font: normal normal normal 152px/182px Kerox-NonCommercial;
    color: #000000;
    text-align: center;
    margin-top: 88px;
`

export default Wallet;