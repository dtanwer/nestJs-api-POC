import { Injectable } from "@nestjs/common";
import { TypeOfReport,data } from "../data";
import { ResponceReportDto } from "../dtos/report.dto";
@Injectable()
export class ReportService {
  getAllReports(type:TypeOfReport):ResponceReportDto[]{
    return data.report.filter((report)=>report.type===type).map((report)=> new ResponceReportDto(report))
  }
  getReportByIndex(index:number){
    if(index<data.report.length)
    return data.report[index]
  return 'no data';
  }
  updateByIndex(index:number){
    return 'Data updated'
  }
}