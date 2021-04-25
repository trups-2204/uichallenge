import { createSelector } from 'reselect';
import { get} from 'lodash';

export const getUiSelector = state => get(state, 'ui',null);

export const getChallenge = createSelector([getUiSelector], uiSelector =>
  get(uiSelector, 'challenge',null),
);
export const getSelectedItem = createSelector([getChallenge], challenge =>
   get(challenge, 'selectedItem',null),
);
export const getSignedOut = createSelector([getChallenge], challenge =>
  get(challenge, 'isSignedOut',null),
);
export const getListItems = createSelector([getChallenge], challenge =>
  get(challenge, 'listItems',null),
);