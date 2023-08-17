type Data={
    report:ReportType[]
}
type ReportType={
    id:string
    name:string
    type:TypeOfReport
    amount:number
}
export enum TypeOfReport{
    INCOME='income',
    EXPENSE='expense'
}
 export const data:Data={
    report:[
        {
            id:'1',
            name:'deep',
            type:TypeOfReport.EXPENSE,
            amount:123
        },
        {
            id:'2',
            name:'deep',
            type:TypeOfReport.EXPENSE,
            amount:123
        },
        {
            id:'3',
            name:'deep',
            type:TypeOfReport.INCOME,
            amount:12
        },
        {
            id:'4',
            name:'deep',
            type:TypeOfReport.EXPENSE,
            amount:123
        },
        {
            id:'5',
            name:'deep',
            type:TypeOfReport.INCOME,
            amount:12
        },
    ]
}