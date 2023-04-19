import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
