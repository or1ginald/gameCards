import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import style from '../../style/Common.module.css';
import { ReturnComponentType } from '../../types';

import { logOutTC, RootStoreType } from 'store';

export const Profile: React.FC<ProfilePropsType> = (): ReturnComponentType => {
  // const userName = useSelector<RootStoreType, any>(state => state.login.name);
  const isAuthUser = useSelector<RootStoreType, boolean>(state => state.login.isAuth);
  const dispatch = useDispatch();
  const onClickLogOut = (): void => {
    dispatch(logOutTC());
  };
  if (!isAuthUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <h2> Profile </h2>
        {isAuthUser ? (
          <div>
            <button onClick={onClickLogOut}>LOG OUT</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export type ProfilePropsType = {};
