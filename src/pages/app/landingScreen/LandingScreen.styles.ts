export const styles = {
  image: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
  },
  watermark: {
    width: "90%",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    zIndex: -1,
  },
  container: {
    border: 1,
    backgroundColor: "white",
    width: "40%",
    height: "auto",
    borderRadius: "0.875rem",
    padding: "2rem",
  },
  text: {
    color: "rgba(43, 82, 221, 1)",
    fontSize: "2rem",
    fontWeight: 600,
    fontFamily : "Montserrat"
  },
  subText:{
    fontWeight : 500,
    fontSize :"1rem",
    color:"rgba(32, 32, 32, 0.5)"
  },
  button: {
    color: "rgba(43, 82, 221, 1)",
    border: "1px solid rgba(43, 82, 221, 1)",
    fontSize: "0.875rem",
    fontWeight: 700,
    marginBottom: 2,
  },
  card: {
    padding: 2,
    boxShadow: "none",
    borderRadius: "0.875rem",
  },
  cardAction: { marginTop: 4, padding: 0 },
  cardContent: { padding: 0 },
};
