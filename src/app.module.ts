import { Module } from '@nestjs/common';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "root123",
      database: "test-agg",
      retryDelay: 500,
      retryAttempts: 10,
      synchronize:true,
      autoLoadEntities:true
    }),
    GirlModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
