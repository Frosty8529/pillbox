import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    gap: 8
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
  captionHint: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.textHint,
  },
  drugContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 12,
    backgroundColor: COLORS.opaprimary,
    borderRadius: 24,
    width: "100%"
  },
  drugTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 0,
    gap: 8,
  },
  header: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.text
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  label: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.text
  },
  labelBold: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.text
  },
  labelicon: {
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    padding: 0,
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: "center",
  },  
  label: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.text
  },
  scheduleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 8,
    width: "100%"
  }
});

export default styles;
