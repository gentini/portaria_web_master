import { all } from 'redux-saga/effects';

import log from './log/sagas';
import tech from './tech/sagas';
import dweller from './dweller/sagas';
import peopletype from './peopletype/sagas';
import people from './people/sagas';
import peoplecontrol from './peoplecontrol/sagas';

export default function* rootSaga() {
  return yield all([log, tech, dweller, peopletype, people, peoplecontrol]);
}
