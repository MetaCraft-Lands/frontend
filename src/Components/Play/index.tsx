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
                        <WorldTitle>
                            Glass House
                        </WorldTitle>
                        <WorldDescription>
                            Earn $BUILD token daily by competing and being part of a top faction on the NFT Worlds Factions worlds!
                        </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world2.jpeg"}/>
                        <WorldTitle>Tomorrowland</WorldTitle>
                        <WorldDescription>
                            The happiest place in the world! Check out everything you love about Disney World. Meet your old and new friends here!
                        </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world3.jpeg"}/>
                        <WorldTitle>
                            Among Us
                        </WorldTitle>
                        <WorldDescription>
                            Most popular social game on MetaCraft! If you can catch the imposter...
                        </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world4.jpeg"}/>
                        <WorldTitle>
                            Celebrate Today
                        </WorldTitle>
                        <WorldDescription>
                            Celebrate the Lunar New Year by playing mini games in Minecraft!
                        </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world5.jpeg"}/>
                        <WorldTitle>
                            EDC MetaCraft
                        </WorldTitle>
                        <WorldDescription>
                            Get ready to rock in the metaverse! What's more? Register your favorite song today and grab a drink in-game!
                        </WorldDescription>
                        <PlayNow>Play Now</PlayNow>
                    </World>
                </Collection>

            </Container>

        </Section>
    );
};

export default Play;
