//TODO deleteCommunity  Erik
import Community from "../../models/community/Community.js";

// Controlador para manejar la eliminación de una comunidad
const deleteCommunityById = async (req, res) => {
  try {
    const communityId = req.params.id;
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: 'Comunidad no encontrada' });
    }

    if (!community.authorId.toString() !== req.user.id) {
      return res.status(403).json({
        message: 'No tienes permiso para eliminar esta comunidad'
      });      
    }

    await Community.findByIdAndDelete(communityId);
      res.status(200).json({ message: 'Comunidad eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la comunidad', error });
  }
};

export default deleteCommunityById;