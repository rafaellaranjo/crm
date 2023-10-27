import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findById(id: string): Promise<User | undefined> {
    return await this.findOne(id);
  }

  public async findByName(name: string): Promise<User | undefined> {
    return await this.findOne({ name });
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ email });
  }

  public async findByPassword(password: string): Promise<User | undefined> {
    return await this.findOne({ password });
  }

  public async findByWhatsapp(whatsapp: string): Promise<User | undefined> {
    return await this.findOne({ whatsapp });
  }

  public async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    return await this.findOne({ email, password });
  }
}

export default UsersRepository;
