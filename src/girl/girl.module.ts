import { Module } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import {TypeOrmModule} from "@nestjs/typeorm"
import { Girl } from './entities/girl.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  // providers: [GirlService]  //providers 依赖注入   简单写法
  providers:[
    { //自定义写法
    provide:"girl",  //什么名字
    useClass:GirlService //用哪个service
  },{//自定义一个值
    provide:"girlArray" ,//起个名字
    useValue:["小红","小翠","小强"]
  },{//自定义一方法
    provide:"MyFactory", //起个名字
    useFactory:()=>{
      console.log("MyFactory 是 自定义一方法")
      return " console.log(MyFactory 是 自定义一方法)"
    }
  }
] 
})
export class GirlModule {}
