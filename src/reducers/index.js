import { combineReducers } from "redux";
import selectedSpotReducer from "./selectedSpotReducer";
import spinnerReducer from "./spinnerReducer";
import spotsPositionReduer from "./spotsPositionReduer";
import spotsReducer from "./spotsReducer";
import viewPortReducer from "./viewPortReducer";

export default combineReducers({
  spots: spotsReducer,
  viewPort: viewPortReducer,
  selectedSpot: selectedSpotReducer,
  spotsPosition: spotsPositionReduer,
  showSpinner: spinnerReducer,
});
