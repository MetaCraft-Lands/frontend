import { Parser } from "html-to-react";
import { Paper } from "./styles";

const rawHTML = `
<h1 id="white-paper-metacraft-lands">White Paper - MetaCraft Lands</h1>
<p>Metacraft is a fully decentralized, fully customizable, community-driven, play-to-earn gaming platform where landowners can create their own limitless metaverse games or experiences for players or exclusive communities within their lands.</p>
<p>Currently using Minecraft and it&#39;s sprawling open-source ecosystem, Metacraft builds on the backbone of a decades worth of open source development within the Minecraft community and radically expands on it to enable an entirely new types of 3D voxel-based, decentralized gaming metaverses backed by the Ethereum blockchain.</p>
<p>Each land is a completely unique 3D voxel world and is procedurally generated. Lands are composed of 2 elements. Their visual look &amp; in-game experiences that are attached to the blockchain, and their on-chain data &amp; resource information that will be tied to additional MetaCrafts dApps, token distribution and more in the future.</p>
<p>By owning a land, you own the rights to that world within the MetaCraft ecosystem, the ability to build &amp; all things built in that world, it’s in-game experiences, and much more. Think of it as a scarce piece of digital metaverse land that can be transformed into anything you can imagine for others to play, experience and more. All in a massively multiplayer setting.</p>
<h2 id="-the-vision-"><strong><strong>The Vision</strong></strong></h2>
<p>We started MetaCraft to create the first truly decentralized, cross-platform (computers/consoles), community driven &amp; developed play-and-earn gaming metaverse platform.
Each of the 999 unique MetaCraft Lands are constantly evolving and developed by world owners or individual communities.
These 3D voxel-based lands open up a limitless amount of creative possibilities to make unique gaming experience, exclusive hangout spots, play-to-earn competitions and more.
We believe MetaCraft Lands will become a sprawling, decentralized, massively multiplayer ecosystem of many interconnected Lands. With each world having in-game portals to many other worlds, as well as the ability for players to easily warp between their favorite worlds at any time.
We see a future where each world offers unique gameplay mechanics, experiences, play-to-earn competitions, community hangouts, and so much more.</p>
<h2 id="-tutorials-landlords-"><strong><strong>Tutorials - Landlords</strong></strong></h2>
<p><strong><strong>Launch Your Metaverse</strong></strong></p>
<p>MetaCraft has been created as the lowest barrier to entry way to create a flexible play to earn metaverse for any project or community.</p>
<p>We&#39;ve solved the complexities of building massively multiplayer metaverse Lands &amp; games, integrating blockchain based transaction layers, verifying player NFT ownership for admission to content and much more.</p>
<p>Much of this innovation is thanks to the Minecraft ecosystem and the fantastic creative platform Minecraft itself provides as a foundation. Beyond that, we&#39;ve created significant technical systems to bring frictionless blockchain integrations for play to earn, cross-linked communities, decentralized infrastructure, in-game token layers and much more to make this possible.</p>
<p>This document serves as a guide for key things you&#39;ll want to understand about MetaCraft and how to get started building your play to earn metaverse using MetaCraft and the $BUILDs token.</p>
<p><strong>Acquiring A Land</strong></p>
<p>It all starts with a land. To build within the MetaCraft ecosystem, you&#39;ll need to have access to a MetaCraft Land. Having access to a land gives you a baseline world to start building your metaverse off of. But more importantly, it gives you access to all of our infrastructure, blockchain layer, $BUILD token, interlinked community support &amp; ecosystem and more that you&#39;ll need to create a thriving metaverse.</p>
<p>There&#39;s 2 ways to acquire access to a land.</p>
<ol>
<li>You can buy a MetaCraft Land off of the secondary market from another person who is selling their MetaCraft Land on websites like <a href="https://testnets.opensea.io/collection/metacraft-h3ifpy6lki">OpenSea</a>: </li>
<li>Alternatively, we recognize that the entry price for a world is a significant investment and may not be within reach for some projects, communities or individuals. To solve this we&#39;ve created a <strong>rental system</strong> where you can rent long term usage of a world and all of its ownership access using our rental system that will be released later this year. This system will allow you to rent complete ownership of a world from an existing world owner for a set amount of $BUILD token for any time.</li>
</ol>
<h2 id="-tutorials-players-"><strong><strong>Tutorials - Players</strong></strong></h2>
<p>Land on the <strong>Play</strong> tab, players can join a MetaCraft land and enjoy the world! No nft is required for playing the games. Some land can also enable Play to earn, so players can not only play the game and earn $BUILD tokens at the same.</p>
<p align="center" ><img width="80%" src="https://lh3.googleusercontent.com/LezMwd7jyALg4LlBCe9iWrmnmvq-Y-6QfUtgItMUmAZTlbRAx7Bx-0bAMofEPsYbJ_8TDiH7O3OXOfpWT8y8lHyTztQbdlqahVlO60vozejBIZiR6urfozBYPQKTaNuz6NB35T28br4=w2400" alt="playable lands"/></p>
<h2 id="-what-s-next-for-metacraft-"><strong>What&#39;s next for MetaCraft</strong></h2>
<p>Knowing the importance of a stable economic system for the game, we have spent a great amount of time on designing the in&amp;out game economy and project roadmap.</p>
<p align="center"> <img src="https://res.cloudinary.com/devpost/image/fetch/s--q5HWZoFi--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://lh3.googleusercontent.com/eEVrTixELbSKghlU8I2wBUthF-LirnB8iUouReU4EWNrYzkipfM7h8FMLVPQF9LUZHtZsvunJZJD538EKljtceF3ob6UbCop1rbFPWVtts12R9B48gdZS1ldh7pmlnFOVGUjCL4ibgU%3Dw2400"</a></p>
<p>Key milestones include:</p>
<ul>
<li>Implementing renting feature allowing user to rent out their BlockHead NFTs, Plots and other NFTs will significantly lower entry fees for new players, add a passive revenue stream to existing players and thus increase active usage of in-game items</li>
<li>Tokenomics designed to develop deflationary in-game currency that provides utilities for gamers.</li>
<li>DAO to allow users to vote on in-game development and directions of the project.</li>
<li>Partnership with existing minecraft servers / communities (e.g. <a href="https://blockeley.com/">Blockeley</a>)</li>
<li>Built out cross-chain compatibility allow Minecraft assets from other chains to be used within our ecosystem</li>
</ul>
`;

const Whitepaper = () => {
  return <Paper>{Parser().parse(rawHTML)}</Paper>;
};

export default Whitepaper;
