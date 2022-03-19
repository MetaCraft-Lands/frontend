const metadata = [
    {
        "_tokenId": 1,
        "_seed": 79311,
        "_tokenMetadataIPFSHash": "QmY3svVgfvCaRLFs7E2BsFsvsd6YrGF5Bio1tX57iMTMcr"
    },
    {
        "_tokenId": 2,
        "_seed": 70754,
        "_tokenMetadataIPFSHash": "QmUfs2wkyFgu5W26q66pNs5S7Rt9wAFShK6WToVQ3kHFc5"
    },
    {
        "_tokenId": 3,
        "_seed": 39583,
        "_tokenMetadataIPFSHash": "QmczX6Zh7faUxdCf9z2Zdr5vnQsmh6qdp8wF95KGEtCGtC"
    },
]

export const randomMeta = () => {
    const idx = Math.floor(Math.random() * metadata.length);
    let meta = metadata[idx];
    return meta;
}