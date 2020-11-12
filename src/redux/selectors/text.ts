import { createSelector } from 'reselect'

import { IApplicationState } from '../reducers'

const getTextState = (state: IApplicationState) => state.TEXT

export const getText = createSelector(
  getTextState,
  (textState) => textState.text,
)
