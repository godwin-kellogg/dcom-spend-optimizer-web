export const filterCategory = {
    initialVal : "All Categories",
    Category : [
        "All Categories",
        "Corn Flakes",
        "Granola",
        "Muesli",
        "Oats",
        "Chocos"
    ]
};


export const TopCategories = [
    {
        category : "Top Viewed Categories",
        data : [
        {
            name : "Apparel-Women",
            value : "14.4"
        },
        {
            name : "Mobiles",
            value : "7.7"
        }, {
            name : "Apparel-Men",
            value : "5.6"
        },
        {
            name : "Men’s Shoes",
            value : "4.8"
        },
        {
            name : "Electronics-Mobiles & Accessories",
            value : "3.4"
        },]
    },
    {
        category : "Top Purchased Categories",
        data : [
        {
            name : "Grocery-Snack Foods",
            value : "12.4"
        },
        {
            name : "Grocery-Produce",
            value : "5.7"
        }, {
            name : "Health-Household Supplies",
            value : "9.6"
        },
        {
            name : "Grocery-Coffee, Tea & Beverages",
            value : "14.5"
        },
        {
            name : "Grocery-Dairy & Chilled Food",
            value : "5.7"
        },]
    }
];

export const ProductSearch = {
    initialVal : "(FN60) Kellogg's Muesli 21% Fruit, Nut & Seeds 750g",
    menuItems : [
        "(FN14) Kellogg's Muesli 21% Fruit, Nut & Seeds 250g",
        "(NS34) Kellogg's Muesli 21% Fruit, Nut & Seeds 500g",
        "(FN60) Kellogg's Muesli 21% Fruit, Nut & Seeds 750g"
    ]
};

export const ComptitionData = [
    {
        id : 1,
        imgSrc : "../../assets/images/Comp1.png",
        textData : "Bagrry's Crunchy Muesli with 30% Fruit & Nut Cranberries 750gm Pouch |34% Fibre Rich Oats|No Sugar Infuesed Fruits|Real Fruits|Breakfast Cereal|Protein Rich|Cranberry Muesli"
    },
    {
        id : 2,
        imgSrc : "../../assets/images/Comp1.png",
        textData : "Bagrry's Crunchy Muesli with 30% Fruit & Nut Cranberries 750gm Pouch |34% Fibre Rich Oats|No Sugar Infuesed Fruits|Real Fruits|Breakfast Cereal|Protein Rich|Cranberry Muesli"
    },
    {
        id : 3,
        imgSrc : "../../assets/images/Comp1.png",
        textData : "Bagrry's Crunchy Muesli with 30% Fruit & Nut Cranberries 750gm Pouch |34% Fibre Rich Oats|No Sugar Infuesed Fruits|Real Fruits|Breakfast Cereal|Protein Rich|Cranberry Muesli"
    },
    {
        id : 4,
        imgSrc : "../../assets/images/Comp1.png",
        textData : "Bagrry's Crunchy Muesli with 30% Fruit & Nut Cranberries 750gm Pouch |34% Fibre Rich Oats|No Sugar Infuesed Fruits|Real Fruits|Breakfast Cereal|Protein Rich|Cranberry Muesli"
    },
];

export const AgeData = [
    {
      name: '18 - 24',
      yAxis : "0",
      value: 100,
    },
    {
      name: '25 - 34',
      yAxis : "10 %",
      value: 300,
    },
    {
      name: '35 - 44',
      yAxis : "20 %",
      value: 200,
    },
    {
      name: '45 - 60',
      yAxis : "30 %",
      value: 578,
    },
    {
      name: '>=60',
      yAxis : "40 %",
      value: 189,
    }
  ];


  export const GenderData = [
    { name: "Male", value: 500, color : "rgba(68, 114, 196, 1)", },
    { name: "Female", value: 250,  color : "rgba(237, 125, 49, 1)" },
  ];

  export const CategorySearchData = [
    {
        name : "Generic Keyword",
        color : "rgba(237, 125, 49, 1)",
        value : 432
    },
    {
        name : "Competitor Keyword",
        color : "rgba(42, 66, 148, 1)",
        value : 253
    },
    {
        name : "Your Brand Keyword",
        color : "rgba(96, 125, 230, 1)",
        value : 159
    }
  ];

 export const ProductRankingData = [
    { name: "" },
    { name: "Jan 23", uv: 1000 },
    { name: "Feb 23", uv: 2000 },
    { name: "Mar 23", uv: 1200 },
    { name: "April 23", uv: 1890 },
    { name: "May 23", uv: 1800 },
  ];


  function createData(
    OrganicSOV:string|number,
    AdvSOV:string|number,
    CTR:string|number,
    CPC:string|number,
    Conv:string|number,
    ACoS:string|number,
  ) {
    return  {
            OrganicSOV, AdvSOV, CTR, CPC, Conv, ACoS
    }
  }
  
 export const rowdata = [
    createData(30, 159, 6.0, 24, 4.0, 30),
    createData(80, 237, 9.0, 37, 4.3, 50),
    createData(56, 262, 16.0, 24, 6.0, 40),
    createData("Helo", 305, 3.7, 67, 4.3,70),
    createData(56, 262, 16.0, 24, 6.0, 40),
    createData("Helo", 305, 3.7, 67, 4.3,70),
  ];

interface RowsType {
    YourBrand: number[];
    Competitor: number[];
    Generic: number[];
    AllKeywords: number[];
  }
export const rows:RowsType = {
    YourBrand: [250, 400, 309, 235, 576, 546, 60, 90, 360, 730, 210, 30],
    Competitor: [20, 300, 509, 635, 176, 246, 30, 40, 560],
    Generic: [250, 400, 309, 235, 76, 246, 30, 40, 560],
    AllKeywords: [20, 300, 506, 546, 60, 90, 360, 40, 560],
}

export const TableHeadData = {
    dates : ["27 Apr", "28 Apr"],
    fieldName : ["Organic SOV", "Adv SOV", "CTR", "CPC", "Conv", "ACoS"],
    keywordSegment :["YourBrand", "Competitor", "Generic", "AllKeywords"]
};