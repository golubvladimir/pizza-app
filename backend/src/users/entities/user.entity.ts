import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { genSalt, hash } from 'bcrypt';


@Entity({
  name: 'users'
})
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  id: string;

  @Column({
    name: 'username'
  })
  username: string

  @Column({
    name: 'password'
  })
  password: string;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await genSalt();
    this.password = await hash(password || this.password, salt);
  }
}