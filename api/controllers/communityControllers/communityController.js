//TODO craeteCommunity
//TODO deleteCommunity
//TODO getCommunityByID


import Community from '../../models/community/Community.js'
import Service from '../../services/Service.js'

const communityService = new Service(Community)

const updateCommunity = async (req, res) =>{
    if (!req.params.movieId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ msg: 'invalid housing ID' })
      }
    
    try {
        const {communityId} = req.params
        const community = await communityService.updateById(communityId, req.body)
        if(!community){
            return res.status(404).json({
                msg: 'Community not Found'
            })
        }
        res.status(200).json(community) 
    } catch (error) {
        res.status(500).json({ msg: error.message })  
    }
}



export {
    updateCommunity
}
