import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
import BottomNavigator from "./common/bottomnav/bottomnav"

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";

//medicine screen
import Slot from "./medicine/slot/medicineSlot";
import List from "./medicine/list/medicineList"

// reminder screen
import Reminder from "./reminder/reminder"

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  BottomNavigator,
  Slot,
  List,
  Reminder
};