import { handleActions } from 'redux-actions'

export interface ITextReducer {
  text: string
}

interface IActions {
  payload: string
}

const defaultState: ITextReducer = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum sem.',
}

export const textReducer = handleActions<ITextReducer, string>(
  {
    'TEXT/SET_TEXT': (state: ITextReducer, action: IActions) => ({
      ...state,
      text: action.payload,
    }),
  },
  defaultState,
)
