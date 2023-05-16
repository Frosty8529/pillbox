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
  },
  addContainer: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: SIZES.medium,
    gap: SIZES.medium,
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
  inputLabel: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    fontFamily: FONT.medium
  },
  dateLabel: (item) => ({
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: item ? COLORS.primary : COLORS.textHint
  }),
  dateContainer: (item) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
    height: 40,
    width: 60,
    borderWidth: 1,
    borderColor: (item) ? COLORS.primary : COLORS.opaprimary,
    backgroundColor: (item) ? COLORS.opaprimary : COLORS.white,
    borderRadius: SIZES.small
  }),
  spinner: {
    width: 132,
  },
  slotStepper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  stepperWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  stepperContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    gap: 4,
  },
  repeatContainer: {
    height: 44,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  medicineContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 4
  },
  slotLabel: {
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontSize: SIZES.medium
  }
});

export default styles;
