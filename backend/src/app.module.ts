import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${ process.cwd() }/.development.env`,
    }),
  ],
})
export class AppModule {}
