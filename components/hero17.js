import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-max-width thq-section-padding">
          <div className="hero17-content">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Mg1JV0'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dpSbjT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <a
              className="thq-button-filled hero17-button"
              href={props.textUrl1}
            >
              {props.text1 ?? (
                <Fragment>
                  <span className="hero17-text4">
                    Start Your 7-Day Free Trial
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="hero17-container1">
          <div className="hero17-container2">
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="hero17-image1"
            />
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="hero17-image2"
            />
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="hero17-image3"
            />
          </div>
          <img
            alt={props.imageAlt7}
            src={props.imageSrc7}
            className="hero17-image4"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: 787px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero17-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero17-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: 76px;
            justify-content: center;
          }
          .hero17-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .hero17-image1 {
            width: 200px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: var(--dl-layout-radius-inputradius);
            border-top-right-radius: var(--dl-layout-radius-inputradius);
            border-bottom-left-radius: var(--dl-layout-radius-inputradius);
            border-bottom-right-radius: var(--dl-layout-radius-inputradius);
          }
          .hero17-image2 {
            width: 200px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero17-image3 {
            width: 200px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: var(--dl-layout-radius-inputradius);
            border-top-right-radius: var(--dl-layout-radius-inputradius);
            border-bottom-left-radius: var(--dl-layout-radius-inputradius);
            border-bottom-right-radius: var(--dl-layout-radius-inputradius);
          }
          .hero17-image4 {
            width: auto;
            object-fit: cover;
            border-top-left-radius: var(--dl-layout-radius-inputradius);
            border-top-right-radius: var(--dl-layout-radius-inputradius);
            border-bottom-left-radius: var(--dl-layout-radius-inputradius);
            border-bottom-right-radius: var(--dl-layout-radius-inputradius);
          }
          .hero17-text3 {
            display: inline-block;
          }
          .hero17-text4 {
            display: inline-block;
          }
          .hero17-text5 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero17-container2 {
              flex-direction: column;
              align-items: center;
              gap: var(--dl-space-space-unit);
            }
            .hero17-image1,
            .hero17-image2,
            .hero17-image3,
            .hero17-image4 {
              width: 100%;
              max-width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  imageAlt4: 'image',
  imageAlt5: 'image',
  imageSrc5: '/sc%201-200w.png',
  imageSrc7: '/sc%202-200w.png',
  imageSrc4: '/qr-200w.png',
  imageAlt7: 'image',
  heading1: undefined,
  text1: undefined,
  textUrl1: 'https://example.com',
  imageSrc3: '/keg%20%2B%20qr-200w.png',
  content1: undefined,
  imageAlt3: 'image',
}

Hero17.propTypes = {
  imageAlt4: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt7: PropTypes.string,
  heading1: PropTypes.element,
  text1: PropTypes.element,
  textUrl1: PropTypes.string,
  imageSrc3: PropTypes.string,
  content1: PropTypes.element,
  imageAlt3: PropTypes.string,
}

export default Hero17
