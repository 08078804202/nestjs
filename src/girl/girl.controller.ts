import { Controller, Get, Inject, Post, Request, Query, Body, Param, Headers } from '@nestjs/common';
import { GirlService } from "./girl.service"
import { BoyService } from 'src/boy/boy.service';

@Controller('girl')
export class GirlController {
    //默认提供的注入，简单写法
    // constructor(private girlService: GirlService) { }

    //自定义的注入写法 @Inject("girl") girl是在module里面起的名字。
    constructor(
        @Inject("girl") private girlService: GirlService, //注入service GirlService类型
        @Inject("girlArray") private girls: string[] , //注入 自定义的值 girls是起的参数的名字
        @Inject("MyFactory") private MyFactory: string , //注入 自定义的方法 MyFactory 是起的方法的名字
        private boyService :BoyService, //注入BoyService
    ) { }
    // @Get()
    // getGirl(): any {
    //     return this.girlService.getGirls()
    // }
    // @Post("add")
    // // addGirl(@Request() req):any{
    // addGirl(@Body() body): any {
    //     // console.log(req.body)
    //     console.log(body)
    //     return this.girlService.addGirl()
    // }
    // @Get("getGirlById")
    // // getGirlById(@Request() req):any{
    // getGirlById(@Query() query): any {
    //     // console.log(req.query.id)
    //     // let id:number=parseInt(req.query.id)
    //     let id: number = parseInt(query.id)
    //     return this.girlService.getGirlById(id)
    // }
    // //动态路由
    // @Get("/findGirlById/:id/:name")
    // // findGirlById(@Request() req): any {
    // //     console.log("id",req.params.id,req.params.name)
    // //     let id: number = parseInt(req.params.id)
    // findGirlById(@Param() param,@Headers() headers ): any {
    //     console.log("id", param.id, param.name)
    //     console.log("headers",headers)
    //     let id: number = parseInt(param.id)
    //     return this.girlService.getGirlById(id)
    // }
    @Get("/add")
    addGirl(): any {
        return this.girlService.addGirl()
    }
    @Get("/delete/:id")
    deleteGirl(@Param() param): any {
        let id: number = parseInt(param.id)
        return this.girlService.deleteGirl(id)
    }
    @Get("/update/:id")
    updateGirl(@Param() param): any {
        let id: number = parseInt(param.id)
        return this.girlService.updateGirl(id)
    }
    @Get()
    getGirls(): any {
        return this.girlService.getGirls()
    }
    @Get("/getGirlByName/:name")
    getGirlByName(@Param() param): any {
        let name: string = param.name
        return this.girlService.getGirlByName(name)
    }

    @Get("/test")
    test(): any {
        return this.girls;
    }

    @Get("/testMyFactory")
    testMyFactory(): any {
        return this.MyFactory;
    }

    @Get("/test/middleware")
    testMiddleware(): any {
        return this.girls+"Middleware";
    }

    @Get("/corstest")
    corsTest():object{
        return {
            message:"测试跨域请求成功",
            status:202
        }
    }

    //利用Boy模块的service 
    @Get("/boy/all")
    getBoyAll():any{
        return this.boyService.findAll()
    }

    
}
