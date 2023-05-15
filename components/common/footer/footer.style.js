import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: SIZES.large,
    paddingBottom: SIZES.large,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    width: "100%",
    height: 80
  },
  saveBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    height: 40,
    width: '100%'
  },
  btnText: {
    fontFamily: FONT.regular,
    color: COLORS.textAccent,
    fontSize: SIZES.medium
  }
});

export default styles;
