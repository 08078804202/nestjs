import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import {TypeOrmModule} from "@nestjs/typeorm"
import { Girl } from './entities/girl.entity';
import { CounterMiddleware } from 'src/counter/counter.middleware'; //导入中间件
import { UserMiddleware } from 'src/user/user.middleware';
import { BoyService } from 'src/boy/boy.service'; //导入BoyService


@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  // providers: [GirlService]  //providers 依赖注入   简单写法
  providers:[
    BoyService,//引入BoyService 简写
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
export class GirlModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    //局部中间件
    consumer.apply(CounterMiddleware).forRoutes("/girl") //girl 路径下起作用
    consumer.apply(UserMiddleware).forRoutes({
      path:"/girl/test",
      method:RequestMethod.GET
    }) //girl/test 路径下起作用
  }
  
}
