import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    display: 'flex',
    gap: 24
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
  captionHint: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.textHint,
  },
  drugContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 12,
    backgroundColor: COLORS.opaprimary,
    borderRadius: 12,
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
    fontSize: SIZES.large,
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
    gap: 12,
    width: "100%"
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: COLORS.opaprimary,
    borderRadius: 12,
    height: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 4

  }
});

export default styles;
