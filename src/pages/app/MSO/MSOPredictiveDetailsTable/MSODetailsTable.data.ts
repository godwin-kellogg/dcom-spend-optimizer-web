
const createData = (
    roas: string | number,
    sku: string | number,
    spBrand: string | number,
    spCategory: string | number,
    competitor: string | number,
    spAuto: string | number,
    sbBrand: string | number,
    sbCategory: string | number,
    sbAuto: string | number,
    sbv: string | number,
    sd: string | number,
    core: string | number,
    growth: string | number,
    adjacent: string | number,
    rowSpan?:boolean
  ): tableData => {
    return {
      roas,
      sku,
      spBrand,
      spCategory,
      competitor,
      spAuto,
      sbBrand,
      sbCategory,
      sbAuto,
      sbv,
      sd,
      core,
      growth,
      adjacent,
      rowSpan
    };
  };
  
  interface tableData {
    roas: string | number;
    sku: string | number;
    spBrand: string | number;
    spCategory: string | number;
    competitor: string | number;
    spAuto: string | number;
    sbBrand: string | number;
    sbCategory: string | number;
    sbAuto: string | number;
    sbv: string | number;
    sd: string | number;
    core: string | number;
    growth: string | number;
    adjacent: string | number;
    rowSpan?: boolean;
  }

  export const rows: tableData[] = [
    createData(2.62, "FN60", 16307.89, 29897.79, 12683.92, 13456.78, 24567.91, 8934.56, 11234.67, 29786.45, 7834.21, 16307.89, 29897.79, 12683.92, true),
    createData(3.14, "AB42", 24567.91, 8934.56, 11234.67, 29786.45, 7834.21, 16307.89, 29897.79, 12683.92, 13456.78, 24567.91, 8934.56, 11234.67, false),
    createData(1.98, "XY55", 8934.56, 11234.67, 29786.45, 7834.21, 16307.89, 29897.79, 12683.92, 13456.78, 24567.91, 8934.56, 11234.67, 29786.45, false),
    createData(4.55, "ZR73", 12683.92, 13456.78, 24567.91, 8934.56, 11234.67, 29786.45, 7834.21, 16307.89, 29897.79, 12683.92, 24567.91, 8934.56, false),
    createData(2.33, "WK28", 29786.45, 7834.21, 16307.89, 29897.79, 11234.67, 13456.78, 24567.91, 8934.56, 29786.45, 7834.21, 16307.89, 29897.79, false)

  ];

  