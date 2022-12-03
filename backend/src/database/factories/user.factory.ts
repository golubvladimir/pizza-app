import { setSeederFactory, useSeederFactory } from 'typeorm-extension';
import { UserEntity } from '../../users/entities/user.entity';

export default setSeederFactory(UserEntity, async (faker) => {
  console.log('user_factory');

  const user = new UserEntity();

  user.username = faker.name.firstName().toLowerCase();
  user.password = '12345678';

  return user;
})