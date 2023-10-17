import Sockette from "sockette";

let ws;
let events;
let isConnecttionOpen;

export const open = (events = {}) => {
  events = events;
  return new Promise((resolve) => {
    ws = new Sockette(
      `wss://on2l783adb.execute-api.us-east-2.amazonaws.com/production?userid=${localStorage?.getItem(
        "register_id"
      )}`,
      {
        timeout: 5e3,
        maxAttempts: 1,
        onopen: (e) => {
          console.log("onopen : ", e);
          isConnecttionOpen = true;
          resolve();
        },
        onmessage: (e) => console.log("Message Received:", e),
        onreconnect: (e) => console.log("Reconnecting...", e),
        onmaximum: (e) => console.log("Stop Attempting!", e),
        onclose: (e) => {
          console.log("Closed!", e);
          isConnecttionOpen = false;
        },
        onerror: (e) => console.log("Error:", e),
        ...events,
      }
    );
  });
};
//Send Message
export const send = async (message) => {
  if (!isConnecttionOpen) {
    await open(events);
  }
  ws.send(
    JSON.stringify({
      action: "onmessage",
      message,
      from_user: localStorage?.getItem('register_id'),
      to_user: localStorage?.getItem("creator_id"),
    })
  );
};

export const close = () => {
  ws.close();
};
