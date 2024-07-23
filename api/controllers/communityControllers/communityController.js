import Community from '../../models/community/Community.js';
import Service from '../../services/Service.js';
import Author from '../../models/books/Author.js';

const communityService = new Service(Community);

const updateCommunity = async (req, res) => {
  const { authorId, communityId } = req.params;

  if (
    !authorId.match(/^[0-9a-fA-F]{24}$/) ||
    !communityId.match(/^[0-9a-fA-F]{24}$/)
  ) {
    return res.status(400).json({ msg: 'Invalid author ID or community ID' });
  }

  try {
    const author = await Author.findById(authorId);
    if (!author) {
      return res.status(404).json({ msg: 'Author not found' });
    }
    const existingCommunity = await Community.findById(communityId);
    if (!existingCommunity) {
      return res.status(404).json({ msg: 'Community not found' });
    }

    if (existingCommunity.authorId.toString() !== authorId) {
      return res
        .status(403)
        .json({ msg: 'You can only modify your own communities' });
    }
    const updateCommunity = await communityService.updateById(
      communityId,
      req.body
    );
    if (!updateCommunity) {
      return res.status(404).json({ msg: 'Community not found' });
    }

    res.status(200).json(updateCommunity);
  } catch (error) {
    console.error('Error updating community:', error);
    res
      .status(500)
      .json({ msg: 'Internal Server Error', error: error.message });
  }
};

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

export { getCommunityByAuthorId, createCommunityByAuthorId, updateCommunity };
