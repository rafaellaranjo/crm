import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    whatsapp,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email já está sendo utilizado em outra conta.');
    }

    const whatsappExists = await usersRepository.findByWhatsapp(whatsapp);

    if (whatsappExists) {
      throw new AppError(
        'Este celular já está sendo utilizado em outra conta.',
      );
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      whatsapp,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
