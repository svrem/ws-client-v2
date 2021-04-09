const test = (url) => {
  try {
    const ws = new WebSocket(url);

    return true;
  } catch (e) {
    return false;
  }
};

export default test;
