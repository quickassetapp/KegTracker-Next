import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar81 = (props) => {
  const translate = useTranslations()
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <>
      <header className="navbar81-container1">
        <header data-thq="thq-navbar" className="navbar81-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="navbar81-desktop-menu">
            <nav className="navbar81-links1">
              <a href="https://kegtracker.io/" className="navbar81-link10">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="navbar81-image"
                />
              </a>
              <a href="https://kegtracker.io/#Features24" className="navbar81-link11 thq-link thq-body-small">
                Features
              </a>
              <a href="/docs" className="thq-link thq-body-small">
                Documentation
              </a>
              <a href="https://kegtracker.io/#Contact10" className="thq-link thq-body-small">
                Contact Us
              </a>
            </nav>
            <div className="navbar81-buttons1">
              <button className="navbar81-action21 thq-button-outline thq-button-animated">
                <a
                  href={props.textUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.text ?? (
                    <Fragment>
                      <span className="navbar81-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_t0exDt'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar81-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar81-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar81-mobile-menu">
            <div className="navbar81-nav">
              <div className="navbar81-top">
                <a href="https://kegtracker.io/">
                  <img alt="KegTracker Logo" src="/normal barra-200h.png" className="navbar81-logo" />
                </a>
                <div data-thq="thq-close-menu" className="navbar81-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar81-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar81-links2">
                <a href="https://kegtracker.io/#Features24" className="navbar81-link13 thq-link thq-body-small">
                  Features
                </a>
                <a href="/docs" className="thq-link thq-body-small">
                  Documentation
                </a>
                <a href="https://kegtracker.io/#Contact10" className="thq-link thq-body-small">
                  Contact Us
                </a>
              </nav>
              <div className="navbar81-buttons2">
                <a href="https://kegtracker.io/#Features24">
                  <button className="thq-button-filled">Get Started</button>
                </a>
                <a href="https://app.kegtracker.io">
                  <button className="thq-button-outline">Login</button>
                </a>
              </div>
            </div>
            <div className="navbar81-icon-group">
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
            <div className="navbar81-container5 thq-box-shadow">
              <div className="navbar81-link5-menu-list">
                <a href={props.linkUrlPage1}>
                  <div className="navbar81-menu-item5">
                    <img
                      alt={props.page1ImageAlt}
                      src={props.page1ImageSrc}
                      className="navbar81-page1-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content5">
                      <span className="navbar81-page12 thq-body-large">
                        {props.page1 ?? (
                          <Fragment>
                            <span className="navbar81-text21">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_p5tOai'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page1Description ?? (
                          <Fragment>
                            <span className="navbar81-text15">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_jKdrd8'),
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
                  <div className="navbar81-menu-item6">
                    <img
                      alt={props.page2ImageAlt}
                      src={props.page2ImageSrc}
                      className="navbar81-page2-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content6">
                      <span className="navbar81-page22 thq-body-large">
                        {props.page2 ?? (
                          <Fragment>
                            <span className="navbar81-text20">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_QO6_5O'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page2Description ?? (
                          <Fragment>
                            <span className="navbar81-text12">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_vTHvQS'),
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
                  <div className="navbar81-menu-item7">
                    <img
                      alt={props.page3ImageAlt}
                      src={props.page3ImageSrc}
                      className="navbar81-page3-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content7">
                      <span className="navbar81-page32 thq-body-large">
                        {props.page3 ?? (
                          <Fragment>
                            <span className="navbar81-text22">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_9nyhmf'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page3Description ?? (
                          <Fragment>
                            <span className="navbar81-text23">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_2lg6te'),
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
                  <div className="navbar81-menu-item8">
                    <img
                      alt={props.page4ImageAlt}
                      src={props.page4ImageSrc}
                      className="navbar81-page4-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content8">
                      <span className="navbar81-page42 thq-body-large">
                        {props.page4 ?? (
                          <Fragment>
                            <span className="navbar81-text19">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_RYV6s7'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page4Description ?? (
                          <Fragment>
                            <span className="navbar81-text25">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_sl-rHK'),
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
            className="navbar81-container6"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .navbar81-container1 {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar81-navbar-interactive {
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
          .navbar81-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar81-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar81-link10 {
            display: contents;
          }
          .navbar81-image {
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
          .navbar81-link11 {
            text-decoration: none;
          }
          .navbar81-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar81-action21 {
            display: flex;
            flex-direction: row;
          }
          .navbar81-burger-menu {
            display: none;
          }
          .navbar81-icon10 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar81-mobile-menu {
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
          .navbar81-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar81-logo {
            height: 3rem;
          }
          .navbar81-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar81-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar81-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navbar81-link13 {
            text-decoration: none;
          }
          .navbar81-link3 {
            text-decoration: none;
          }
          .navbar81-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar81-icon-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar81-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar81-icon14 {
            width: 24px;
            height: 24px;
          }
          .navbar81-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar81-icon16 {
            width: 24px;
            height: 24px;
          }
          .navbar81-container4 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-halfunit);
            grid-template-columns: 1fr;
          }
          .navbar81-menu-item1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar81-page1-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar81-content1 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar81-page11 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-menu-item2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar81-page2-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar81-content2 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar81-page21 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-menu-item3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar81-page3-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar81-content3 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar81-page31 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-menu-item4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar81-page4-image1 {
            width: 50px;
            height: 50px;
          }
          .navbar81-content4 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar81-page41 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .navbar81-icon-group {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          .navbar81-container5 {
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
          .navbar81-link5-menu-list {
            width: 100%;
            display: grid;
            padding: var(--dl-layout-space-oneandhalfunits);
            grid-gap: var(--dl-layout-space-halfunit);
            max-width: var(--dl-layout-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .navbar81-menu-item5 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar81-page1-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar81-content5 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-page12 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-menu-item6 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar81-page2-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar81-content6 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-page22 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-menu-item7 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar81-page3-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar81-content7 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-page32 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-menu-item8 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar81-page4-image2 {
            width: 30px;
            height: 30px;
          }
          .navbar81-content8 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-page42 {
            font-style: normal;
            font-weight: 600;
          }
          .navbar81-container6 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar81-text12 {
            display: inline-block;
          }
          .navbar81-text13 {
            display: inline-block;
          }
          .navbar81-text14 {
            display: inline-block;
          }
          .navbar81-text15 {
            display: inline-block;
          }
          .navbar81-text16 {
            display: inline-block;
          }
          .navbar81-text17 {
            display: inline-block;
          }
          .navbar81-text18 {
            display: inline-block;
          }
          .navbar81-text19 {
            display: inline-block;
          }
          .navbar81-text20 {
            display: inline-block;
          }
          .navbar81-text21 {
            display: inline-block;
          }
          .navbar81-text22 {
            display: inline-block;
          }
          .navbar81-text23 {
            display: inline-block;
          }
          .navbar81-text24 {
            display: inline-block;
          }
          .navbar81-text25 {
            display: inline-block;
          }
          .navbar81-text26 {
            display: inline-block;
          }
          .navbar81-text27 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .navbar81-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar81-desktop-menu {
              display: none;
            }
            .navbar81-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar81-mobile-menu {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .navbar81-container4 {
              grid-gap: 0;
            }
            .navbar81-link5-menu-list {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar81-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar81-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar81.defaultProps = {
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  page2Description: undefined,
  link3Url: 'https://www.teleporthq.io',
  action1: undefined,
  action2: undefined,
  page3ImageAlt: 'Pricing Image',
  page1Description: undefined,
  page4ImageAlt: 'Coming Soon Image',
  link2Url: 'https://www.teleporthq.io',
  link2Url1: 'https://www.teleporthq.io',
  link2: undefined,
  page1ImageAlt: 'Home Image',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: undefined,
  link3: undefined,
  page4: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  page2: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  imageSrc: '/normal%20barra-200h.png',
  imageAlt: 'image',
  page1: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  page3: undefined,
  logoAlt: 'KegTracker Logo',
  page3Description: undefined,
  link21: undefined,
  link1Url: 'https://www.teleporthq.io',
  linkUrlPage3: 'https://www.teleporthq.io',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  page2ImageAlt: 'Features Image',
  page4Description: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  linkUrlPage1: 'https://www.teleporthq.io',
  text: undefined,
  link1: undefined,
  textUrl: 'https://example.com',
}

Navbar81.propTypes = {
  page2ImageSrc: PropTypes.string,
  page2Description: PropTypes.element,
  link3Url: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  page1Description: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  link2Url: PropTypes.string,
  link2Url1: PropTypes.string,
  link2: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
  link3: PropTypes.element,
  page4: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  page2: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  page1: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  page3: PropTypes.element,
  logoAlt: PropTypes.string,
  page3Description: PropTypes.element,
  link21: PropTypes.element,
  link1Url: PropTypes.string,
  linkUrlPage3: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page4Description: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  text: PropTypes.element,
  link1: PropTypes.element,
  textUrl: PropTypes.string,
}

export default Navbar81
