//TODO craeteCommunity Alan
//TODO updateCommunity Angel
//TODO deleteCommunity  Erik
//TODO getCommunityByID Jesus

import Community from '../../models/community/Community.js';

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

export { getCommunityByAuthorId };  
