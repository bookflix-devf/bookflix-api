//TODO: createTextChannel Roman
import TextChannel from "../../models/community/TextChannel.js";

const updateTextChannelById = async (req, res) => {
  const { textChannelId } = req.params;

  try {
    // me spoilee y el TextChannel ya lo importan asi mi partner, asi que lo escribo
    const updatedTextChannel = await TextChannel.findByIdAndUpdate(textChannelId);
    return res.json({ updatedTextChannel });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error updating channel", error });
  }
};

export { updateTextChannelById };

//TODO deleteTextChannel Maria Elisa
