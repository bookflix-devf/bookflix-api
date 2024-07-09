//TODO: createTextChannel Roman
//TODO updateTextChannel Salvador
//TODO deleteTextChannel Maria Elisa
import TextChannel from "../../models/community/TextChannel.js";

const createTextChannel = async (req, res) => {
  const newTextChannel = req.body;

  try {
    const textChannel = await TextChannel.create(newTextChannel);
    return res.json({ textChannel });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error creating a channel", error });
  }
};

export { createTextChannel };
