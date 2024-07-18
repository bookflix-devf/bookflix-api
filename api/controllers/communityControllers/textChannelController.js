//TODO: createTextChannel Roman
//TODO updateTextChannel Salvador
//TODO deleteTextChannel Maria Elisa

import TextChannel from '../../models/community/TextChannel.js';
import Community from '../../models/community/Community.js';

export const createTextChannel = async (req, res) => {
  const { authorId } = req.params;

  if (!req.body.name) {
    return res.status(400).json({
      msg: 'Invalid body',
    });
  }

  if (req.user.id != authorId) {
    return res.status(403).json({
      msg: 'Solo puedes modificar tu comundiad',
    });
  }

  try {
    const community = await Community.findOne({
      authorId,
    });

    if (!community) {
      return res.status(404).json({
        msg: 'No hay comunidada del author ' + authorId,
      });
    }

    const textChannel = await TextChannel.create(req.body);

    // Community.findByIdAndUpdate(community.id, {
    //   textChannels: [...community.textChannels, textChannel.id],
    // });

    community.textChannels = [...community.textChannels, textChannel.id];

    await community.save();

    return res.json({
      msg: 'TextChannel created',
      community,
    });
  } catch (error) {
    return res.status(500).json({
      error,
      msg: 'Error creando text channel',
    });
  }
};
