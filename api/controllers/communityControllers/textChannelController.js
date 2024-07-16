//TODO: createTextChannel Roman
//TODO updateTextChannel Salvador
//TODO deleteTextChannel Maria Elisa

import Service from "../../services/Service.js";
import TextChannel from "../../models/community/TextChannel.js";

const textChannelService = new Service(TextChannel);

const createTextChannel = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "author") {
      return res.status(403).json({ msg: "No tienes permisos" });
    }

    const newTextChannelData = {
      ...req.body,
      author: req.user._id,
    };
    const newTextChannel = await textChannelService.create(newTextChannelData);
    return res.json({ textChannel: newTextChannel });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error creating a channel", error });
  }
};

export { createTextChannel };
