import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero171 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`hero171-header78 ${props.rootClassName} `}>
        <div className="hero171-column thq-section-max-width thq-section-padding">
          <div className="hero171-content">
            <h1 className="hero171-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero171-text8">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_FoxtO-'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero171-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero171-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_GW4TZo'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <p className="hero171-text3 thq-body-large">
              {props.content11 ?? (
                <Fragment>
                  <span className="hero171-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WtWrtA'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <p className="hero171-text4 thq-body-large">
              {props.content111 ?? (
                <Fragment>
                  <span className="hero171-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_LdXvtv'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero171-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero171-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero171-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero171-text1 {
            text-align: center;
          }
          .hero171-text2 {
            text-align: left;
          }
          .hero171-text3 {
            text-align: left;
          }
          .hero171-text4 {
            text-align: left;
          }
          .hero171-text5 {
            display: inline-block;
          }
          .hero171-text6 {
            display: inline-block;
          }
          .hero171-text7 {
            display: inline-block;
          }
          .hero171-text8 {
            display: inline-block;
          }

          .hero171root-class-name1 {
            background-color: var(--dl-color-theme-accent2);
          }
        `}
      </style>
    </>
  )
}

Hero171.defaultProps = {
  content1: undefined,
  content111: undefined,
  content11: undefined,
  rootClassName: '',
  heading1: undefined,
}

Hero171.propTypes = {
  content1: PropTypes.element,
  content111: PropTypes.element,
  content11: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero171
