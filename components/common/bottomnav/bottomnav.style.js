import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    // width: 40,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  icon: {
    width: 24,
    height: 24,
  },
  caption: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.textHint
  },
  captionAccent: {
    fontFamily: FONT.medium ,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  container: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: SIZES.large,
    paddingBottom: SIZES.large,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 80
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
