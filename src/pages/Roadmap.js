import styled from 'styled-components';

import zero from '../assets/roadmap/0.svg';
import twenty from '../assets/roadmap/20.svg';
import fourty from '../assets/roadmap/40.svg';
import sixty from '../assets/roadmap/60.svg';
import eighty from '../assets/roadmap/80.svg';
import hundred from '../assets/roadmap/100.svg';
import roadMap from '../assets/roadmap.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import { Container } from 'react-bootstrap';

const Roadmap = () => {
    return(
        <div>
            <Container>
            <div class="pageHeader">Roadmap</div>
            <div className="RoadMap">
                <p><span><img src={roadMap} />April 2021 Idea</span> design, and a first draft</p>
                <p><span><img src={roadMap} />May 2021</span> Viability and realization</p>
                <p><span><img src={roadMap} />June 2021</span> Search for investors</p>
                <p><span><img src={roadMap} />July 2021</span> Interactions Development</p>
                <p><span><img src={roadMap} />August 2021</span> Development, programming, and testing</p>
                <p><span><img src={roadMap} />September 2021</span> Implementation of the “Cryptonia Kittens”</p>
                <p><span><img src={roadMap} />October 2021</span> Registration of protocols and tokens on the blockchain</p>
                <p><span><img src={roadMap} />November 2021</span> “Cryptonia Kittens” are online</p>
                <p><span><img src={roadMap} />2022</span> Going live on Decentraland, Cryptonia Kitten’s holders will gain access to THE CLUB</p>
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

export default Roadmap;