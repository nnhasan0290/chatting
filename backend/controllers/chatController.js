import Chat from "../models/chatModel";

export const accessChat = async (req, res, nex) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      throw { message: "User not found" };
    }
    let isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");

    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name image email",
    });

    if (isChat.length) {
      res.send(isChat[0]);
    } else {
      let chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user._id, userId],
      };

      const chat = await Chat.create(chatData);
      const allChat = await Chat.findOne({
        _id: chat._id,
      }).populate("users", "-password");
      res.status(200).json({
        allChat,
      });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
