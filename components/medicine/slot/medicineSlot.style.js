import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  slotContainer: {
    display: "flex",
    borderRadius: SIZES.xxs,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: SIZES.xxs,
    flexDirection: "row",
    gap: 8,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.text,
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
  slotText: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    fontFamily: FONT.medium,
    height: 45
  },
  caption: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.text
  },
  slot1: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.opaprimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12
  },
  slot2: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.slot2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "column"
  },
  slot3: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.slot3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  slot4: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.slot4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  slot5: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.slot5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  icon: {
    width: 24,
    height: 24
  },
  pillCheck: {
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 4
  }
});

export default styles;
