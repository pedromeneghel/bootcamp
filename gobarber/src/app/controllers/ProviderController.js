import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const provider = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'email', 'avatar_id'],
      include: [File],
    });

    return res.json(provider);
  }
}

export default new ProviderController();
