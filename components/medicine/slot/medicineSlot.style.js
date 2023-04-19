import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  slotContainer: {
    borderRadius: SIZES.xxs,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: SIZES.xxs,
    flexDirection: "row",
    gap: 8,
    display: "flex",
    alignItems: "flex-start"
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
    fontSize: SIZES.small,
    color: COLORS.text
  },
  slot1: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.opaprimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  slot2: {
    height: 120,
    width: 62,
    backgroundColor: COLORS.slot2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
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
  }
});

export default styles;
