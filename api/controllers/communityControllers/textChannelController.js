//TODO: createTextChannel Roman
//TODO updateTextChannel Salvador
//TODO deleteTextChannel Maria Elisa

import Service from "../../services/Service.js";
import TextChannel from "../../models/community/TextChannel.js";

const textChannelService = new Service(TextChannel);

const createTextChannel = async (req, res) => {
  try {
    const newTextChannel = await textChannelService.create(req.body);
    return res.json({ textChannel: newTextChannel });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error creating a channel", error });
  }
};

export { createTextChannel };
