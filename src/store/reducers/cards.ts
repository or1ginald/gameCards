import { AxiosError } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

import { AddCardType, cardsAPI, cardType } from '../../api/cardsApi';
import { requestStatus } from '../../enum';
import { RootStoreType } from '../store';

import { setAppStatusAC } from './appInitialized';
import { setErrorMessageNetworkAC, SetErrorMessageNetworkType } from './errorReducer';

type initStateType = {
  cards: cardType[];
  answer: string;
  question: string;
  cardsTotalCount: number;
  grade: number;
  shots: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
const initialState: initStateType = {
  cards: [],
  answer: '',
  question: '',
  cardsTotalCount: 5,
  grade: 5,
  shots: 1,
  maxGrade: 5,
  minGrade: 3,
  page: 1,
  pageCount: 4,
  packUserId: '',
};
export const cardReducer = (
  state: initStateType = initialState,
  action: ActionTypesCards,
): initStateType => {
  switch (action.type) {
    case 'CARDS/SET_DATA_CARDS':
      return { ...state, ...action.cards };
    case 'CARDS/REMOVE_CARD':
      return { ...state, cards: state.cards.filter(c => c._id !== action._id) };
    case 'CARDS/ADD_CARD':
      return { ...state, cards: [action.card, ...state.cards] };
    case 'CARDS/UPDATE_CARD':
      return {
        ...state,
        cards: state.cards.map(c =>
          c._id === action.dataUpdate._id
            ? {
                ...c,
                question: action.dataUpdate.question,
                answer: action.dataUpdate.answer,
              }
            : c,
        ),
      };
    default:
      return state;
  }
};

export const setCardsAC = (cardsPackId: string, cards: cardType[]) =>
  ({ type: 'CARDS/SET_DATA_CARDS', cardsPackId, cards } as const);

export const removeCardAC = (_id: string) =>
  ({ type: 'CARDS/REMOVE_CARD', _id } as const);

export const addCardAC = (card: cardType) => ({ type: 'CARDS/ADD_CARD', card } as const);

export const updateCardAC = (_id: string, answer: string, question: string) =>
  ({
    type: 'CARDS/UPDATE_CARD',
    dataUpdate: {
      _id,
      answer,
      question,
    },
  } as const);

export const getCardsTC =
  (cardsPackId: string) =>
  (
    dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesCards>,
    getState: () => RootStoreType,
  ) => {
    const { answer, question } = getState().cards;
    dispatch(setAppStatusAC(requestStatus.loading));
    cardsAPI
      .getCards(cardsPackId, answer, question)
      .then(res => {
        dispatch(setCardsAC(cardsPackId, res.data.data.cards));
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch(e => {
        dispatch(setAppStatusAC(requestStatus.succeeded));
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessageNetworkAC(errorNetwork));
        const timeOut = 2000;
        setTimeout(() => {
          dispatch(setErrorMessageNetworkAC(''));
        }, timeOut);
      })
      .finally(() => {
        dispatch(setAppStatusAC(requestStatus.idle));
      });
  };
export const removeCardTC =
  (_id: string) =>
  (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesCards>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    cardsAPI
      .deleteCard(_id)
      .then(() => {
        dispatch(removeCardAC(_id));
        dispatch(setAppStatusAC(requestStatus.succeeded));
      })
      .catch((e: AxiosError) => {
        dispatch(setAppStatusAC(requestStatus.succeeded));
        const errorNetwork = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setErrorMessageNetworkAC(errorNetwork));
      });
  };

export const addCardTC =
  (payload: AddCardType) =>
  (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesCards>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    cardsAPI.addNewCard(payload).then(res => {
      const newCard = res.data.cards;
      dispatch(addCardAC(newCard));
      dispatch(setAppStatusAC(requestStatus.succeeded));
    });
  };

export const updateCardTC =
  (dataUpdate: cardType) =>
  (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesCards>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    cardsAPI.updateCard(dataUpdate).then(res => {
      const { _id, question, answer } = res.data.cards;
      dispatch(updateCardAC(_id, question, answer));
      dispatch(setAppStatusAC(requestStatus.succeeded));
    });
  };

// types
export type getCardsType = ReturnType<typeof setCardsAC>;
export type removeCardType = ReturnType<typeof removeCardAC>;
export type addCardType = ReturnType<typeof addCardAC>;
export type updateCardType = ReturnType<typeof updateCardAC>;

export type ActionTypesCards =
  | getCardsType
  | removeCardType
  | SetErrorMessageNetworkType
  | addCardType
  | updateCardType
  | ReturnType<typeof setAppStatusAC>;
