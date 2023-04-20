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
  list: {
    gap: SIZES.medium
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
  label: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    fontFamily: FONT.medium
  },
  captionHint: {
    fontFamily: FONT.regular,
    color: COLORS.textHint,
    fontSize: SIZES.small
  },
  captionAccent: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  medicineList: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
    backgroundColor: COLORS.opaprimary,
    borderRadius: 12,
    marginBottom: 12
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8
  },
  captionLabel: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4
  },
  details: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
    width: 200
  }
});

export default styles;
