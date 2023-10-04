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
  createData(2.62, "FN60", 16307.89, 29897.79, 12683.92, 16307.89, 29897.79, 12683.92, 16307.89, 29897.79, 12683.92, 16307.89, 29897.79, 12683.92, true),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Eclair', 262, 16.0, 24, 6.0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 0, 0, 0, 0, 0, 0, 0, 0, 0),
];
