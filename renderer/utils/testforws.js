const test = (url) => {
  try {
    let ws = new WebSocket(url);

    ws.onclose = () => {
      console.log("cranked");
      return;
    };

    return true;
  } catch (e) {
    return false;
  }
};

export default test;
