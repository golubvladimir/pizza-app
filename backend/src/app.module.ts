import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    /**
     * @nestjs/config config
     */
    ConfigModule.forRoot({
      envFilePath: `${ process.cwd() }/.development.env`,
    }),

    /**
     * @nestjs/typeorm config
     */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          `${ __dirname }/**/*.entity.{js|ts}`
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ],
})
export class AppModule {}
