import Community from '../../models/community/Community.js';

//TODO craeteCommunity Alan
const craeteCommunity = async (req, res) => {
    const newCommunity = {
      community: req.body.community,
      book: req.params.bookId,
      user: req.user.id,
    };
    try {
      const community = await community.create(newCommunity);
      return res.json({
        community,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: 'Error creating Community',
        error,
      });
    }
  };

//TODO updateCommunity Angel
//TODO deleteCommunity  Erik
//TODO getCommunityByID Jesus

export { craeteCommunity };