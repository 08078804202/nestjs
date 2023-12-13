import { Module, Global } from "@nestjs/common";

//设定全局模块
@Global()
@Module({
    providers: [
        {
            provide: "Config",
            useValue: {
                shopName: "红浪漫",
                poster: "为人民服务"
            }
        }
    ],
    exports: [
        {
            provide: "Config",
            useValue: {
                shopName: "红浪漫",
                poster: "为人民服务"
            }
        }
    ]
})
export class ConfigModule { }