//TODO updateCommunity Angel
//TODO deleteCommunity  Erik

import Community from '../../models/community/Community.js';

const getCommunityByAuthorId = async (req, res) => {
  const { authorId } = req.params;

  try {
    const community = await Community.findOne({ authorId }).populate(
      'textChannels'
    );

    if (!community) {
      return res.status(404).json({ msg: 'Community not found' });
    }

    return res.json({ community });
  } catch (err) {
    console.error('Error retrieving community:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

const createCommunityByAuthorId = async (req, res) => {
  const { authorId } = req.params;
  //TODO validar que el authorId de url sea igual a req.user.id
  console.log(authorId);
  try {
    let community = await Community.findOne({
      authorId,
    });

    if (community) {
      return res.status(400).json({
        msg: 'Community already exist for author' + authorId,
      });
    }

    community = await Community.create({
      ...req.body,
      authorId,
    });
    return res.json({
      msg: 'Community created',
      community,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error creating community',
      error,
    });
  }
};

export { getCommunityByAuthorId, createCommunityByAuthorId };
