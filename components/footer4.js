import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-links">
              <Link href="/">
                <a className="footer4-link1 thq-body-small">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer4-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PUIWw7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/docs">
                <a className="footer4-link2 thq-body-small">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="footer4-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_O4qJka'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
                <a href="https://kegtracker.io/#Contact10" className="footer4-link3">
                {props.text ?? (
                  <Fragment>
                    <span className="footer4-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_SYTw25'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1mf1JV'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="footer4-footer-links"></div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-link1 {
            text-decoration: none;
          }
          .footer4-link2 {
            text-decoration: none;
          }
          .footer4-link3 {
            text-align: center;
            line-height: 1.5;
          }
          .footer4-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-text2 {
            display: inline-block;
          }
          .footer4-text3 {
            display: inline-block;
          }
          .footer4-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  link2: undefined,
  link1: undefined,
  textUrl: 'https://example.com',
  text: undefined,
}

Footer4.propTypes = {
  link2: PropTypes.element,
  link1: PropTypes.element,
  textUrl: PropTypes.string,
  text: PropTypes.element,
}

export default Footer4
