import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import {  map } from "rxjs";
export class CustomIntercepter implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler) {
        return handler.handle().pipe(
            map((data)=>{
                return data.map((item)=>{
                    const res={
                        ...item,
                        Name:item.name
                    }
                    delete res.name

                    return res;
                })
            })
        )
    }

}