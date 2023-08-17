import { Injectable } from '@nestjs/common';
import { TypeOfReport } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  
  calculateSummary() {
    const totalIncome = this.reportService
      .getAllReports(TypeOfReport.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalExpense = this.reportService
      .getAllReports(TypeOfReport.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);

      return {totalIncome,totalExpense}
  }

}
