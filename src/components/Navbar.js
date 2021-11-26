import logo from '../assets/logo.png';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"
import "./styles.css";

const Navbar = () => {
    return(
        <Container fluid>
            <NavContainer className="header">
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} className="d-none d-lg-block text-center"><Link style={{zIndex:"1", display:"inline-block"}} to="/"><LogoImage src={logo}/></Link></Col>
                    <Col md={3} className="connect_mask">
                        <Button className="imgButton">
                            <ButtonLabel>connect to metamask</ButtonLabel>
                        </Button>
                    </Col>
                </Row>
            </NavContainer>
            <BottomNavContainer className="navbar">
                <BottomNav className="navbar">
                    <NavLink><Link to="/genesis" style={{ textDecoration: 'none', color: "#fecf43" }}>Genesis</Link></NavLink>
                    <NavLink><Link to="/roadmap" style={{ textDecoration: 'none', color: "#fecf43" }}>Roadmap</Link></NavLink>
                    {/* <NavLink><Link to="/gallery" style={{ textDecoration: 'none', color: "black" }}>Gallery</Link></NavLink> */}
                    <NavLink><Link to="/wallet" style={{ textDecoration: 'none', color: "#fecf43" }}>Wallet</Link></NavLink>
                    <NavLink><Link to="/faq" style={{ textDecoration: 'none', color: "#fecf43" }}>FAQ</Link></NavLink>
                </BottomNav>
            </BottomNavContainer>
        </Container>
    )
}

const BottomNavContainer = styled.div`
    display: flex;
    justify-content: centeR;
`
const BottomNav = styled.div`
    margin-top: 30px;
    display: flex;
`
const NavLink = styled.div`
    margin: 0 50px;
    font: normal normal normal 31px/37px Kerox-NonCommercial;
    letter-spacing: 0px;
    color: #000000;
`

const NavContainer  = styled.div`
    
` 
const LogoImage = styled.img`
    width: 554px;
    height: 276px;
    display: flex;
    justify-content: centeR;
`
const ConnectButton = styled.div`
    // background: #FED144 0% 0% no-repeat padding-box;
    // box-shadow: 0px 3px 6px #00000099;
    width: 299px;
    height: 79px;
    margin-top: 36px;
    margin-left: auto;
    margin-right: 75px;
    // border-radius: 57px;
    display: flex;
    align-items: center;
    place-content: center;
`
const ButtonLabel = styled.button`
    font: normal normal normal 21px/37px Kerox-NonCommercial;
    color: #000000;
    background: none;
    border:none;
`


export default Navbar;