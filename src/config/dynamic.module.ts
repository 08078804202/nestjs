import { Module, Global ,DynamicModule} from "@nestjs/common";

//设定动态（Dynamic）模块Dynamic
@Global()
@Module({})
export class DynamicTempModule {
    static forRoot(option:string):DynamicModule{
        return {
            module:DynamicTempModule,
            providers: [
                {
                    provide: "DynamicTempModule",
                    useValue: {
                        shopNameDynamic: "红浪漫"+option,
                        poster: "为人民服务"
                    }
                }
            ],
            exports: [
                {
                    provide: "DynamicTempModule",
                    useValue: {
                        shopNameDynamic: "红浪漫"+option,
                        poster: "为人民服务"
                    }
                }
            ]
        }
    }
 }