import mongoose from "mongoose";

const Chat = mongoose.model(
  "Chat",
  mongoose.Schema(
    {
      chatName: {
        type: String,
        trim: true,
      },
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      isGroupChat: {
        type: Boolean,
        default: false,
      },
      groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    { timestamps: true }
  )
);

export default Chat;
