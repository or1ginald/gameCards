import React from 'react';

import { Link } from 'react-router-dom';

import errorSign from '../../assets/error.png';
import letter from '../../assets/letter.png';

import style from './ConfirmPassword.module.css';

export const Popup = (): any => (
  <div>
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.closeBtn}>
          <span className={style.spanClose}>it-incubator</span>
        </div>
        <img className={style.letterImg} src={letter} alt="letter" />
        <span>Check Email</span>
        <p>We have sent the Email with instructions to your email </p>
      </div>
    </div>
  </div>
);

export const PopupError = ({ error, setError }: any): any => (
  <div>
    <div className={style.mainContainer}>
      <div className={style.content}>
        <span className={style.spanClose}>it-incubator</span>

        <img className={style.errorImg} src={errorSign} alt="error" />
        <span>Try again</span>
        <span>Something goes wrong</span>
        <Link
          to="/confirmPassword"
          onClick={() => {
            setError(!error);
          }}
        >
          Create new password again
        </Link>
      </div>
    </div>
  </div>
);
