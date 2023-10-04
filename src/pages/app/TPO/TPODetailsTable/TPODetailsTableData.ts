export const TableData =[];
export const TableHeadData = [
    { name: "SKUs", width: "25%%", align : "" },
    { name: "RPI", width: "9%", align : "center" },
    { name: "ROI", width: "9%", align : "center" },
    { name: "Sales", width: "12%", align : "center" },
    { name: "Gross Profit", width: "12%", align : "center" },
    { name: "Discount", width: "9%", align : "center" },
    { name: "Optimal Price", width: "12%", align : "center" },
    { name: "Optimal Spend", width: "12%", align : "center" }
];



function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    discount: number,
    optimalPrice: number,
    optimalSpend: number,
    scenarioName:string,
    date:string
  ):any {
    return {
      tableBody : [
        name,
        calories,
        fat,
        carbs,
        protein,
        discount,
        optimalPrice,
        optimalSpend,
        
    ],
      scenarioName,
      date,
     
    }
  }
  
 export const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 50, 60, 70, "Scenario 1 (Sales)", "2023/04/23 11:42:35",),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 50, 70, 3, "Scenario 2 (Gross Profit)", '2023/04/24 09:15:22'),
    createData("Eclair", 262, 16.0, 24, 6.0, 9.0, 37, 4.3,"Scenario 3 (Gross Profit)","2023/04/25 15:30:18"),
    createData("Cupcake", 305, 3.7, 67, 4.3, 9.0, 37, 4.3,  "Scenario 4 (Sales)","2023/04/26 08:55:42"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 9.0, 37, 4.3, "Scenario 5 (Gross Profit)","2023/04/27 17:20:57"),
  ];