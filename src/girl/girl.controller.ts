import { Controller, Get, Post, Request, Query, Body, Param, Headers } from '@nestjs/common';
import { GirlService } from "./girl.service"
@Controller('girl')
export class GirlController {
    constructor(private girlService: GirlService) { }
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
}
