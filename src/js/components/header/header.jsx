import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Header = () => {
  return <Fragment>
    <header className="page-header">
      <div className="page-header__wrapper">
        <a className="page-header__logo">
          <svg className="page-header__logo-icon" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="27"/>
            <g clipPath="url(#clip0)">
              <rect width="1366" height="1812" transform="translate(-97 -26)"/>
              <rect x="-97" y="-26" width="1366" height="91"/>
              <path d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z" fill="#2C36F2"/>
              <path d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z" fill="#2C36F2"/>
              <path d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z" fill="#2C36F2"/>
              <path d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z" fill="#2C36F2"/>
              <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="#2C36F2"/>
              <path d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415" stroke="#F6F7FF"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="1366" height="1812" fill="white" transform="translate(-97 -26)"/>
              </clipPath>
            </defs>
          </svg>
          <p className="page-header__text">
            <span className="page-header__logo-text">Лига </span>
            Банк
          </p>
        </a>
        <nav className="page-header__main-nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link">
                <span className="main-nav__text">Услуги</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link">
                <span className="main-nav__text">Рассчитать кредит</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link main-nav__link--active">
                <span className="main-nav__text">Конвертер валют</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link">
                <span className="main-nav__text">Контакты</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link">
                <span className="main-nav__text">Задать вопрос</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="page-header__sign-in sign-in">
          <ul className="sign-in__list">
            <li className="sign-in__item">
              <Link to={AppRoute.ROOT} className="sign-in__link">
                <svg className="sign-in__icon">
                  <use xlinkHref="#sign-in"></use>
                </svg>
                <span className="sign-in__text">Войти в Интернет-банк</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </Fragment>;
};

export default Header;
