import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Footer = () => {
  return <Fragment>
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <div className="page-footer__address">
          <a className="page-footer__logo">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p className="page-footer__text"><span className="page-footer__logo-text">Лига</span> банк</p>
          </a>
          <p className="page-footer__address-info">
            150015, г. Москва, ул. Московская, д. 32
            Генеральная лицензия Банка России №1050
            Ⓒ Лига Банк, 2019
          </p>
        </div>

        <nav className="page-footer__nav navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to={AppRoute.ROOT} className="navigation__link">
                <span className="navigation__text">Услуги</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link to={AppRoute.ROOT} className="navigation__link">
                <span className="navigation__text">Рассчитать кредит</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link to={AppRoute.ROOT} className="navigation__link">
                <span className="navigation__text">Контакты</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link to={AppRoute.ROOT} className="navigation__link">
                <span className="navigation__text">Задать вопрос</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="page-footer__contacts contacts">
          <ul className="contacts__list">
            <li className="contacts__item">
              <svg className="contacts__icon contacts__icon--mobile">
                <use xlinkHref="#phone-mobile"></use>
              </svg>
              <a className="contacts__mobile-phone" href="tel:*0904">*0904</a>
              <p className="contacts__text contacts__text--mobile">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </li>
            <li className="contacts__item">
              <svg className="contacts__icon contacts__icon--phone">
                <use xlinkHref="#phone"></use>
              </svg>
              <a className="contacts__mobile-phone" href="tel:+88001112233">8 800 111 22 33</a>
              <p className="contacts__text contacts__text--phone">Бесплатный для всех городов России</p>
            </li>
          </ul>
        </div>
        <div className="page-footer__social social">
          <ul className="social__list">
            <li className="social__item">
              <a href="http://www.facebook.com" className="social__link">
                <svg className="social__icon social__icon--facebook">
                  <use xlinkHref="#facebook-icon"></use>
                </svg>
                <span className="visually-hidden">facebook</span>
              </a>
            </li>
            <li className="social__item">
              <a href="http://www.instagram.com" className="social__link">
                <svg className="social__icon social__icon--instagram">
                  <use xlinkHref="#instagram-icon"></use>
                </svg>
                <span className="visually-hidden">instagram</span>
              </a>
            </li>
            <li className="social__item">
              <a href="http://www.twitter.com" className="social__link">
                <svg className="social__icon social__icon--twitter">
                  <use xlinkHref="#twitter-icon"></use>
                </svg>
                <span className="visually-hidden">twitter</span>
              </a>
            </li>
            <li className="social__item">
              <a href="http://www.youtube.com" className="social__link">
                <svg className="social__icon social__icon--youtube">
                  <use xlinkHref="#youtube-icon"></use>
                </svg>
                <span className="visually-hidden">youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </Fragment>;
};

export default Footer;
