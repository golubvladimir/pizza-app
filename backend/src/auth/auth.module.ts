import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    /**
     * @nestjs/jwt config
     */
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '60s'
        }
      })
    }),
    PassportModule,
    UsersModule
  ],
  providers: [
    LocalStrategy,
    AuthService
  ],
  controllers: [
    AuthController
  ]
})
export class AuthModule {}