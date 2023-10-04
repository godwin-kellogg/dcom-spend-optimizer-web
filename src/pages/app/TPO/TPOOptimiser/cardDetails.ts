export const cardDetails = [
  {
    month: "January",
    chipName: "actualized",
    styles: {
     color: "rgba(75, 85, 99, 1)",
     fontWeight:600
    },
    budget: "5.75 Lacs",
    skus: "11 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: false },
      { name: "Chocos", value: false },
    ],
    isData: true,
  },
  {
    month: "February",
    chipName: "optimized",
    styles: {
      color: "rgba(220, 38, 38, 1)",
      backgroundColor :"rgba(254, 202, 202, 1)",
      fontWeight:600
     },
    budget: "6.2 Lacs",
    skus: "13 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: true },
      { name: "Chocos", value: false },
    ],
    isData: true,
  },
  {
    month: "March",
    chipName: "progressing",
    styles: {
      color: "rgba(21, 128, 61, 1)",
      backgroundColor :"rgba(134, 239, 172, 1)",
      fontWeight:600
     },
    budget: "6 Lacs",
    skus: "12 SKU's",
    categories: [
      { name: "Muesli", value: false },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: false },
      { name: "Chocos", value: true },
    ],
    isData: true,
  },
  {
    month: "April",
    chipName: "growing",
    color: "rgba(30, 180, 140, 1)",
    budget: "6.5 Lacs",
    skus: "14 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: false },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: true },
      { name: "Chocos", value: true },
    ],
    isData: true,
  },
  {
    month: "May",
    chipName: "expanding",
    color: "rgba(255, 99, 132, 1)",
    budget: "7 Lacs",
    skus: "15 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: false },
      { name: "Granola", value: false },
      { name: "Chocos", value: true },
    ],
    isData: true,
  },
  {
    month: "June",
    chipName: "innovating",
    color: "rgba(60, 179, 113, 1)",
    budget: "6.8 Lacs",
    skus: "13 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: false },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: true },
      { name: "Chocos", value: true },
    ],
    isData: true,
  },
  {
    month: "July",
    chipName: "revamping",
    color: "rgba(70, 130, 180, 1)",
    budget: "6.3 Lacs",
    skus: "12 SKU's",
    categories: [
      { name: "Muesli", value: false },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: false },
      { name: "Granola", value: false },
      { name: "Chocos", value: true },
    ],
    isData: true,
  },
  {
    month: "August",
    chipName: "transforming",
    color: "rgba(218, 112, 214, 1)",
    budget: "6.5 Lacs",
    skus: "14 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: true },
      { name: "Chocos", value: false },
    ],
    isData: true,
  },
  {
    month: "September",
    chipName: "restructuring",
    color: "rgba(255, 140, 0, 1)",
    budget: "6.1 Lacs",
    skus: "13 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: false },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: false },
      { name: "Chocos", value: true },
    ],
    isData: true,
  },
  {
    month: "October",
    chipName: "optimizing",
    color: "rgba(85, 107, 47, 1)",
    budget: "6.4 Lacs",
    skus: "12 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: false },
      { name: "Granola", value: true },
      { name: "Chocos", value: false },
    ],
    isData: true,
  },
  {
    month: "November",
    chipName: "achieving",
    color: "rgba(128, 0, 0, 1)",
    budget: "6.7 Lacs",
    skus: "15 SKU's",
    categories: [
      { name: "Muesli", value: true },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: false },
      { name: "Chocos", value: true },
    ],
    isData: false,
  },
  {
    month: "December",
    chipName: "completed",
    color: "rgba(30, 130, 100, 1)",
    budget: "5.5 Lacs",
    skus: "12 SKU's",
    categories: [
      { name: "Muesli", value: false },
      { name: "Oats", value: true },
      { name: "Cornflakes", value: true },
      { name: "Granola", value: false },
      { name: "Chocos", value: true },
    ],
    isData: false,
  },
];




export const dropDown = {
  name : "Fiscal Year",
  initalVal : new Date().getFullYear(),
  menuItem : [2021, 2022, 2023,2024, 2025]
};


export const TopCardData:any = [
  {
    title : "Promos/Plans",
    running : 16,
    total : 40,
    values : [0, 10, 20, 30, 40]
  },
  {
    title : "Spend/Budget",
    running: 52,
    total :  "80 Lacs",
    values : ["₹0L", "₹20L", "₹40L", "₹60L", "₹80L"]
  }
]