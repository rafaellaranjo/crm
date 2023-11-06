import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';

@EntityRepository(Customer)
class UsersRepository extends Repository<Customer> {
  public async findById(id: string): Promise<Customer | undefined> {
    return await this.findOne(id);
  }

  public async findByName(name: string): Promise<Customer | undefined> {
    return await this.findOne({ name });
  }

  public async findByUserId(user_id: string): Promise<Customer | undefined> {
    return await this.findOne({ user_id });
  }
}

export default UsersRepository;
