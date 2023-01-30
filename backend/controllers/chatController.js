import Chat from "../models/chatModel.js";
import User from "../models/userModel.js";

export const allUsers = async (req, res, nex) => {
  try {
    const user = await User.find().select("-password");
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

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
    }).populate("users", "-password");

    // isChat = await User.populate(isChat, {
    //   path: "latestMessage.sender",
    //   select: "name image email",
    // });
    console.log(isChat);

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

export const allChat = async (req, res, nex) => {
  try {
    const chats = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    }).populate("users");
    if (!chats) {
      throw { message: "not chat found" };
    }
    res.status(200).json({
      chats,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const delChat = async (req, res, nex) => {
  try {
    if (!req.body.chatId) {
      throw { message: "chat Id not found" };
    }
    const chat = await Chat.findByIdAndDelete(req.body.chatId);
    res.status(200).json({
      message: "deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
