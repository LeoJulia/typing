import { Reducer, combineReducers } from 'redux'

import { ITextReducer, textReducer } from './text'

export interface IApplicationState {
  TEXT: ITextReducer
}

export const rootReducers: Reducer<IApplicationState> = combineReducers<
  IApplicationState
>({
  TEXT: textReducer,
})
