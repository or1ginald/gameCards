import { ThunkDispatch } from 'redux-thunk';

import { setAppStatusAC, SetAppStatusActionType } from './appInitialized';
import { setErrorMessageNetworkAC } from './errorReducer';
import { logOutUserProfileType, setUserProfile, setUserProfileType } from './profile';

import { authAPI, LoginParamsType } from 'api/loginApi';
import { requestStatus } from 'enum';
import { RootStoreType } from 'store';
import { Nullable } from 'types';

export type InitialStateDataType = {
  isAuth: boolean;
  error?: Nullable<string>;
};

export const initialState: InitialStateDataType = {
  isAuth: false,
  error: null,
};

export const loginReducer = (
  state: InitialStateDataType = initialState,
  action: ActionTypesLogin,
): InitialStateDataType => {
  switch (action.type) {
    case 'LOGIN/SET_AUTH_LOGIN_DATA':
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case 'LOGIN/SET_ERROR_MESSAGE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const setAuthLoginDataAC = (isAuth: boolean) =>
  ({ type: 'LOGIN/SET_AUTH_LOGIN_DATA', isAuth } as const);

export const setErrorMessageAC = (error: Nullable<string>) =>
  ({ type: 'LOGIN/SET_ERROR_MESSAGE', error } as const);

export const logInTC =
  (data: LoginParamsType) =>
  (
    dispatch: ThunkDispatch<
      RootStoreType,
      undefined,
      ActionTypesLogin | ReturnType<typeof setErrorMessageNetworkAC>
    >,
  ) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI
      .login(data)
      .then(res => {
        dispatch(setAuthLoginDataAC(true));
        dispatch(setUserProfile(res.data));
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

export const logOutTC =
  () => (dispatch: ThunkDispatch<RootStoreType, undefined, ActionTypesLogin>) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    authAPI.logOut().then(() => {
      dispatch(setAuthLoginDataAC(false));
      dispatch(setUserProfile(null));
      dispatch(setErrorMessageAC(''));
      dispatch(setAppStatusAC(requestStatus.idle));
    });
  };

// type;
export type setLoginData = ReturnType<typeof setAuthLoginDataAC>;
type setErrorMessageLogin = ReturnType<typeof setErrorMessageAC>;
export type ActionTypesLogin =
  | setLoginData
  | setErrorMessageLogin
  | SetAppStatusActionType
  | logOutUserProfileType
  | setUserProfileType;
