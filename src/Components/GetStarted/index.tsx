import {
  Action,
  ActionBox,
  ActionButton,
  ActionDescription,
  Section,
  SectionTitle,
  SubSection,
} from "./styles";

import Container from "../Container";

const GetStarted = () => {
  const nftpage = "/nft";
  const marketplace =
    "https://testnets.opensea.io/collection/metacraft-jthkca9ee0";
  return (
    <Section>
      <Container>
        <SectionTitle>Get Started</SectionTitle>

        <SubSection>
          <Action>Get Started</Action>
          <ActionBox>
            <ActionDescription>
              Mint a land and start to create anything you can imagine. What's
              more? You own them all!
            </ActionDescription>
            <ActionButton href={nftpage}>Mint NOW</ActionButton>
          </ActionBox>
        </SubSection>

        <SubSection>
          <Action>Explore</Action>
          <ActionBox>
            <ActionDescription>
              Explore LANDs owned by users to experience incredible Minecraft
              metaverse
            </ActionDescription>
            <ActionButton href={nftpage}>Explore NOW</ActionButton>
          </ActionBox>
        </SubSection>

        <SubSection>
          <Action>Create</Action>
          <ActionBox>
            <ActionDescription>
              Create buildings, artworks, games and even more using the simple
              tool we provided. Everyone can create
            </ActionDescription>
            <ActionButton href={nftpage}>Build Now</ActionButton>
          </ActionBox>
        </SubSection>

        <SubSection>
          <Action>Play & Earn</Action>
          <ActionBox>
            <ActionDescription>
              $BUILD tokens are ERC20 tokens that are generated with in-game
              activity in Minecraft and staked NFTs. $BUILD can be used for
              building your LANDs and unlock in-game items. More to come...
            </ActionDescription>
            <ActionButton href={nftpage}>Claim $BUILD NOW</ActionButton>
          </ActionBox>
        </SubSection>

        <SubSection>
          <Action>Trade</Action>
          <ActionBox>
            <ActionDescription>
              Trade your NFTs on marketplace or start by renting one. Sure you
              will be overloaded with amazingggg stuff.
            </ActionDescription>
            <ActionButton href={marketplace}>Opensea Marketplace</ActionButton>
          </ActionBox>
        </SubSection>
      </Container>
    </Section>
  );
};

export default GetStarted;
