import styled from 'styled-components';

import galleryimg from '../assets/Gallery.png';

import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';

const Gallery = () => {
    return(
        <div>
            <Header>Gallery</Header>
            <SubLabel>Are you curious about all the different and unique varieties you can find on cryptonya? Discover all this and more together with our Discord community - join our Discord server!</SubLabel>
        
            <MoreLabel>See More</MoreLabel>

            <GalleryImage src={galleryimg} />

            <SocialMediaGroup>
                <TwitterImage src={twitter}/>
                <DiscordImage src={discord}/>
            </SocialMediaGroup>
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

const GalleryImage = styled.div`
    margin-top: 75px;
    height: 864px;
    background: transparent url(${props => props.src}) 0% 0% no-repeat padding-box;
    opacity: 1;
    background-position: center;
`

const MoreLabel = styled.div`
    margin-top: 120px;
    width: 300px;
    font: normal normal normal 42px/48px Kerox-NonCommercial;
    color: #000000;
    margin-inline: auto;

`

const SubLabel = styled.div`
    font: normal normal normal 42px/48px Kerox-NonCommercial;
    text-align: center;
    margin-inline: auto;
    width: 1530px;
    margin-top: 100px;
`

const Header = styled.div`
    font: normal normal normal 152px/175px Kerox-NonCommercial;
    text-align: center;
    margin-inline: auto;
    margin-top: 475px;
`

export default Gallery;