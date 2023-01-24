import chats from "./dummy.js";

export const dummyData = (req, res, nex) => {
  res.send(chats);
};
