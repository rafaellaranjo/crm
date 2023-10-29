import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const { user_id, avatarFileName } = request.body;

    const user = await updateAvatar.execute({ user_id, avatarFileName });

    return response.json(user);
  }
}
