import {
    Collection,

    PlayNow,
    Section,
    SectionDescription,
    SectionTitle, World, WorldDescription, WorldImage, WorldTitle,
} from "./styles";

import Container from "../Container";

const Play = () => {
    return (
        <Section>
            <Container>

                <SectionTitle>
                    Playable Worlds
                </SectionTitle>

                <SectionDescription>
                  Check out these live Metacraft worlds. These worlds are still in early beta.
                </SectionDescription>

                <Collection>
                    <World>
                        <WorldImage src={"/img/world1.jpeg"}/>
                        <WorldTitle>NFT Worlds Factions</WorldTitle>
                        <WorldDescription>Earn $BUILD token daily by competing and being part of a top faction on the NFT Worlds Factions worlds!</WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world2.jpeg"}/>
                        <WorldTitle>The Mothership</WorldTitle>
                        <WorldDescription>Earn $BUILD token by participating in a fast paced first-person shooter battle arena! The Gray Boys mothership is open for all to play!
                        </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world3.jpeg"}/>
                        <WorldTitle>Bad Baby Dinos
                        </WorldTitle>
                        <WorldDescription>Welcome to DinoWORLD! Filled with multiple custom games and experiences with play to earn mechanics, </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world3.jpeg"}/>
                        <WorldTitle>Bad Baby Dinos
                        </WorldTitle>
                        <WorldDescription>Welcome to DinoWORLD! Filled with multiple custom games and experiences with play to earn mechanics, </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world3.jpeg"}/>
                        <WorldTitle>Bad Baby Dinos
                        </WorldTitle>
                        <WorldDescription>Welcome to DinoWORLD! Filled with multiple custom games and experiences with play to earn mechanics, </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                </Collection>

            </Container>

        </Section>
    );
};

export default Play;
