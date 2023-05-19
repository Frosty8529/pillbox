import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: SIZES.medium,
    gap: SIZES.medium
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
    fontSize: SIZES.large,
    color: COLORS.text,
    fontFamily: FONT.medium
  },
  inputLabel: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    fontFamily: FONT.medium
  },
  captionHint: {
    fontFamily: FONT.regular,
    color: COLORS.textHint,
    fontSize: SIZES.medium
  },
  captionAccent: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  medicineList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 20,
    backgroundColor: COLORS.opaprimary,
    borderRadius: 12,
    marginBottom: 12,
    height: 80
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8
  },
  captionLabel: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
    flex: 1
  },
  details: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4, 
    flex: 1
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1
  },
  searchContainer: {   
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    borderColor: COLORS.outline,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    height: "100%"
  },
  searchInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.sm,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4
  },
  stepperLeft: {
    borderRightColor: COLORS.outline,
    borderRightWidth: 1
  },
  stepperRight: {
    borderLeftColor: COLORS.outline,
    borderLeftWidth: 1
  },
  stepperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    borderColor: COLORS.outline,
    borderWidth: 1,
    backgroundColor: COLORS.white
  },
  stepperWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  stepperInput: {
    display: 'flex',
    fontFamily: FONT.regular,
    fontSize: SIZES.sm,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    borderColor: COLORS.outline
  },
  spinner: {
    width: "100%"
	},
  icon: {
    width: 24,
    height: 24
  },
  iconWrapper: {
    display: 'flex',
    flexDirection:'row',
    flex: 1,
    gap: 16
  }
});

export default styles;
