import "./MacBookPro141.css";
import { IPhone14ProColorDeepPurple } from "../IPhone14ProColorDeepPurple/IPhone14ProColorDeepPurple.jsx";
import { BlocksContentH3TitleCenter } from "../BlocksContentH3TitleCenter/BlocksContentH3TitleCenter.jsx";
import { ComponentsFaQsFaq1Closed } from "../ComponentsFaQsFaq1Closed/ComponentsFaQsFaq1Closed.jsx";
import { ComponentsFaQsFaq1Collapsed } from "../ComponentsFaQsFaq1Collapsed/ComponentsFaQsFaq1Collapsed.jsx";
import { MobileAppStoreBadgeStoreAppStoreStyleBlack } from "../MobileAppStoreBadgeStoreAppStoreStyleBlack/MobileAppStoreBadgeStoreAppStoreStyleBlack.jsx";
import { MobileAppStoreBadgeStoreGooglePlayStyleBlack } from "../MobileAppStoreBadgeStoreGooglePlayStyleBlack/MobileAppStoreBadgeStoreGooglePlayStyleBlack.jsx";
import { ElementsInputsDefaultPlaceholder } from "../ElementsInputsDefaultPlaceholder/ElementsInputsDefaultPlaceholder.jsx";
import { ElementsButtonsBigNormal } from "../ElementsButtonsBigNormal/ElementsButtonsBigNormal.jsx";
import React, { useRef } from "react";

export const MacBookPro141 = ({ className, ...props }) => {
  // Refs for sections
  const sectionsRef = {
    whyAqualana: useRef(null),
    theTeam: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null),
    contactUs: useRef(null),
    aboutUs: useRef(null),

  };

  const scrollToSection = (section) => {
    sectionsRef[section].current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className={"mac-book-pro-14-1 " + className}>
      <div className="hero-bg" ref={sectionsRef.aboutUs}></div>
      <div className="we-offer-a-wide-range-of-services-all-in-one-app">
        We offer a wide range of services, all in one app{" "}
      </div>
      <div className="why-aqualana" ref={sectionsRef.whyAqualana}>Why Aqualana? </div>
      <div className="group-628">
        <div className="rectangle-401"></div>
        <div className="rectangle-33"></div>
        <div className="real-time-tracking">Real Time Tracking </div>
        <div className="latter-person-am-secure-of-estate-genius-at-latter-person-am-secure-of-estate-genius-at">
          Latter person am secure of estate genius at. Latter person am secure
          of estate genius at.{" "}
        </div>
      </div>
      <img className="image-3" src="image-30.png" />
      <div className="group-6282">
        <div className="rectangle-4012"></div>
        <div className="rectangle-332"></div>
        <div className="leak-detection">Leak Detection </div>
        <div className="latter-person-am-secure-of-estate-genius-at-latter-person-am-secure-of-estate-genius-at2">
          Latter person am secure of estate genius at. Latter person am secure
          of estate genius at.{" "}
        </div>
      </div>
      <img className="image-5" src="image-50.png" />
      <div className="group-629">
        <div className="rectangle-4013"></div>
        <div className="rectangle-333"></div>
        <div className="optimized-consumption">Optimized Consumption </div>
        <div className="latter-person-am-secure-of-estate-genius-at-latter-person-am-secure-of-estate-genius-at3">
          Latter person am secure of estate genius at. Latter person am secure
          of estate genius at.{" "}
        </div>
      </div>
      <img className="image-6" src="image-60.png" />
      <div className="people-love-our-app" ref={sectionsRef.testimonials}>People Feedback </div>
      <img className="fill-7" src="fill-70.svg" />
      <img className="slider-nav" src="slider-nav0.svg" />
      <div className="_1">
        <div className="rectangle-386"></div>
        <img className="stars" src="stars0.svg" />
        <div className="equipment-and-water-ministry-representative">
          Equipment and water ministry representative.{" "}
        </div>
        <div className="aqualana-has-a-great-potential-to-compete-in-the-water-audit-industry">
          ‘Aqualana has a great potential to compete in the water audit
          industry’{" "}
        </div>
        <div className="jury-feedback">Jury Feedback </div>
      </div>
      <div className="_4">
        <div className="rectangle-3862"></div>
        <img className="stars2" src="stars1.svg" />
        <div className="julian-vidal"> K. Rachida </div>
        <div className="warrant-present-garrets-limited-cordial-in-inquiry-to-supported-me-sweetness-behaviour-shameless-excellent-so-arranging">
          I recently had a water leak but couldn’t identify the source, which led to a lot of unnecessary work. This solution could have been a great help.{" "}
        </div>
        <div className="never-this-amazed">Promissing solution </div>
      </div>
      <div className="_5">
        <div className="rectangle-3863"></div>
        <img className="stars3" src="stars2.svg" />
        <div className="fabian-vidal">B. Mohamed</div>
        <div className="warrant-present-garrets-limited-cordial-in-inquiry-to-supported-me-sweetness-behaviour-shameless-excellent-so-arranging2">
          It's a great idea to raise awareness and encourage eco-responsible behavior in water usage.{" "}
        </div>
        <div className="thank-you">Thank you! </div>
      </div>
      <img className="image-1" src="image-10.png" />
      <IPhone14ProColorDeepPurple className="i-phone-14-pro-instance"></IPhone14ProColorDeepPurple>
      <IPhone14ProColorDeepPurple className="i-phone-14-pro-instance2"></IPhone14ProColorDeepPurple>
      <img className="image-2" src="image-20.png" />
      <div className="group-1000000921">
        <div className="rectangle-3"></div>
        <img className="image-7" src="image-70.png" />
      </div>
      <div className="eddakhla-ouarzazate-et-el-jadida-des-villes-qui-l-instar-de-nombreuses-autres-au-maroc-et-en-afrique-du-nord-souffrent-du-stress-hydrique-bien-que-nous-venions-chacune-d-une-ville-diff-rente-notre-conscience-et-notre-pr-occupation-commune-face-cette-probl-matique-nous-ont-r-unies-nous-avons-eu-la-chance-de-participer-un-hackathon-o-la-communaut-organisatrice-partageait-notre-engagement-pour-la-pr-servation-de-l-eau-nous-avons-ainsi-d-cid-d-agir-en-mobilisant-nos-ressources-et-nos-capacit-s-intellectuelles-c-est-dans-ce-contexte-qu-est-n-e-aqua-lana-une-initiative-r-pondant-l-un-des-d-fis-majeurs-de-notre-poque-le-stress-hydrique" ref={sectionsRef.theTeam}>
      Eddakhla, Ouarzazate and El Jadida: Cities that, like many others in Morocco and North Africa, 
      suffer from water stress. Although we come from different cities, our common awareness and concern 
      for this issue brought us together. We were lucky enough to participate in a hackathon where the 
      organizing community shared our commitment to water conservation. We have therefore decided to act 
      by mobilizing our resources and intellectual capacities. It is in this context that AquaLana was 
      born, an initiative responding to one of the major challenges of our time: water stress.{" "}
      </div>
      <div className="button-add-to-card">
        <div className="start-saving">START SAVING </div>
      </div>
      <div className="button-add-to-card2">
        <div className="start-saving">START SAVING </div>
      </div>
      <div className="frame-547">
        <div className="features" onClick={() => scrollToSection("whyAqualana")}>FEATURES </div>
        <div className="the-team" onClick={() => scrollToSection("theTeam")}>THE TEAM </div>
        <div className="testimonials2" onClick={() => scrollToSection("testimonials")}>TESTIMONIALS </div>
        <div className="faq" onClick={() => scrollToSection("faq")}>FAQ </div>
        <div className="contact-us" onClick={() => scrollToSection("contactUs")}>CONTACT US </div>
      </div>
      <div className="take-control-of-your-water-consumption">
        Take Control of Your Water Consumption{" "}
      </div>
      <div className="effortlessly-track-your-daily-usage-detect-leaks-and-receive-personalized-tips-to-save-water-and-lower-your-bills">
        Effortlessly track your daily usage, detect leaks and receive
        personalized tips to save water and lower your bills.{" "}
      </div>
      <div className="the-team2">The Team </div>
      <div className="group" ref={sectionsRef.faq}>
        <BlocksContentH3TitleCenter
          text="FAQ (Frequent Asked Questions)"
          className="elements-content-h-3-title-center-instance"
        ></BlocksContentH3TitleCenter>
      
      <ComponentsFaQsFaq1Closed
        text="Will I need someone to set up the sensors in my house ?"
        className="elements-fa-qs-faq-1-closed-instance"
      ></ComponentsFaQsFaq1Closed>
      <ComponentsFaQsFaq1Closed
        text="Is it possible to pay from this app the water bill ?"
        className="elements-fa-qs-faq-1-closed-copy-instance"
      ></ComponentsFaQsFaq1Closed>
      <ComponentsFaQsFaq1Closed
        text="How long are the products covered under warranty ?"
        className="elements-fa-qs-faq-1-closed-copy-3-instance"
      ></ComponentsFaQsFaq1Closed>
      <ComponentsFaQsFaq1Collapsed
        text="Is it technically possible to move the sensors to a new house if I relocate?"
        text2="Yes, it is possible technically."
        className="elements-fa-qs-faq-1-collapsed-instance"
      ></ComponentsFaQsFaq1Collapsed>
      </div>

      <div className="newsletter">
        <div className="bg"></div>
        <div className="download-our-app-and-start-saving-on-your-water-consumption-bills-today">
          Download our app and start saving on your water consumption bills
          today!{" "}
        </div>
        <div className="save-money-save-water">Save Money, Save Water </div>
        <div className="newsletter2"></div>
      </div>
      <div className="group-1000000922">
        <div className="rectangle-411"></div>
        <div className="group-634">
          <div className="start-saving2">Start Saving </div>
        </div>
      </div>
      <div className="group-1000000925">
        <MobileAppStoreBadgeStoreAppStoreStyleBlack
          store="app-store"
          styleVariant="black"
          className="mobile-app-store-badge-instance"
        ></MobileAppStoreBadgeStoreAppStoreStyleBlack>
        <MobileAppStoreBadgeStoreGooglePlayStyleBlack
          store="google-play"
          styleVariant="black"
          className="mobile-app-store-badge-instance2"
        ></MobileAppStoreBadgeStoreGooglePlayStyleBlack>
      </div>
      <div className="frame-548">
        <div className="text"></div>
        <div className="contact-us2" onClick={() => scrollToSection("contactUs")}>Contact Us </div>
        <div className="feedback" onClick={() => scrollToSection("testimonials")}>Feedback </div>
        <div className="the-team3" onClick={() => scrollToSection("theTeam")}>The Team </div>
        <div className="why-aqualana2" onClick={() => scrollToSection("whyAqualana")}>Why Aqualana </div>
        <div className="aqualana" onClick={() => scrollToSection("AboutUs")}>Aqualana </div>
        <div className="about" onClick={() => scrollToSection("AboutUs")}>ABOUT </div>
        <div className="linkedin">Linkedin </div>
        <div className="instagram">Instagram </div>
        <div className="twitter">Twitter </div>
        <div className="facebook">Facebook </div>
        <div className="follow-us">Follow Us </div>
        <div className="take-control-of-your-water-consumption-with-aqualana-with-our-solution-get-a-range-of-services-in-one-mobile-app">
          Take control of your water consumption with Aqualana! With our
          solution, get a range of services in one mobile app.{" "}
        </div>
        <img className="linkedin2" src="linkedin1.svg" />
        <img className="facebook2" src="facebook1.svg" />
        <img className="logo" src="logo0.svg" />

        <img className="image-12" src="image-11.png" />
        <img className="vector-1714" src="vector-17140.svg" />
        <div className="copyright-2025-all-rights-reserved-aqualana">
          Copyright © 2025 all rights reserved Aqualana{" "}
        </div>
        <MobileAppStoreBadgeStoreAppStoreStyleBlack
          store="app-store"
          styleVariant="black"
          className="mobile-app-store-badge-instance3"
        ></MobileAppStoreBadgeStoreAppStoreStyleBlack>
        <MobileAppStoreBadgeStoreGooglePlayStyleBlack
          store="google-play"
          styleVariant="black"
          className="mobile-app-store-badge-instance4"
        ></MobileAppStoreBadgeStoreGooglePlayStyleBlack>
      </div>
      <ElementsInputsDefaultPlaceholder
        text="Prénom"
        className="ui-interactions-inputs-default-active-copy-instance"
      ></ElementsInputsDefaultPlaceholder>
      <ElementsInputsDefaultPlaceholder
        text="Email"
        className="ui-interactions-inputs-default-active-copy-3-instance"
      ></ElementsInputsDefaultPlaceholder>
      <div className="ui-interactions-inputs-default-active-copy-4">
        <div className="rectangle-17"></div>
        <div className="placeholder">Votre Message </div>
      </div>
      <ElementsInputsDefaultPlaceholder
        text="Nom"
        className="ui-interactions-inputs-default-active-copy-2-instance"
      ></ElementsInputsDefaultPlaceholder>
      <ElementsButtonsBigNormal
        text="Envoyer"
        className="ui-interactions-buttons-cta-big-normal-copy-2-instance"
      ></ElementsButtonsBigNormal>
      <div className="get-high-converting" ref={sectionsRef.contactUs}> 
        Des Questions? Nous Sommes Là !{" "}
      </div>
      <MobileAppStoreBadgeStoreAppStoreStyleBlack
        store="app-store"
        styleVariant="black"
        className="mobile-app-store-badge-instance5"
      ></MobileAppStoreBadgeStoreAppStoreStyleBlack>
      <MobileAppStoreBadgeStoreGooglePlayStyleBlack
        store="google-play"
        styleVariant="black"
        className="mobile-app-store-badge-instance6"
      ></MobileAppStoreBadgeStoreGooglePlayStyleBlack>
      <div className="group-1000000927">
        <div className="rectangle-4014"></div>
        <div className="daily-reports">Daily Reports </div>
        <div className="latter-person-am-secure-of-estate-genius-at-latter-person-am-secure-of-estate-genius-at4">
          Latter person am secure of estate genius at. Latter person am secure
          of estate genius at.{" "}
        </div>
        <img className="image-4" src="image-40.png" />
      </div>
      <div className="rectangle-334"></div>
    </div>
  );
};
