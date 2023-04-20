import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
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
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.text
  },
  reminderList: {
    backgroundColor: COLORS.opaprimary,
    borderRadius: 8,
    flexDirection: "row",
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center"
  },
  details: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "85%"
  },
  time: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
    color: COLORS.text
  },
  caption: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.text
  },
  captionDetails: {
    flexDirection: "row"
  },
  days: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4
  }
});

export default styles;
