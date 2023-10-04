export const cardStyles = {
  cardHeader: {
    backgroundColor: "rgba(225, 230, 239, 1)",
    color: "rgba(33, 94, 169, 1)",
    fontSize: "1.33rem",
    fontWeight: 700,
    height : "6vh",
    cursor : "pointer"
  },
  chipTrue: {
    borderRadius: 5,
    marginRight: 10,
    color: "blue",
    backgroundColor: "rgb(222 229 255)",
    fontWeight: 400,
    fontSize: "0.875rem",
    letter: 0.4,
    marginBottom: 10,
  },
  chipFalse: {
    borderRadius: 5,
    marginRight: 10,
    color: "rgba(156, 163, 175, 1)",
    borderColor: "rgba(156, 163, 175, 1)",
    marginBottom: 10,
  },
  cardContainer: { 
    height: "24vh",
    maxHeight :"auto",
    minHeight : "auto",
    borderRadius: 0, 
    boxShadow: "none",
    border : "0.5px solid rgba(63, 68, 77, 0.35)",
    '@media (max-width: 1650px)': {
      height : "29vh"
    }
   },
  border: { 
    border: "0.5px solid rgba(225, 230, 239, 1)",
   },
  text1: {
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: "0.5px",
    color: "rgba(32, 32, 32, 0.5)",
    margin: '0px 0px 7px -12px',
    marginLeft : 0
  },
  text2: {
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "0.5px",
    color: "rgba(32, 32, 32, 0.8)",
  },
  noPlan : {
    color : "rgba(32, 32, 32, 0.5)",
    fontSize : "1rem",
    letterSpacing : "0.03125rem",
    fontWeight : 400
  }
};
