import {
    Close,
    Collection, Ip,

    PlayNow,
    Section,
    SectionDescription,
    SectionTitle, World, WorldDescription, WorldImage, WorldTitle,
} from "./styles";

import Container from "../Container";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Ip>
                    Play at: {props.ip}
                </Ip>
            </Modal.Body>
            <Modal.Footer>
                <Close onClick={props.onHide}>Close</Close>
            </Modal.Footer>
        </Modal>
    );
}

const Play = () => {
    const [modalShow, setModalShow] = useState(false);
    const [ip, setIp] = useState(false);

    function setShow(ip)  {
        setModalShow(true)
        setIp(ip)
    }

    return (
        <Section>
            <Container>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    ip={ip}
                />
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
                            Earn $BUILD token by playing and building on MetaCraft Land
                        </WorldDescription>
                        <PlayNow onClick={() => setShow( "127.0.0.1")}>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world2.jpeg"}/>
                        <WorldTitle>Tomorrowland</WorldTitle>
                        <WorldDescription>
                            The happiest place in the world! Check out everything you love about Disney World. Meet your
                            old and new friends here!
                        </WorldDescription>
                        <PlayNow onClick={() => setShow( "18.219.218.172")}>Play Now</PlayNow>

                    </World>
                    <World>
                        <WorldImage src={"/img/world3.jpeg"}/>
                        <WorldTitle>
                            Among Us
                        </WorldTitle>
                        <WorldDescription>
                            Most popular social game on MetaCraft! If you can catch the imposter...
                        </WorldDescription>
                        <PlayNow onClick={() => setShow( "coming soon...")}>Play Now</PlayNow>

                    </World>
                    <World>
                        <WorldImage src={"/img/world4.jpeg"}/>
                        <WorldTitle>
                            Celebrate Today
                        </WorldTitle>
                        <WorldDescription>
                            Celebrate the Lunar New Year by playing mini games in Minecraft!
                        </WorldDescription>
                        <PlayNow onClick={() => setShow( "coming soon...")}>Play Now</PlayNow>
                    </World>
                    <World>
                        <WorldImage src={"/img/world5.jpeg"}/>
                        <WorldTitle>
                            EDC MetaCraft
                        </WorldTitle>
                        <WorldDescription>
                            Get ready to rock in the metaverse! What's more? Register your favorite song today and grab
                            a drink in-game!
                        </WorldDescription>
                        <PlayNow onClick={() => setShow( "coming soon...")}>Play Now</PlayNow>
                    </World>
                </Collection>

            </Container>

        </Section>
    );
};

export default Play;
