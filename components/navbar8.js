import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar8 = (props) => {
  const translate = useTranslations()
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <>
      <header className="navbar8-container1">
        <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
            <nav className="navbar8-links1">
              <a href="https://kegtracker.io/" className="navbar8-link10">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="navbar8-image"
                />
              </a>
              <a
                href={props.link1Url}
                className="navbar8-link11 thq-link thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_mt4ENG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ESd9Gn'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url1} className="thq-link thq-body-small">
                {props.link21 ?? (
                  <Fragment>
                    <span className="navbar8-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_yBtNQH'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </nav>
            <div className="navbar8-buttons1">
              <a
                href={props.textUrl1}
                className="navbar8-action11 thq-button-filled thq-button-animated"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="navbar8-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_xhQ00s'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
             <a
              href={props.textUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="navbar8-action21 thq-button-outline thq-button-animated"
            >
              {props.text ?? (
                <Fragment>
                  <span className="navbar8-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_li7iod'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar8-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
            <div className="navbar8-nav">
              <div className="navbar8-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar8-logo"
                />
                <div data-thq="thq-close-menu" className="navbar8-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar8-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar8-links2">
                <a href="#features" className="navbar8-link14 thq-link thq-body-small">Features</a>
                <a href="#documentation" className="thq-link thq-body-small">Documentation</a>
                <a href="#contact" className="navbar8-link3 thq-link thq-body-small">Contact Us</a>
              </nav>
              <div className="navbar8-buttons2">
                <a
                  href={props.textUrl1}
                  className="navbar8-action11 thq-button-filled thq-button-animated"
                >
                  {props.text1 ?? (
                    <Fragment>
                      <span className="navbar8-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2xP3a4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a
                  href={props.textUrl}
                  className="navbar8-action21 thq-button-outline thq-button-animated"
                >
                  {props.text ?? (
                    <Fragment>
                      <span className="navbar8-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_LoxFG2'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="navbar8-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          {link5DropdownVisible === true && (
            <div className="navbar8-container5 thq-box-shadow">
              <div className="navbar8-link5-menu-list">
                <a href={props.linkUrlPage1}>
                  <div className="navbar8-menu-item5">
                    <img
                      alt={props.page1ImageAlt}
                      src={props.page1ImageSrc}
                      className="navbar8-page1-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content5">
                      <span className="navbar8-page12 thq-body-large">
                        {props.page1 ?? (
                          <Fragment>
                            <span className="navbar8-text12">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ieZJHp'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page1Description ?? (
                          <Fragment>
                            <span className="navbar8-text16">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_c72Qd_'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage2}>
                  <div className="navbar8-menu-item6">
                    <img
                      alt={props.page2ImageAlt}
                      src={props.page2ImageSrc}
                      className="navbar8-page2-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content6">
                      <span className="navbar8-page22 thq-body-large">
                        {props.page2 ?? (
                          <Fragment>
                            <span className="navbar8-text25">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_adEUV_'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page2Description ?? (
                          <Fragment>
                            <span className="navbar8-text24">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_SaswWh'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage3}>
                  <div className="navbar8-menu-item7">
                    <img
                      alt={props.page3ImageAlt}
                      src={props.page3ImageSrc}
                      className="navbar8-page3-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content7">
                      <span className="navbar8-page32 thq-body-large">
                        {props.page3 ?? (
                          <Fragment>
                            <span className="navbar8-text28">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_T0XjbH'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page3Description ?? (
                          <Fragment>
                            <span className="navbar8-text27">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_4VYpmG'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage4}>
                  <div className="navbar8-menu-item8">
                    <img
                      alt={props.page4ImageAlt}
                      src={props.page4ImageSrc}
                      className="navbar8-page4-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content8">
                      <span className="navbar8-page42 thq-body-large">
                        {props.page4 ?? (
                          <Fragment>
                            <span className="navbar8-text15">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_z1rh4a'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page4Description ?? (
                          <Fragment>
                            <span className="navbar8-text18">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_z6xf3Q'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </header>
        {link5DropdownVisible === true && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="navbar8-container6"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .navbar8-container1 {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar8-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .navbar8-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar8-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar8-link10 {
            display: contents;
          }
          .navbar8-image {
            width: 200px;
            display: block;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius4);
            text-decoration: none;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-inputradius);
            border-bottom-left-radius: var(--dl-layout-radius-inputradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .navbar8-link11 {
            text-decoration: none;
          }
          .navbar8-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar8-action11 {
            display: flex;
            flex-direction: row;
          }
          .navbar8-action21 {
            display: flex;
            flex-direction: row;
          }
          .navbar8-burger-menu {
            display: none;
          }
          .navbar8-icon10 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar8-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar8-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar8-logo {
            height: 3rem;
          }
          .navbar8-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar8-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar8-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navbar8-link14 {
            text-decoration: none;
          }
          .navbar8-link3 {
            text-decoration: none;
          }
          .navbar8-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar8-icon-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-icon14 {
            width: 24px;
            height: 24px;
          }
          .navbar8-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-icon16 {
            width: 24px;
            height: 24px;
          }
          .navbar8-container4 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-halfunit);
            grid-template-columns: 1fr;
          }
          .navbar8-menu-item1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page1-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar8-content1 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-page11 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-menu-item2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page2-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar8-content2 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-page21 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-menu-item3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page3-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar8-content3 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-page31 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-menu-item4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page4-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar8-content4 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-page41 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .navbar8-icon-group {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          .navbar8-container5 {
            top: 100%;
            left: 0px;
            width: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            animation-name: fadeInDownBig;
            animation-delay: 0s;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar8-link5-menu-list {
            width: 100%;
            display: grid;
            padding: var(--dl-layout-space-oneandhalfunits);
            grid-gap: var(--dl-layout-space-halfunit);
            max-width: var(--dl-layout-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .navbar8-menu-item5 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page1-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content5 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-page12 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-menu-item6 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page2-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content6 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-page22 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-menu-item7 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page3-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content7 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-page32 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-menu-item8 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page4-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content8 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-page42 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-container6 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-text12 {
            display: inline-block;
          }
          .navbar8-text13 {
            display: inline-block;
          }
          .navbar8-text14 {
            display: inline-block;
          }
          .navbar8-text15 {
            display: inline-block;
          }
          .navbar8-text16 {
            display: inline-block;
          }
          .navbar8-text17 {
            display: inline-block;
          }
          .navbar8-text18 {
            display: inline-block;
          }
          .navbar8-text19 {
            display: inline-block;
          }
          .navbar8-text20 {
            display: inline-block;
          }
          .navbar8-text21 {
            display: inline-block;
          }
          .navbar8-text22 {
            display: inline-block;
          }
          .navbar8-text23 {
            display: inline-block;
          }
          .navbar8-text24 {
            display: inline-block;
          }
          .navbar8-text25 {
            display: inline-block;
          }
          .navbar8-text26 {
            display: inline-block;
          }
          .navbar8-text27 {
            display: inline-block;
          }
          .navbar8-text28 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .navbar8-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar8-desktop-menu {
              display: none;
            }
            .navbar8-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar8-mobile-menu {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .navbar8-container4 {
              grid-gap: 0;
            }
            .navbar8-link5-menu-list {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar8-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar8-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar8.defaultProps = {
  page1: undefined,
  link1: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  text: undefined,
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  page4: undefined,
  page4ImageAlt: 'Coming Soon Image',
  page1Description: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  link4: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  page4Description: undefined,
  link1Url: 'https://www.teleporthq.io',
  link2: undefined,
  action2: undefined,
  imageAlt: 'image',
  link3Url: 'https://www.teleporthq.io',
  link3: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  text1: undefined,
  link21: undefined,
  link2Url: 'https://www.teleporthq.io',
  page2Description: undefined,
  page2: undefined,
  imageSrc: '/normal%20barra-200h.png',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  textUrl: 'https://example.com',
  linkUrlPage1: 'https://www.teleporthq.io',
  page3ImageAlt: 'Pricing Image',
  action1: undefined,
  textUrl1: 'https://example.com',
  logoAlt: 'KegTracker Logo',
  page3Description: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  page1ImageAlt: 'Home Image',
  link2Url1: 'https://www.teleporthq.io',
  page2ImageAlt: 'Features Image',
  page3: undefined,
}

Navbar8.propTypes = {
  page1: PropTypes.element,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  text: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  page4: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  page1Description: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  link4: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  page4Description: PropTypes.element,
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  action2: PropTypes.element,
  imageAlt: PropTypes.string,
  link3Url: PropTypes.string,
  link3: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  text1: PropTypes.element,
  link21: PropTypes.element,
  link2Url: PropTypes.string,
  page2Description: PropTypes.element,
  page2: PropTypes.element,
  imageSrc: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  textUrl: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  action1: PropTypes.element,
  textUrl1: PropTypes.string,
  logoAlt: PropTypes.string,
  page3Description: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link2Url1: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page3: PropTypes.element,
}

export default Navbar8
