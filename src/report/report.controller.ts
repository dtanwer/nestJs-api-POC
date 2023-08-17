import { Controller,Get,Param,ParseEnumPipe,ParseIntPipe,Put,Body} from "@nestjs/common";
import { TypeOfReport } from "../data";
import { ReportService } from "./report.service";
import { CreateReportDto, ResponceReportDto, UpdateReportDto } from "../dtos/report.dto";

@Controller('report/:type')
export class ReportController {
  constructor( private readonly reportService:ReportService){}
  @Get()
  getAllInComeReports( 
    @Param('type',new ParseEnumPipe(TypeOfReport)) type:string
    ):ResponceReportDto[]{
    const reportType= type==='income'?TypeOfReport.INCOME:TypeOfReport.EXPENSE
    return this.reportService.getAllReports(reportType);
  }
  @Get(':index')
  getReportByIndex( @Param('index',ParseIntPipe) index:number){
    return this.reportService.getReportByIndex(index);
  }
  @Put(':index')
  updateByIndex(
     @Body() body:UpdateReportDto,
     @Param('index',ParseIntPipe) index:number
     ){
      console.log(body)
    return this.reportService.updateByIndex(index);
  }
}