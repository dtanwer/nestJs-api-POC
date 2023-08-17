import {IsString,IsNumber,IsPositive,IsNotEmpty,IsOptional } from 'class-validator'
import { Exclude,Expose } from 'class-transformer';
import { TypeOfReport } from 'src/data';
export class CreateReportDto{
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsNumber() 
    @IsPositive()
    amount:number;
}
export class UpdateReportDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsOptional()
    @IsNumber() 
    @IsPositive()
    amount:number;
}

export class ResponceReportDto{
    name:string
    @Exclude()
    amount:number
    @Expose({name:'UserAmount'})
        transformAmount(){
            return this.amount;
        }
    @Exclude()
    type:TypeOfReport
    constructor(partial:Partial<ResponceReportDto>){
        Object.assign(this,partial)
    }
}