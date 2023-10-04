export const styles = {
  container: { height: "auto", boxShadow: "none", borderRadius: "0.75rem" },
  title: {
    backgroundColor: "rgba(225, 230, 239, 1)",
    textAlign: "left",
    padding : 1,
    paddingLeft : 2
    // height: "3.5rem",
  },
  titleText: {
    fontWeight: 700,
    color: "rgba(32, 32, 32, 1)",
    fontSize: "1.4rem",
    mr: 2,
    cursor:"pointer"
  },
  upperContent: {
    border: 1,
    borderColor: "rgba(225, 230, 239, 1)",
    height: "5rem",
    padding : 1,
  },
  downContent: {
    border: 1,
    borderStyle: "none solid solid solid",
    borderColor: "rgba(225, 230, 239, 1)",
    height: "5rem",
    padding : 1
  },
  icon: { 
    color: "rgba(75, 85, 99, 1)", 
    fontSize: "1.2rem",
    "&:hover": { color: "rgba(43, 82, 221, 1)" }
  },
  iconDelete : {
    color: "rgba(75, 85, 99, 1)", 
    fontSize: "1.2rem",
    "&:hover": { color: "rgba(248, 113, 113, 1)" }
  },
  iconMargin: { marginLeft : 4 },
  textHeader: {
    color: "rgba(32, 32, 32, 0.5)",
    fontWeight: 400,
    fontSize: "1rem",
    marginLeft : 2
  },
  textData: {
    color: "rgba(32, 32, 32, 1)",
    fontWeight: 400,
    fontSize: "1rem",
    ml: 7.5,
  },
  tooltipDelete : {
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(248, 113, 113, 1)",
    fontSize: "0.75019rem"
  },
  tooltipOther : {
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(43, 82, 221, 1)",
    fontSize: "0.75019rem"
  },
  tooltipArrowDelete : {
    color: "rgba(248, 113, 113, 1)",
  },
  tooltipArrow : {
    color: "rgba(43, 82, 221, 1)",
  },
  iconColor : {
    color: "rgba(75, 85, 99, 1)", 
    fontSize: "1.2rem",
    marginLeft : 1
  }
};
