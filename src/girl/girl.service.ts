import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import {Like, Repository} from "typeorm"
import {InjectRepository} from "@nestjs/typeorm"
import { Girl } from './entities/girl.entity';
@Injectable()
export class GirlService {
    // getGirls() {
    //     return {
    //         code: 220,
    //         data: ["xiaohong", "xiaohua", "xiaoli"],
    //         msg: "请求女孩成功"
    //     }
    // }

    // addGirl() {
    //     return {
    //         code: 202,
    //         data: {
    //             id: 6,
    //             name: "xiaoming",
    //             age: 22
    //         },
    //         msg: "添加女孩成功"
    //     }
    // }

    // getGirlById(id: number) {
    //     let reJson: any = {}
    //     switch (id) {
    //         case 1:
    //          return   reJson = { id: 6, name: "xiaoming", age: 22 }
    //         case 2:
    //             return  reJson = { id: 7, name: "xiaoma", age: 26 }
    //         case 3:
    //             return   reJson = { id: 8, name: "xiaoqiang", age: 28 }
    //     }
    // }

    //依赖注入
    constructor(@InjectRepository(Girl) private readonly girl:Repository<Girl>){}
    addGirl(){
        const data =new Girl()
        data.name="孙悟空"
        data.age=888
        data.skill="大妖怪"
        return this.girl.save(data)
    }

    deleteGirl(id:number){
        return this.girl.delete(id)
    }

    updateGirl(id:number){
        const data =new Girl()
        data.name="高鸿"
        data.age=28
        return this.girl.update(id,data)
    }
     getGirls(){
        return this.girl.find()
     }

     getGirlByName(name:string){
        return this.girl.find({
            where:{
                name:Like(`%${name}%`)
            }
        })
     }
}
