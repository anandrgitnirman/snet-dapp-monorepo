import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  dropDownBtn: {
    margin: "17px 0 22px",
    "& button": { margin: "5px 0 0 11px" },
  },
  grayBox: {
    padding: "15px 35px 30px 30px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    marginBottom: 67,
    backgroundColor: "#F6F6F6",
  },
  regionNameIdContainer: {
    display: "flex",
  },
  header: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    lineHeight: "18px",
  },
  value: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 20,
    lineHeight: "26px",
  },
  servicePriceModelContainer: {
    marginTop: 42,
    display: "flex",
    "& > div": {
      "& > div": {
        "& > div": {
          maxWidth: "93%",
          flexBasis: "93%",
        },
      },
    },
  },
  cardContainer: {
    width: "90%",
    position: "relative",
  },
  label: {
    padding: "0 5px",
    position: "absolute",
    top: -9,
    left: 10,
    background: MUITheme.palette.background.white,
    color: MUITheme.palette.text.darkGrey,
    fontSize: 12,
  },
  card: {
    width: "100%",
    minHeight: 100,
    boxShadow: "none",
    padding: 15,
    border: "1px solid #828282",
    borderRadius: 4,
  },
  extraInfo: {
    padding: "10px 0 0 14px",
    color: MUITheme.palette.text.primary,
    fontSize: 12,
    letterSpacing: 0.39,
    lineHeight: "16px",
  },
  addedEndpointsContainer: {
    marginTop: 24,
    display: "flex",
  },
  infoIconContainer: {
    "& svg": {
      padding: "5px 10px 0 0",
      fontSize: 20,
      color: "#d6d6d6",
    },
  },
  addRegionBtn: {
    margin: "63px 0 67px",
    textAlign: "center",
    "& button": { padding: "45px 100px" },
  },
  btnContainer: { textAlign: "right" },
}));
