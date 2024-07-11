//TODO craeteCommunity Alan
//TODO deleteCommunity  Erik
//TODO getCommunityByID Jesus


import Community from '../../models/community/Community.js'
import Service from '../../services/Service.js'
import Author from '../../models/books/Author.js'

const communityService = new Service(Community)

const updateCommunity = async (req, res) => {
    const { authorId, communityId } = req.params;
  
    if (!authorId.match(/^[0-9a-fA-F]{24}$/) || !communityId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ msg: 'Invalid author ID or community ID' });
    }
  
    try {
      const author = await Author.findById(authorId);
      if (!author) {
        return res.status(404).json({ msg: 'Author not found' });
      }
      const community = await communityService.updateById(communityId, req.body);
      if (!community) {
        return res.status(404).json({ msg: 'Community not found' });
      }
  
      res.status(200).json(community);
    } catch (error) {
      console.error('Error updating community:', error);
      res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
  };



const getCommunityByAuthorId = async (req, res) => {
    const { authorId } = req.params;

    try {
        const community = await Community.findOne({ authorId });

        if (!community) {
            return res.status(404).json({ msg: 'Community not found' });
        }

        return res.json({ community });
    } catch (err) {
        console.error('Error retrieving community:', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

export { getCommunityByAuthorId,
  updateCommunity
 };  
