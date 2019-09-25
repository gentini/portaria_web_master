import { combineReducers } from 'redux';

import log from './log/reducer';
import tech from './tech/reducer';
import dweller from './dweller/reducer';
import peopletype from './peopletype/reducer';
import people from './people/reducer';
import peoplecontrol from './peoplecontrol/reducer';

export default combineReducers({
  log,
  tech,
  dweller,
  peopletype,
  people,
  peoplecontrol,
});
