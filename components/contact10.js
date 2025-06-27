import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.contact10Id}
        className={`contact10-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content1 thq-flex-row">
            <div className="contact10-content2">
              <h2 className="contact10-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact10-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wx2FR0'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="contact10-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact10-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Boetmd'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact10-content3 thq-flex-row">
            <div className="contact10-container2">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="contact10-image"
              />
            </div>
            <div className="contact10-container3">
              <h3 className="contact10-text12 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact10-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7DBAry'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <h3 className="contact10-text13 thq-heading-3">
                {props.location21 ?? (
                  <Fragment>
                    <span className="contact10-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7WqDVG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <h3 className="contact10-text14 thq-heading-3">
                {props.location211 ?? (
                  <Fragment>
                    <span className="contact10-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gYtsJ1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact10-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-max-width {
            align-self: center;
          }
          .contact10-content1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .contact10-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-text10 {
            font-family: 'Arial';
          }
          .contact10-text11 {
            font-family: 'Arial';
          }
          .contact10-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact10-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image {
            width: 288px;
            height: 288px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: var(--dl-layout-radius-imageradius);
            border-top-right-radius: var(--dl-layout-radius-imageradius);
            border-bottom-left-radius: var(--dl-layout-radius-imageradius);
            border-bottom-right-radius: var(--dl-layout-radius-imageradius);
          }
          .contact10-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-text12 {
            text-align: center;
            font-family: 'Arial';
          }
          .contact10-text13 {
            text-align: center;
            font-family: 'Arial';
          }
          .contact10-text14 {
            text-align: center;
            font-family: 'Arial';
          }
          .contact10-text15 {
            display: inline-block;
          }
          .contact10-text16 {
            display: inline-block;
          }
          .contact10-text17 {
            display: inline-block;
          }
          .contact10-text18 {
            display: inline-block;
          }
          .contact10-text19 {
            display: inline-block;
          }
          .contact10root-class-name {
            background-color: var(--dl-color-theme-accent2);
          }
          @media (max-width: 991px) {
            .contact10-content1 {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact10-content3 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact10-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Contact10.defaultProps = {
  location211: undefined,
  rootClassName: '',
  imageSrc: '/chatgpt%20image%2018%20jun%202025%2C%2022_56_58-300h.png',
  imageAlt: 'image',
  heading1: undefined,
  location21: undefined,
  location2: undefined,
  contact10Id: '',
  content1: undefined,
}

Contact10.propTypes = {
  location211: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location21: PropTypes.element,
  location2: PropTypes.element,
  contact10Id: PropTypes.string,
  content1: PropTypes.element,
}

export default Contact10
