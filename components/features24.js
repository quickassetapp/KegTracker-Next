import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features24 = (props) => {
  const translate = useTranslations()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        id={props.features24Id}
        className={`thq-section-padding ${props.rootClassName} `}
      >
        <div className="features24-container2 thq-section-max-width">
          <div className="features24-tabs-menu1">
            <div
              onClick={() => setActiveTab(0)}
              className="features24-tab-horizontal1"
            >
              <div className="features24-divider-container1">
                {activeTab === 0 && (
                  <div className="features24-container3"></div>
                )}
              </div>
              <div className="features24-content1">
                <h2 className="features24-feature1-title1 thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features24-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_VRBwAn'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="features24-feature1-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features24-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xNkN9d'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features24-tabs-menu2">
            <div
              onClick={() => setActiveTab(0)}
              className="features24-tab-horizontal2"
            >
              <div className="features24-divider-container2">
                {activeTab === 0 && (
                  <div className="features24-container4"></div>
                )}
              </div>
              <div className="features24-content2">
                <h2 className="features24-feature1-title2 thq-heading-2">
                  {props.feature1Title2 ?? (
                    <Fragment>
                      <span className="features24-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_u4D1be'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="features24-feature1-description2 thq-body-small">
                  {props.feature1Description2 ?? (
                    <Fragment>
                      <span className="features24-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_J588e3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features24-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features24-tabs-menu1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-feature1-title1 {
            font-family: 'Arial';
          }
          .features24-feature1-description1 {
            font-family: 'Inter';
          }
          .features24-tabs-menu2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-feature1-title2 {
            font-family: 'Arial';
          }
          .features24-feature1-description2 {
            font-family: 'Inter';
          }
          .features24-text1 {
            display: inline-block;
          }
          .features24-text2 {
            display: inline-block;
          }
          .features24-text3 {
            display: inline-block;
          }
          .features24-text4 {
            display: inline-block;
          }
          .features24root-class-name {
            background-color: var(--dl-color-theme-accent2);
          }
          @media (max-width: 991px) {
            .features24-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features24.defaultProps = {
  features24Id: '',
  feature1Title: undefined,
  feature1Description: undefined,
  feature1Description2: undefined,
  feature1Title2: undefined,
  rootClassName: '',
}

Features24.propTypes = {
  features24Id: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Description2: PropTypes.element,
  feature1Title2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Features24
