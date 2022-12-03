import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    /**
     * @nestjs/config config
     */
    ConfigModule.forRoot({
      envFilePath: `${ process.cwd() }/config/.development.env`,
    }),

    /**
     * @nestjs/typeorm config
     */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          `${ __dirname }/**/*.entity.js`
        ],
        synchronize: true,
      })
    }),

    AuthModule,
    UsersModule
  ],
})
export class AppModule {}
