import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar81 from '../components/navbar81'
import Hero171 from '../components/hero171'
import Footer4 from '../components/footer4'

const Docs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="docs-container">
        <Head>
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-F00RTQTPR6"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-F00RTQTPR6');
              `,
            }}
          />
          <title>
            Docs - KegTracker – QR-Based Keg Management for Breweries
          </title>
          <meta
            name="description"
            content="KegTracker helps craft breweries manage their kegs with QR tracking, inventory history, and multi-user access. Start your 7-day free trial today!"
          />
          <meta
            property="og:title"
            content="Docs - KegTracker – QR-Based Keg Management for Breweries"
          />
          <meta
            property="og:description"
            content="KegTracker helps craft breweries manage their kegs with QR tracking, inventory history, and multi-user access. Start your 7-day free trial today!"
          />
        </Head>
        <Navbar81
          text={
            <Fragment>
              <span className="docs-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2nC3sK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="docs-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4z8PFC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="docs-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UooqYr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="docs-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4bycyV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="docs-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7TItVK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="docs-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y2IOnZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="docs-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nELVtR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="docs-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V32AsW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="docs-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dPN9pt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="docs-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eMJCtl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="docs-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GZaM6q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="docs-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xp6lR3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl="https://app.kegtracker.io"
          link1Url="/"
          link2Url="/docs"
          link2Url1="/"
          page1Description={
            <Fragment>
              <span className="docs-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P5a6GN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="docs-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4enhrt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="docs-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vufojM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="docs-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IBkBek'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar81>
        <Hero171
          content1={
            <Fragment>
              <span className="docs-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uXwrLi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="docs-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ae_dR4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="docs-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R5Tfya'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content111={
            <Fragment>
              <span className="docs-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0JRv0R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="hero171root-class-name1"
        ></Hero171>
        <Hero171
          content1={
            <Fragment>
              <span className="docs-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_11nW5t'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="docs-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_97p4m2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="docs-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vidOSA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content111={
            <Fragment>
              <span className="docs-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nkDU1x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="hero171root-class-name"
        ></Hero171>
        <Footer4
          text={
            <Fragment>
              <span className="docs-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_G3jW7D'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="docs-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zhfwfj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="docs-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3rm7Oh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl="/"
        ></Footer4>
      </div>
      <style jsx>
        {`
          .docs-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .docs-text10 {
            display: inline-block;
          }
          .docs-text11 {
            display: inline-block;
          }
          .docs-text12 {
            display: inline-block;
          }
          .docs-text13 {
            display: inline-block;
          }
          .docs-text14 {
            display: inline-block;
          }
          .docs-text15 {
            display: inline-block;
          }
          .docs-text16 {
            display: inline-block;
          }
          .docs-text17 {
            display: inline-block;
          }
          .docs-text18 {
            display: inline-block;
          }
          .docs-text19 {
            display: inline-block;
          }
          .docs-text20 {
            display: inline-block;
          }
          .docs-text21 {
            display: inline-block;
          }
          .docs-text22 {
            display: inline-block;
          }
          .docs-text23 {
            display: inline-block;
          }
          .docs-text24 {
            display: inline-block;
          }
          .docs-text25 {
            display: inline-block;
          }
          .docs-text26 {
            display: inline-block;
          }
          .docs-text27 {
            display: inline-block;
          }
          .docs-text28 {
            display: inline-block;
          }
          .docs-text29 {
            display: inline-block;
          }
          .docs-text30 {
            display: inline-block;
          }
          .docs-text31 {
            display: inline-block;
          }
          .docs-text32 {
            display: inline-block;
          }
          .docs-text33 {
            display: inline-block;
          }
          .docs-text34 {
            display: inline-block;
          }
          .docs-text35 {
            display: inline-block;
          }
          .docs-text36 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Docs

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
