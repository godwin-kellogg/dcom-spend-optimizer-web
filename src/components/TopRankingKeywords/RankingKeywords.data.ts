export const columns = [
    { id: "Category", label: "Category", width: "17%" },
    { id: "Keywords", label: "Keywords", width: "17%" },
    {
      id: "Ranking",
      label: "Ranking",
      width: "17%",
      align: "right",
    },
    {
      id: "SOV",
      label: "SOV",
      width: "17%",
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "SOS",
      label: "SOS",
      width: "17%",
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
  ];

  export const rows = [
    createData("CornFlakes", "cornflakes", 1, "12.32%", "44.47%"),
    createData("Chocos", "chocos", 2, "24.32%", "29.47%"),
    createData("CornFlakes", "corn flakes", 3, "15.22%", "24.47%"),
    createData("Muesli", "kelloggs museli", 4, "32.32%", "34.47%"),
    createData("CornFlakes", "cornflakes", 2, "12.32%", "44.47%"),
    createData("CornFlakes", "cornflakes", 1, "12.32%", "44.47%"),
    createData("Chocos", "chocos", 2, "24.32%", "29.47%"),
    createData("CornFlakes", "corn flakes", 3, "15.22%", "24.47%"),
    createData("Muesli", "kelloggs museli", 4, "32.32%", "34.47%"),
    // createData("CornFlakes", "cornflakes", 2, "12.32%", "44.47%"),
    // createData("CornFlakes", "cornflakes", 1, "12.32%", "44.47%"),
    // createData("CornFlakes", "corn flakes", 3, "15.22%", "24.47%"),
  ];

  function createData(
    Category: string,
    Keywords: string,
    Ranking: number,
    SOV: string,
    SOS: string
  ) {
    return { Category, Keywords, Ranking, SOV, SOS };
  }
  