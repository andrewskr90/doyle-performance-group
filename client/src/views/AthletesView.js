/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class AthletesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/AthletesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AthletesView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611be0c6313fafd3be13bb04'
    htmlEl.dataset['wfSite'] = '611be0c6313faf2b4613badf'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = AthletesView.Controller !== AthletesView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\doyle-performance-group.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"c5d6e62a-9e86-5ffb-3aa9-c22848f26c1a\"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"c5d6e62a-9e86-5ffb-3aa9-c22848f26c23\"] {-webkit-transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);-moz-transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);-ms-transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);opacity:0;display:none;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"c5d6e62a-9e86-5ffb-3aa9-c22848f26c1b\"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}


          /*width*/
          #scrollbar::-webkit-scrollbar {
          width:5px;
          height: 0px;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (max-width: 600px) {
            #scrollbar::-webkit-scrollbar { width:0px; height: 0px;}
          }
          /*track*/
          #scrollbar::-webkit-scrollbar-track {
          background:rgba(243, 246, 252, 0);
          border-radius:25px;
          }
          /*thumb*/
          #scrollbar::-webkit-scrollbar-thumb {
          background:#e2e7f1;
          border-radius:25px;
          }
          #scrollbar::-webkit-scrollbar-thumb:hover {
          background: #090b19;
          }
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-preloader">
              <div className="af-class-preloader-middle">
                <div className="af-class-left-preloader" />
                <div className="af-class-middle-preloader">
                  <div className="af-class-stripe-preloader af-class-left" />
                  <div className="af-class-stripe-preloader af-class-middle" />
                  <div className="af-class-stripe-preloader af-class-right" />
                </div>
                <div className="af-class-right-preloader" />
              </div>
            </div>
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar-2 w-nav">
              <div className="af-class-grid-wrapper-2">
                <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84661d-4a84661b" className="af-class-navigation-bar">
                  <div className="af-class-navigation">
                    <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84661f-4a84661b" className="af-class-nav-left">
                      <a href="index.html" className="af-class-brand-2 w-nav-brand"><img src="images/DOYLE-LOGO.svg" loading="lazy" alt /></a>
                      <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a846622-4a84661b" className="af-class-nav-separator" />
                      <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                        <div className="af-class-menu-grid">
                          <a href="athletes.html" aria-current="page" className="af-class-nav-link-2 w-nav-link w--current">Athletes</a>
                          <a href="/#About" className="af-class-nav-link-2 w-nav-link">About</a>
                          <a href="/#Services" className="af-class-nav-link-2 w-nav-link">Services</a>
                          <a href="/#Engagement" className="af-class-nav-link-2 w-nav-link">Engagement</a>
                          <a href="#" className="af-class-nav-link-2 af-class-contact-link w-nav-link">Contact</a>
                        </div>
                      </nav>
                    </div>
                    <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84662d-4a84661b" className="af-class-nav-right">
                      <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84662e-4a84661b" className="af-class-social-icon-wrapper">
                        <a href="https://www.instagram.com/doylemanagement/" target="_blank" className="af-class-social-icon w-inline-block"><img src="images/Light-instagram.svg" loading="lazy" alt className="af-class-icon-2" />
                          <div className="af-class-social-hover-wrapper">
                            <div className="af-class-social-outline" />
                          </div>
                        </a>
                        <a href="https://twitter.com/DoyleManagement" target="_blank" className="af-class-social-icon w-inline-block">
                          <div className="af-class-social-hover-wrapper">
                            <div className="af-class-social-outline" />
                          </div><img src="images/Light-twitter.svg" loading="lazy" alt className="af-class-icon-2" />
                        </a>
                        <a href="https://www.facebook.com/DoyleManagement/" target="_blank" className="af-class-social-icon w-inline-block">
                          <div className="af-class-social-hover-wrapper">
                            <div className="af-class-social-outline" />
                          </div><img src="images/001-facebook.svg" loading="lazy" alt className="af-class-icon-2" />
                        </a>
                        <a href="https://www.linkedin.com/company/doyle-management-group-limited/about/" target="_blank" className="af-class-social-icon w-inline-block">
                          <div className="af-class-social-hover-wrapper">
                            <div className="af-class-social-outline" />
                          </div><img src="images/002-linkedin.svg" loading="lazy" alt className="af-class-icon-2" />
                        </a>
                      </div>
                      <a href="contact.html" data-w-id="496782d7-8ca9-71e3-94b4-cbb44a84663b" className="af-class-navigation-button w-inline-block">
                        <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84663c-4a84661b">Contact us</div>
                        <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84663e-4a84661b" className="af-class-button-hover-outline af-class-left">
                          <div className="af-class-solid-button-outline af-class-nav-outline" />
                        </div>
                        <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a846640-4a84661b" className="af-class-button-hover-outline af-class-middle">
                          <div className="af-class-solid-button-outline af-class-middle af-class-nav-outline" />
                        </div>
                        <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a846642-4a84661b" className="af-class-button-hover-outline af-class-right">
                          <div className="af-class-solid-button-outline af-class-right af-class-nav-outline" />
                        </div>
                      </a>
                    </div>
                    <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a846644-4a84661b" className="af-class-menu-button w-nav-button">
                      <div className="af-class-menu-link"><img src="images/menu-324x242x.svg" loading="lazy" alt className="af-class-menu-icon" /></div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a846647-4a84661b" className="af-class-nav-cover" />
              </div>
            </div>
            <div className="af-class-page-wrapper">
              <div className="af-class-stripe-wrapper">
                <div className="af-class-wrapper af-class-no-padding">
                  <div className="af-class-stripe-container">
                    <div className="af-class-pin-stripe af-class-hide-horizontal-mobile" />
                    <div className="af-class-pin-stripe af-class-hide-tablet" />
                    <div className="af-class-pin-stripe" />
                    <div className="af-class-pin-stripe" />
                  </div>
                </div>
              </div>
              <div data-w-id="256f98c7-18a8-c7d5-c690-4bfe1bbed2c5" className="af-class-page-hero af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-inner-page-hero-wrapper">
                    <div id="w-node-_256f98c7-18a8-c7d5-c690-4bfe1bbed2c8-be13bb04">
                      <div className="af-class-subtitle af-class-white">Doyle Performance Group</div>
                    </div>
                    <div id="w-node-_256f98c7-18a8-c7d5-c690-4bfe1bbed2cb-be13bb04">
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-one">Our team of </h1>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-two">successful athletes.</h1>
                      </div>
                    </div>
                    <div id="w-node-_256f98c7-18a8-c7d5-c690-4bfe1bbed2d0-be13bb04">
                      <div className="af-class-logos-headline">
                        <div className="af-class-subtitle af-class-small af-class-white">Meet the team</div>
                        <div className="af-class-horizontal-line af-class-white" />
                      </div>
                    </div>
                  </div>
                  <div data-w-id="256f98c7-18a8-c7d5-c690-4bfe1bbed2d5" className="af-class-hover-link-wrapper">
                    <a href="#scroll" className="af-class-hover-link w-inline-block"><img src="images/arrow-down24x242x.svg" loading="lazy" width={24} alt className="af-class-scroll-icon" /></a>
                  </div>
                </div>
                <div className="af-class-background-cover">
                  <div className="af-class-hero-background-image af-class-team-background">
                    <div className="af-class-image-overlay af-class-dark-overylay" />
                  </div>
                  <div className="af-class-stripe-wrapper">
                    <div className="af-class-wrapper af-class-no-padding">
                      <div className="af-class-stripe-container">
                        <div className="af-class-pin-stripe af-class-white" />
                        <div className="af-class-pin-stripe af-class-white af-class-hide-tablet" />
                        <div className="af-class-pin-stripe af-class-white af-class-hide-horizontal-mobile" />
                        <div className="af-class-pin-stripe af-class-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="scroll" data-w-id="b1309089-a2bc-3eba-7f02-d532a9467d82" className="af-class-section af-class-no-verticle-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-page-info-ribbon">
                    <div id="w-node-d5cbc97f-6c81-0aa7-94f1-53f10cb27f1c-be13bb04" className="af-class-page-info">
                      <div id="w-node-b1309089-a2bc-3eba-7f02-d532a9467d85-be13bb04" className="af-class-banner-items">
                        <div className="af-class-banner-scrolling-wrapper">
                          <div className="af-class-scrolling-text">
                            <div className="af-class-subtitle">Jessica Point</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">RYAN BASER</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">CARRIE VATH</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Jessica Point</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">RYAN BASER</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">CARRIE VATH</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Jessica Point</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">RYAN BASER</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">CARRIE VATH</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Jessica Point</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">RYAN BASER</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">CARRIE VATH</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Jessica Point</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">RYAN BASER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-wf-section">
                <div className="af-class-wrapper">
                  <div data-w-id="c5d6e62a-9e86-5ffb-3aa9-c22848f26c08" className="af-class-tripple-grid">
                    <div id="w-node-c5d6e62a-9e86-5ffb-3aa9-c22848f26c09-be13bb04" className="af-class-intro-wrapper">
                      <div className="af-class-subtitle-wrapper">
                        <div style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-subtitle">Our team</div>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-large-heading"><strong>Our Clients &amp; Athletes.</strong></h1>
                      </div><img src="images/Title-Accent.svg" loading="lazy" alt className="af-class-title-accent af-class-_2" />
                    </div>
                  </div>
                  <div>
                    <div className="w-dyn-list">
                      <div role="list" className="af-class-collection-list w-dyn-items">
                        <div id="w-node-c5d6e62a-9e86-5ffb-3aa9-c22848f26c18-be13bb04" role="listitem" className="af-class-team-collection-item w-dyn-item">
                          <div data-w-id="c5d6e62a-9e86-5ffb-3aa9-c22848f26c19" style={{WebkitTransform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', MozTransform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', msTransform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', transform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', opacity: 0}} className="af-class-project-item">
                            <div data-w-id="c5d6e62a-9e86-5ffb-3aa9-c22848f26c1a" className="af-class-project-image">
                              <div data-w-id="c5d6e62a-9e86-5ffb-3aa9-c22848f26c1b" className="af-class-background-image">
                                <div className="af-class-image-overlay af-class-light-overlay" />
                                <div className="af-class-card-circle af-class-overlay1" />
                              </div>
                            </div>
                            <div id="w-node-c5d6e62a-9e86-5ffb-3aa9-c22848f26c1e-be13bb04" className="af-class-project-card-info">
                              <div className="af-class-project-info-top af-class-team-info">
                                <h3 className="af-class-text-left" />
                                <div className="af-class-subtitle af-class-white af-class-left-text" />
                              </div>
                              <div className="af-class-project-hover-link-wrapper">
                                <div data-w-id="c5d6e62a-9e86-5ffb-3aa9-c22848f26c23" className="af-class-hover-link-wrapper af-class-project-view-link">
                                  <a href="#" className="af-class-hover-link w-inline-block">
                                    <div>About</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-no-top-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-project-description-wrapper">
                    <div id="w-node-_7f1f6b0a-25a1-a3f6-ffa0-7d8f329d9398-be13bb04" className="af-class-project-description">
                      <div id="w-node-dab5903c-a7e0-3d67-1fc1-3f4bc831cca3-be13bb04" className="af-class-stacked-description">
                        <h2 className="af-class-medium-heading">A professional athlete should only need to focus on their performance.</h2>
                      </div>
                      <div id="w-node-c856d493-a86f-98c0-cc6d-ee3dea7be915-be13bb04" className="af-class-stacked-description">
                        <div className="af-class-body-display af-class-large">In order to make this possible for every athlete, DMG's full concierge service handles competition schedules, meet entries, transportation, hotel accommodations, training camps, physical therapy and any last minute need that arises.</div>
                      </div>
                      <div id="w-node-_53e77774-181e-6532-0ddd-1bf3be51f711-be13bb04" className="af-class-stacked-description">
                        <div className="af-class-body-display af-class-large">In our eyes, athlete support is focused on, <em>but not limited to,</em> five main areas: <br />(1) Contract Negotiation<br />(2) Marketing and Endorsements<br />(3) Media Relations <br />(4) Competition Entry <br />(5) Logistics and Career Management</div>
                      </div>
                    </div>
                    <div id="w-node-_7f1f6b0a-25a1-a3f6-ffa0-7d8f329d93a6-be13bb04" className="af-class-project-features">
                      <div className="af-class-sticky-services-menu af-class-left-side">
                        <div className="af-class-list-heading-wrapper">
                          <div className="af-class-subtitle">What we do</div>
                        </div>
                        <div className="af-class-service-menu-list">
                          <a href="contact.html" className="af-class-menu-list-item w-inline-block">
                            <div className="af-class-list-item-text">Consultations</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_2dc0e3de-1db8-f7bc-5bf8-522432bd6fd8-be13bb04" alt className="af-class-list-item-arrow" />
                          </a>
                          <a href="contact.html" className="af-class-menu-list-item w-inline-block">
                            <div className="af-class-list-item-text">Human Optimization</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_7b55ff7e-c0c1-d1bd-d48d-a6a1b72716ed-be13bb04" alt className="af-class-list-item-arrow" />
                          </a>
                          <a href="contact.html" className="af-class-menu-list-item w-inline-block">
                            <div className="af-class-list-item-text">Education</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_9abc7d49-bd28-7c24-d044-69b2caffdbb5-be13bb04" alt className="af-class-list-item-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="350f89c8-a0a5-5fe9-c5c1-43f430638088" className="af-class-section af-class-video-section af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-dual-wrapper">
                    <div className="af-class-video-info af-class-_1">
                      <div id="w-node-c9f0e5df-545f-1b48-ac6e-40272a3c46d6-be13bb04">
                        <div className="af-class-subtitle af-class-white">About Doyle Performance Group</div>
                      </div>
                      <div className="af-class-client-quote">
                        <h1 className="af-class-large-heading">Together, we will develop FASTER, more ENDURING athletes who compete on the most rigorous levels and win on the global stage.</h1>
                        <div className="af-class-client-quote-credit">
                          <div className="af-class-subtitle af-class-white">PAUL DOYLE, CEO</div>
                        </div>
                      </div>
                      <div data-w-id="c9f0e5df-545f-1b48-ac6e-40272a3c46df" className="af-class-hover-link-wrapper af-class-video-link-wrapper af-class-hide">
                        <a href="#" className="af-class-hover-link w-inline-block w-lightbox"><img src="images/play24x242x.svg" loading="lazy" width={24} alt className="af-class-scroll-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-background-cover">
                  <div className="af-class-background-banner af-class-team-banner">
                    <div className="af-class-image-overlay af-class-dark-overylay af-class-darker" />
                  </div>
                  <div className="af-class-stripe-wrapper">
                    <div className="af-class-wrapper af-class-no-padding">
                      <div className="af-class-stripe-container">
                        <div className="af-class-pin-stripe af-class-white" />
                        <div className="af-class-pin-stripe af-class-white af-class-hide-tablet" />
                        <div className="af-class-pin-stripe af-class-white af-class-hide-horizontal-mobile" />
                        <div className="af-class-pin-stripe af-class-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{height: '100%'}} className="af-class-section-bottom-cover">
                  <div className="af-class-stripe-wrapper">
                    <div className="af-class-wrapper af-class-no-padding">
                      <div className="af-class-stripe-container">
                        <div className="af-class-pin-stripe af-class-hide-horizontal-mobile" />
                        <div className="af-class-pin-stripe af-class-hide-tablet" />
                        <div className="af-class-pin-stripe" />
                        <div className="af-class-pin-stripe" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-grey af-class-wf-section">
                <div className="af-class-instagram">
                  <div className="af-class-container">
                    <div className="af-class-title-wrap-centre af-class-margin-bottom-64">
                      <h3>Follow us on Instagram</h3>
                    </div>
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="af-class-instagram-list w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="af-class-instagram-wrap"><img src loading="lazy" alt className="af-class-instagram-image" />
                          <a data-w-id="22520f30-058e-4c70-daff-4ec1d1d07b0c" href="#" className="af-class-instagram-hover w-inline-block">
                            <div className="af-class-instagram-icon"><img src="images/Instagram-White.svg" loading="lazy" alt className="af-class-instagram-logo" /></div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="c6a86f47-145d-b8c8-1c44-2b43c426b91d" className="af-class-footer-section af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-footer-wrapper">
                    <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b920-c426b91d" className="af-class-stacked-description"><img src="images/DOYLE-LOGO.svg" loading="lazy" alt className="af-class-footer-logo" /></div>
                    <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b923-c426b91d" className="af-class-stacked-description">
                      <div className="af-class-subtitle af-class-white">Follow us</div>
                      <div className="af-class-service-menu-list af-class-white">
                        <a href="https://www.instagram.com/doylemanagement/" target="_blank" className="af-class-menu-list-item af-class-white af-class-small w-inline-block">
                          <div className="af-class-team-social-icon af-class-small"><img src="images/IG.svg" loading="lazy" alt /></div>
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b929-c426b91d">@doylemanagement</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_9528b6cc-5881-ac46-ac4f-f9567a600aa3-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="https://www.facebook.com/DoyleManagement/" target="_blank" className="af-class-menu-list-item af-class-white af-class-small w-inline-block">
                          <div className="af-class-team-social-icon af-class-small"><img src="images/facebook-f.svg" loading="lazy" alt /></div>
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b92d-c426b91d">@doylemanagement</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_3ba5fc0d-00d1-0032-83ee-52ea90be55fb-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="https://www.linkedin.com/company/doyle-management-group-limited/about/" target="_blank" className="af-class-menu-list-item af-class-white af-class-small w-inline-block">
                          <div className="af-class-team-social-icon af-class-small"><img src="images/linkedin.svg" loading="lazy" alt /></div>
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b931-c426b91d">@doylemanagement</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-d7478ca7-7861-03a0-e2af-d807b17707c6-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="https://twitter.com/DoyleManagement" target="_blank" className="af-class-menu-list-item af-class-white af-class-small w-inline-block">
                          <div className="af-class-team-social-icon af-class-small"><img src="images/001-twitter.svg" loading="lazy" alt /></div>
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b935-c426b91d">@doylemanagement</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_7efe9b07-839d-97d2-24ef-14c8a804e1f9-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                      </div>
                    </div>
                    <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b937-c426b91d" className="af-class-stacked-description">
                      <div className="af-class-subtitle af-class-white">Navigation</div>
                      <div className="af-class-service-menu-list af-class-white">
                        <a href="athletes.html" aria-current="page" className="af-class-menu-list-item af-class-white w-inline-block w--current">
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b93c-c426b91d" className="af-class-list-item-text">Athletes</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-eaf30d13-d8b4-446b-d7d2-d527e95fa99a-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="/#About" className="af-class-menu-list-item af-class-white w-inline-block">
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b93f-c426b91d" className="af-class-list-item-text">About</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_6e84a20c-5fdf-34ef-f5da-11af0219cea5-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="/#Services" className="af-class-menu-list-item af-class-white w-inline-block">
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b942-c426b91d" className="af-class-list-item-text">Services</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_800e5816-2ed2-cae5-269d-04a046bc20b0-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="/#Engagement" className="af-class-menu-list-item af-class-white w-inline-block">
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b945-c426b91d" className="af-class-list-item-text">Engagement</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-_47bab92c-8f85-cc70-5380-573db90b0da1-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                        <a href="contact.html" className="af-class-menu-list-item af-class-white w-inline-block">
                          <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b948-c426b91d" className="af-class-list-item-text">Contact</div><img src="images/arrow-right-white48x482x.svg" loading="lazy" id="w-node-f9bea813-e527-c7ca-8e20-11a3cd4098db-c426b91d" alt className="af-class-list-item-arrow" />
                        </a>
                      </div>
                    </div>
                    <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b94a-c426b91d" className="af-class-about-description">
                      <h4>About us</h4>
                      <div className="af-class-body-display af-class-white">Our mission is to identify talented athletes and provide them the necessary services to compete at the highest possible level while establishing their personal brand in an effort to maximize their market value and profit potential.<a href="https://www.doylemanagement.com/" target="_self"><br /></a>
                      </div>
                    </div>
                    <div id="w-node-c6a86f47-145d-b8c8-1c44-2b43c426b94f-c426b91d" className="af-class-footer-credits">
                      <div>© 2021 DOYLE SPORTS PERFORMANCE. All rights reserved.</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-stripe-wrapper">
                  <div className="af-class-wrapper af-class-no-padding">
                    <div className="af-class-stripe-container">
                      <div className="af-class-pin-stripe af-class-white" />
                      <div className="af-class-pin-stripe af-class-white af-class-hide-tablet" />
                      <div className="af-class-pin-stripe af-class-white af-class-hide-horizontal-mobile" />
                      <div className="af-class-pin-stripe af-class-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-team-collection-item:nth-child(even) {\n   margin-top: 0px !important; \n   margin-bottom: 0px !important;\n}\n" }} />
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AthletesView

/* eslint-enable */