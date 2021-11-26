import styled from 'styled-components';
import { Row, Col } from "react-bootstrap";

import hundred from '../assets/roadmap/100.svg';
import roadMap from '../assets/roadmap.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import { Container } from 'react-bootstrap';
import kitties1 from '../assets/roadmap1.png';
import kitties2 from '../assets/roadmap2.png';
import kitties3 from '../assets/roadmap3.png';



const Roadmap = () => {
    return(
        <div>
            <Container>
            <div class="pageHeader">Roadmap</div>
            <div className="RoadMap">
                <div><img src={roadMap} /><p><span>April 2021 Idea</span> design, and a first draft</p></div>
                <div><img src={roadMap} /><p><span>May 2021</span> Viability and realization</p></div>
                <div><img src={roadMap} /><p><span> June 2021</span> Search for investors</p></div>
                <div><img src={roadMap} /><p><span> July 2021</span> Interactions Development</p></div>
                <div><img src={roadMap} /><p><span> August 2021</span> Development, programming, and testing</p></div>
                <div><img src={roadMap} /><p><span> September 2021</span> Implementation of the “Cryptonia Kittens”</p></div>
                <div><img src={roadMap} /><p><span> October 2021</span> Registration of protocols and tokens on the blockchain</p></div>
                <div><img src={roadMap} /><p><span> November 2021</span> “Cryptonia Kittens” are online</p></div>
                <div><img src={roadMap} /><p><span> 2022</span> Going live on Decentraland, Cryptonia Kitten’s holders will gain access to THE CLUB</p></div>
                <h1>More Exciting features coming soon in 2022</h1>
            </div>
            <Row className="mt-5">
                <Col md={6} className="mb-5">
                    <img src={kitties1} />
                </Col>
                <Col md={6}>
                    <img src={kitties2} />
                </Col>
                <Col xs={12} className="mt-5 ps-5 pe-5">
                    <img src={kitties3} />
                </Col>
            </Row>
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