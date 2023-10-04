function createData(
    // checkbox,
    sku:string,
    rpi:number,
    roi:any,
    sales:number,
    gp:number,
    discount:string,
    optimalPrice:string,
    optimalSpend:number
  ): any[]{
    return [
      // checkbox,
      sku,
      rpi,
      roi,
      sales,
      gp,
      discount,
      optimalPrice,
      optimalSpend
    ];
  }
  
 export const rows = [
    createData('Muesli 750g(FN60)', 1.1, 3.7, 115500, 48510,"6.75%", "₹ 447", 55000),
    createData('Muesli 500g(AR34)', 1.2, 3.7, 115500, 48510,"6.75%", "₹ 447", 55000),
    createData('Muesli 500g(FN34)', 1.1, 3.7, 115500, 48510,"6.75%", "₹ 447", 55000),
    createData('Muesli 500g(NS34)', 1.5, 3.7, 115500, 48510,"6.75%", "₹ 447", 55000),
    createData('Muesli 500g(AP34)', 1.12, 3.7, 115500, 48510,"6.75%", "₹ 447", 55000),
    createData('Muesli 250g(FN14)', 1.5, 3.7, 115500, 48510,"6.75%", "₹ 447", 55000),
  ];
  

  export const TableHeadData = [
    {
      name: "SKU",
      width: "20%"
    },
    {
      name: "RPI",
      width: "10%"
    },
    {
      name: "ROI",
      width: "10%"
    },
    {
      name: "Sales",
      width: "10%"
    },
    {
      name: "Gross Profit",
      width: "10%"
    },
    {
      name: "Discount",
      width: "10%"
    },
    {
      name: "Optimal Price",
      width: "10%"
    },
    {
      name: "Optimal Spend",
      width: "10%"
    }
  ];


  export const TableFooterData = [
    '-', '-', '-', '-', '-', '-', '250000'
  ];


  export const Category = {
    name : "Category",
    initialval : "Muesli",
    menuItems : ["Muesli", "Oats", "Chocos", "CornFlakes", "Granola"]
  }
  export const Budget = {
    name : "Budget",
    initialval : "2.5 Lac(s)",
    menuItems : [
      "2.5 Lac(s)",
      "2.12 Lac(s)",
      "3.5 Lac(s)",
      "5.5 Lac(s)",
      "2.9 Lac(s)",
    ]
  }
  