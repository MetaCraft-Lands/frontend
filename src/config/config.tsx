const getHash = (id: number): string => {
  switch (id) {
    case 1:
      return "QmQhwQ3KGXEshsjrXBv7x3dqz4MJtq4NEF5MeTJiWJqY1C";
    default:
      throw Error(`No hash`);
  }
};

export default getHash;
