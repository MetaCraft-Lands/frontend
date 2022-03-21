import styled from "styled-components";

export const Section = styled.div`
  background-color: black;
  background-image: url("./img/minecraft_world.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 2rem;
`
export const SectionTitle = styled.div`
  color: #15843C;
  font-size: 1.8rem;
  font-family: "pressstart", sans-serif;
  font-weight: bold;
  padding: 2rem 0;
`

export const SectionDescription = styled.div`
  max-width: 450px;
  margin: auto;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const PlayNow = styled.a`
  display: block;
  margin: 3rem auto 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: #1b7af5;
  width: 90%;
  height: 25px;
  border-radius: 75px;
  padding: 0.5rem;
`

export const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const World = styled.div`
  width: 350px;
  height: 400px;
  padding: 0.5rem;
  background-color: black;
  border: 1px solid #353333;
  border-radius: 10px;
  margin: 0.5rem 0.5rem;
`

export const WorldImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: 0 30%;
  border-radius: 10px;
`

export const WorldTitle = styled.h1`
  color: whitesmoke;
`

export const WorldDescription = styled.p`
  color: whitesmoke;
  font-family: ntailu,serif;
  height: 63px;
`

export const Ip = styled.p`
  font-size: 1.2rem;
  color: whitesmoke;
  background: black;
  font-family: "ntailu",serif;
`

export const Close = styled.button`
  padding: 0;
  border: none;
  color: white;
  background-color: #1b7af5;
  font-size: 1rem;
  width: 80px;
  border-radius: 5px;
`