import Mint from "../Mint";
import {Contract} from "near-api-js";
import {DisplayNft} from "../Nft/nft";
import BuildToken from "../BuildToken";

import {
    SectionDescription,
    SectionTitle,
    Section,
    Bg,
    Hr
} from "./styles"
import Container from "../Container";



const printNftMintMsg = (response: any) => {
    if (response && response.status != null && response.method === 'nft_mint') {
        let prefix = response.status ? "Mint succeeded!" : "";
        return prefix + " " + (response ? response.msg : "");
    }
    return "";
}

const Dashboard = () => {
    return (
        <>
            <Bg>
                <Container>
                    <SectionTitle>
                        When Minecraft meets Blockchain
                    </SectionTitle>
                    <SectionDescription>
                        Mint & Stake you Land now to enjoy the MetaCraft Metaverse!
                    </SectionDescription>
                    <b>TODO</b>
                    <Mint/>
                </Container>
            </Bg>

            <Section>
                <Container>
                    <SectionTitle>Your Lands</SectionTitle>
                    <SectionDescription>
                        Stake your Lands and Join MetaCraft server at 18.219.218.172 to earn $BUILDs! 
                        
                        Once $BUILD is claimed, you'll be able to use these utility
                        tokens for upcoming features, and other future projects.
                    </SectionDescription>
                    <DisplayNft/>

                    <Hr/>
                    <SectionTitle>Your Unclaimed $BUILD</SectionTitle>
                    <SectionDescription>
                        Show $BUILD you have earned!
                    </SectionDescription>
                    <BuildToken/>
                </Container>
            </Section>
        </>
    )
        ;
};

export default Dashboard;
