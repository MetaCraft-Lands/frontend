import styled from "styled-components";

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
`;

export const Frame = styled.div`
  display: block;
  width: 200px;
  height: 200px;
  //border: 3px solid white;
  /* margin: 0 auto 1.5rem; */
  position: center;
  align-items: center;
  font-size: 1.8em;
  /* margin: 2em; */
  padding: 1em;
  padding-bottom: 4em;
  border: 2px solid green;
  border-radius: 5px;
`;

export const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const NFT = styled.div`
  //border: 2px solid #282c34;
  width: 175px;
  //height: 300px;
  /* margin: 4rem; */
  margin-left: 4rem;
  margin-right: 4rem;
  margin-bottom: 3rem;
`;

export const NftTraits = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
`;

const Link = styled.a`
  display: block;
  padding: 0.3rem;
  color: #282c34;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #15843c;
  border-radius: 10px;
  margin: 1rem 0;
`;

export const SelectSkin = styled(Link)``;

export const Stake = styled.button`
  background: none;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 0.3rem;
  color: #282c34;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #15843c;
  border-radius: 10px;
  margin: 1rem 0;
  font-family: "minecraftchmc", sans-serif;
`;

export const NFTName = styled.p`
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
`;

export const Trait = styled.p`
  color: whitesmoke;
  font-size: 1.2rem;
  text-align: left;
  margin: 1rem;
`;
