import Community from '../../models/community/Community.js';

//TODO craeteCommunity Alan
const createCommunity = async (req, res) => {
    const newCommunity = {
      textChannels: [],
      authorId: 1
    }; 
    console.log('prueba exitosa');
    return res.json({
      msj: 'del return'
    });
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

export { createCommunity };