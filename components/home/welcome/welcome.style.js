import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnicon: {
    width: 32,
    height: 32,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: "center",
  },    
  container: {
    width: "100%",
  },
  dateBlock: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
    height: 90,
    width: 64,
    padding: 8,
    backgroundColor: COLORS.opaprimary,
    borderRadius: 24
  },
  dateBlockAccent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
    height: 90,
    width: 64,
    padding: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 24
  },
  dateContainer: {
    width: "100%",
    marginTop: SIZES.small,
  },
  header: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.text
  },
  headericon: {
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    padding: 0,
  },
  h3: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.text
  },
  h3Accent: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.textAccent
  },
  label: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.text
  },
  labelAccent: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.textAccent
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
