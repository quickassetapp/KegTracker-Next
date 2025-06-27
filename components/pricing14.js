import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing14 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        id={props.pricing14Id}
        className="pricing14-pricing23 thq-section-padding"
      >
        <div className="pricing14-max-width thq-section-max-width">
          <div className="pricing14-section-title">
            <div className="pricing14-content">
              <h2 className="pricing14-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing14-text99">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0Vr0n_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div className="pricing14-tabs">
            {isMonthly === true && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button10 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fkcjIV'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button11 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5vqJBC'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button12 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EBW6z7'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {isMonthly === true && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button13 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6cJVXj'),
                    }}
                  ></span>
                </span>
              </button>
            )}
          </div>
          {isMonthly === true && (
            <div className="pricing14-container1">
              <div className="pricing14-column1 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <p className="pricing14-text15 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing14-text85">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_403qak'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text16 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing14-text96">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_pXajVe'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text80">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_NJ4hS7'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list1">
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text69">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_1I3uI-'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text94">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_DwZaEq'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature22 ?? (
                          <Fragment>
                            <span className="pricing14-text72">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_dMPAPa'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button14 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="pricing14-text64">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Rd6U25'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column2 thq-card">
                <div className="pricing14-price12">
                  <div className="pricing14-price13">
                    <p className="pricing14-text22 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing14-text89">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cXu319'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text23 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing14-text87">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_v79W7z'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text82">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_TzeQr1'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list2">
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text91">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_5TeEkg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text76">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ZqWYeK'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature22 ?? (
                          <Fragment>
                            <span className="pricing14-text67">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_cpuKbG'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button15 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="pricing14-text71">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_xYWW--'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column3 thq-card">
                <div className="pricing14-price14">
                  <div className="pricing14-price15">
                    <p className="pricing14-text29 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing14-text65">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_x5osOT'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text30 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing14-text68">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_V_ULWD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text84">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_JJ6TZf'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list3">
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text90">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_nZk11K'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text63">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_8pB-Dx'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature22 ?? (
                          <Fragment>
                            <span className="pricing14-text97">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_n_EKV5'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button16 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="pricing14-text61">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_5OFe-v'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {isMonthly === false && (
            <div className="pricing14-container2">
              <div className="pricing14-column4 thq-card">
                <div className="pricing14-price16">
                  <div className="pricing14-price17">
                    <span className="pricing14-text36 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing14-text95">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_s-MWqV'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text37 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text74">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AooJc0'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text79">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_2ZTL-8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list4">
                    <div className="pricing14-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text58">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_S6Idxb'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text57">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_-pgLrT'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text66">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_G-Ega0'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button17 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text81">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TqMv88'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column5 thq-card">
                <div className="pricing14-price18">
                  <div className="pricing14-price19">
                    <span className="pricing14-text43 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text70">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_TvMXId'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text44 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text83">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_-7G-vF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text92">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8i_RwM'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list5">
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text77">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_oIEfgg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text60">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_okES8N'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text93">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_8pAZF3'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button18 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text86">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_GvNM92'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column6 thq-card">
                <div className="pricing14-price20">
                  <div className="pricing14-price21">
                    <span className="pricing14-text50 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text78">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8H00YU'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text51 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text75">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_1uVtgz'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text62">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nRGw_U'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list6">
                    <div className="pricing14-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text59">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_bUNR97'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text73">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_REyC5x'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text88">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_JB23yN'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button19 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text98">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Ui5n6l'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing14-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text10 {
            text-align: center;
          }
          .pricing14-tabs {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button10 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button11 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button12 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-button13 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text15 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text16 {
            font-size: 48px;
          }
          .pricing14-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button14 {
            width: 100%;
          }
          .pricing14-column2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text23 {
            font-size: 48px;
          }
          .pricing14-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button15 {
            width: 100%;
          }
          .pricing14-column3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text29 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text30 {
            font-size: 48px;
          }
          .pricing14-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button16 {
            width: 100%;
          }
          .pricing14-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column4 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text36 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text37 {
            font-size: 48px;
          }
          .pricing14-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button17 {
            width: 100%;
          }
          .pricing14-column5 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text43 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text44 {
            font-size: 48px;
          }
          .pricing14-list5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button18 {
            width: 100%;
          }
          .pricing14-column6 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text50 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text51 {
            font-size: 48px;
          }
          .pricing14-list6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button19 {
            width: 100%;
          }
          .pricing14-text57 {
            display: inline-block;
          }
          .pricing14-text58 {
            display: inline-block;
          }
          .pricing14-text59 {
            display: inline-block;
          }
          .pricing14-text60 {
            display: inline-block;
          }
          .pricing14-text61 {
            display: inline-block;
          }
          .pricing14-text62 {
            display: inline-block;
          }
          .pricing14-text63 {
            display: inline-block;
          }
          .pricing14-text64 {
            display: inline-block;
          }
          .pricing14-text65 {
            display: inline-block;
          }
          .pricing14-text66 {
            display: inline-block;
          }
          .pricing14-text67 {
            display: inline-block;
          }
          .pricing14-text68 {
            display: inline-block;
          }
          .pricing14-text69 {
            display: inline-block;
          }
          .pricing14-text70 {
            display: inline-block;
          }
          .pricing14-text71 {
            display: inline-block;
          }
          .pricing14-text72 {
            display: inline-block;
          }
          .pricing14-text73 {
            display: inline-block;
          }
          .pricing14-text74 {
            display: inline-block;
          }
          .pricing14-text75 {
            display: inline-block;
          }
          .pricing14-text76 {
            display: inline-block;
          }
          .pricing14-text77 {
            display: inline-block;
          }
          .pricing14-text78 {
            display: inline-block;
          }
          .pricing14-text79 {
            display: inline-block;
          }
          .pricing14-text80 {
            display: inline-block;
          }
          .pricing14-text81 {
            display: inline-block;
          }
          .pricing14-text82 {
            display: inline-block;
          }
          .pricing14-text83 {
            display: inline-block;
          }
          .pricing14-text84 {
            display: inline-block;
          }
          .pricing14-text85 {
            display: inline-block;
          }
          .pricing14-text86 {
            display: inline-block;
          }
          .pricing14-text87 {
            display: inline-block;
          }
          .pricing14-text88 {
            display: inline-block;
          }
          .pricing14-text89 {
            display: inline-block;
          }
          .pricing14-text90 {
            display: inline-block;
          }
          .pricing14-text91 {
            display: inline-block;
          }
          .pricing14-text92 {
            display: inline-block;
          }
          .pricing14-text93 {
            display: inline-block;
          }
          .pricing14-text94 {
            display: inline-block;
          }
          .pricing14-text95 {
            display: inline-block;
          }
          .pricing14-text96 {
            display: inline-block;
          }
          .pricing14-text97 {
            display: inline-block;
          }
          .pricing14-text98 {
            display: inline-block;
          }
          .pricing14-text99 {
            display: inline-block;
            font-family: 'Arial';
          }
          @media (max-width: 991px) {
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-column3 {
              width: 100%;
            }
            .pricing14-container2 {
              flex-direction: column;
            }
            .pricing14-column6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan1Feature21: undefined,
  pricing14Id: '',
  plan1Feature11: undefined,
  plan3Feature11: undefined,
  plan2Feature21: undefined,
  plan3Action: undefined,
  plan3Yearly1: undefined,
  plan3Feature2: undefined,
  plan1Action: undefined,
  plan3: undefined,
  plan1Feature31: undefined,
  plan2Feature22: undefined,
  plan3Price: undefined,
  plan1Feature1: undefined,
  plan21: undefined,
  plan2Action: undefined,
  plan1Feature22: undefined,
  plan3Feature21: undefined,
  plan1Price1: undefined,
  plan3Price1: undefined,
  plan2Feature2: undefined,
  plan2Feature11: undefined,
  plan31: undefined,
  plan1Yearly1: undefined,
  plan1Yearly: undefined,
  plan1Action1: undefined,
  plan2Yearly: undefined,
  plan2Price1: undefined,
  plan3Yearly: undefined,
  plan1: undefined,
  plan2Action1: undefined,
  plan2Price: undefined,
  plan3Feature31: undefined,
  plan2: undefined,
  plan3Feature1: undefined,
  plan2Feature1: undefined,
  plan2Yearly1: undefined,
  plan2Feature31: undefined,
  plan1Feature2: undefined,
  plan11: undefined,
  plan1Price: undefined,
  plan3Feature22: undefined,
  plan3Action1: undefined,
  heading1: undefined,
}

Pricing14.propTypes = {
  plan1Feature21: PropTypes.element,
  pricing14Id: PropTypes.string,
  plan1Feature11: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan3Action: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan1Action: PropTypes.element,
  plan3: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan2Feature22: PropTypes.element,
  plan3Price: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan21: PropTypes.element,
  plan2Action: PropTypes.element,
  plan1Feature22: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan31: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan2: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan11: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Feature22: PropTypes.element,
  plan3Action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Pricing14
