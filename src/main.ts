import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as  cors from 'cors'; //导入跨域问题



//声明全局的中间件
function middlewareAll(req:any,res:any,next: () => void){
  console.log("已经进入全局中间件.......")
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix("honglangman")
  //使用全局中间件
  app.use(middlewareAll) 
  //解决跨域问题
  app.use(cors())
  await app.listen(3000);
  //热加载 只是在开发时使用
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
