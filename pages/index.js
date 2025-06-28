import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Pricing14 from '../components/pricing14'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
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
          <title>KegTracker – QR-Based Keg Management for Breweries</title>
          <meta
            name="description"
            content="KegTracker helps craft breweries manage their kegs with QR tracking, inventory history, and multi-user access. Start your 7-day free trial today!"
          />
          <meta
            property="og:title"
            content="KegTracker – QR-Based Keg Management for Breweries"
          />
          <meta
            property="og:description"
            content="KegTracker helps craft breweries manage their kegs with QR tracking, inventory history, and multi-user access. Start your 7-day free trial today!"
          />
        </Head>
        <Navbar8
          text={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BP-Kse'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rr953R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jVNN35'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ewL3XU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6gfNo8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZZ_G8G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5YzID_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Wod9yU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_je9ziW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6rf5uw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link21={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oZ-yL1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c112GZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0H3lYi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl="https://app.kegtracker.io/"
          link1Url="#Features24"
          link2Url="/docs"
          textUrl1="#Pricing14"
          link2Url1="#Contact10"
          page1Description={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i-65tC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pL8KGs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tjAFSd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5rIQOk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          text1={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bPF0ZV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl="https://app.kegtracker.io/"
          content1={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_smHxPl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DETnAg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl1="#Pricing14"
        ></Hero17>
        <Features24
          features24Id="Features24"
          feature1Title={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w319IM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="features24root-class-name"
          feature1Title2={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wPY6TI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ODb3Tl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1Description2={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_erkrIc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features24>
        <Pricing14
          plan1={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E7nsE3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_e2Na6S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7hpt14'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ySxRIP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_efi7iS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7Q7oP2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pfzZWF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3UjmGB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZncwQu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_333oXX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-M_vLh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sSNQcV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4pIs6K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GpZacL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CT1gze'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aioz6p'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DexK7Y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NTlrFd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Oe29sF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          pricing14Id="Pricing14"
          plan1Action1={
            <Fragment>
              <span className="home-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N3H_qn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M2q8yo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GKcLag'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sR9WDk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YrpLP1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xyGL5U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_e8gLky'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b1-AUz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eKjOlH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6G3xfG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VqFMSY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V-IINj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wISozp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EhpcG9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature22={
            <Fragment>
              <span className="home-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FE-CgM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EFwsFk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wwwKCN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ijpG3M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature22={
            <Fragment>
              <span className="home-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z_oCiw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lPKbj5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TNed3f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_h5cw_f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature22={
            <Fragment>
              <span className="home-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a_BOsR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C_FBlf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Pricing14>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pv9EEx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ShGCMd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KDQulq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location21={
            <Fragment>
              <span className="home-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Igw3_P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          contact10Id="Contact10"
          location211={
            <Fragment>
              <span className="home-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XYZUS8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="contact10root-class-name"
        ></Contact10>
        <Footer4
          text={
            <Fragment>
              <span className="home-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-bd4uX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Pm_j__'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Vy2ncJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl="#Contact10"
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text29 {
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
            font-family: 'Arial';
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
            display: inline-block;
          }
          .home-text81 {
            display: inline-block;
          }
          .home-text82 {
            display: inline-block;
          }
          .home-text83 {
            display: inline-block;
          }
          .home-text84 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

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
