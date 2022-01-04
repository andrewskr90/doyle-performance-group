/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611be0c6313fafbedf13bae9'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\doyle-performance-group.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"4063be45-b8b3-9a31-cad9-bfe36485df5b\"] {-webkit-transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-18px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"e1a15f0b-a81e-b2e2-3198-533ed3df2537\"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"34f40958-909d-c930-a6c7-43d6f1cd5fab\"] {-webkit-transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);-moz-transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);-ms-transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);transform:translate3d(0, 48px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 20deg);opacity:0;display:none;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"34f40958-909d-c930-a6c7-43d6f1cd5fa2\"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}


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
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar-2 w-nav">
              <div className="af-class-grid-wrapper-2">
                <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84661d-4a84661b" className="af-class-navigation-bar">
                  <div className="af-class-navigation">
                    <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a84661f-4a84661b" className="af-class-nav-left">
                      <a href="index.html" aria-current="page" className="af-class-brand-2 w-nav-brand w--current"><img src="images/DOYLE-LOGO.svg" loading="lazy" alt /></a>
                      <div id="w-node-_496782d7-8ca9-71e3-94b4-cbb44a846622-4a84661b" className="af-class-nav-separator" />
                      <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                        <div className="af-class-menu-grid">
                          <a href="athletes.html" className="af-class-nav-link-2 w-nav-link">Athletes</a>
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
              <div data-w-id="79b87f19-3f60-9142-4d39-aa5e81099a63" className="af-class-home-hero af-class-wf-section">
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
                <div className="af-class-background-cover">
                  <div style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-hero-background-image">
                    <div className="af-class-image-overlay" />
                  </div>
                </div>
                <div className="af-class-grid-wrapper">
                  <div id="w-node-dd002ff0-1786-f7aa-b0cb-21b79ffd8f18-df13bae9">
                    <div className="af-class-subtitle af-class-white">Doyle Sports Performance</div>
                  </div>
                  <div id="w-node-_8e07c8f2-059d-6f6d-2fac-5813639df6f0-df13bae9" data-w-id="8e07c8f2-059d-6f6d-2fac-5813639df6f0" className="af-class-hover-link-wrapper">
                    <a href="#About" className="af-class-hover-link w-inline-block"><img src="images/arrow-down24x242x.svg" loading="lazy" width={24} alt className="af-class-scroll-icon" /></a>
                  </div>
                  <div id="w-node-d71299dc-e2cf-e714-cc8e-cbf4e6f5ae15-df13bae9" className="af-class-hero-content-wrapper">
                    <div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-one">The next evolution in </h1>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-two">global football training. </h1>
                      </div>
                    </div>
                    <div id="w-node-_991b9d86-d746-6bac-12b8-a27bc65d39a9-df13bae9" className="af-class-clip">
                      <div style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-hero-button-wrapper">
                        <a href="contact.html" className="af-class-button af-class-white-outline w-inline-block">
                          <div className="af-class-button-text">Schedule a call</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-c3dc174b-78b2-9eb5-4dbe-d315274a7469-df13bae9" className="af-class-transparent-fill" />
                  <div id="w-node-b128c289-fbf9-8a15-41a5-2bcdbae8da0b-df13bae9" className="af-class-hero-bottom-feature">
                    <div className="w-dyn-list">
                      <div role="list" className="w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <a data-w-id="4282c529-e0b4-d272-d2b7-ccf85631c59e" href="#" className="af-class-hero-feature-card w-inline-block">
                            <div className="af-class-stacked-description">
                              <div className="af-class-subtitle">BReakthrough athlete</div>
                              <h4 />
                            </div><img src="images/arrow-right48x482x.svg" loading="lazy" data-w-id="4063be45-b8b3-9a31-cad9-bfe36485df5b" id="w-node-_4063be45-b8b3-9a31-cad9-bfe36485df5b-df13bae9" alt className="af-class-list-item-arrow" />
                          </a>
                        </div>
                      </div>
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-d75a5be9-120d-a9cc-09fb-cefd7dff224e-df13bae9" className="af-class-featured-project-column">
                    <div className="af-class-rotate-text">Featured</div>
                  </div>
                </div>
              </div>
              <div id="About" className="af-class-section af-class-bottom-border af-class-wf-section">
                <div className="af-class-grid-wrapper">
                  <div id="w-node-_79f994ec-077f-1497-85b2-2429e94274bd-df13bae9" className="af-class-content-wrapper">
                    <div id="w-node-_79f994ec-077f-1497-85b2-2429e94274be-df13bae9" className="af-class-section-title af-class-extra-top-padding">
                      <div id="w-node-_79f994ec-077f-1497-85b2-2429e94274bf-df13bae9" className="af-class-about-wrapper">
                        <div data-w-id="79f994ec-077f-1497-85b2-2429e94274c0" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-banner-wrapper">
                          <div className="af-class-banner-background-wrapper">
                            <div className="af-class-background-wrapper">
                              <div className="af-class-background af-class-portrait-background">
                                <div className="af-class-overlay af-class-light" />
                              </div>
                            </div>
                          </div>
                          <div style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-scroll-cover" />
                        </div>
                        <div id="w-node-_79f994ec-077f-1497-85b2-2429e94274c6-df13bae9" className="af-class-about-content">
                          <div className="af-class-subtitle">The Future of Football Performance is Here</div>
                          <div id="w-node-_79f994ec-077f-1497-85b2-2429e94274c9-df13bae9" className="af-class-stacked-info">
                            <div className="af-class-stacked-description-2">
                              <h1>About DSP&nbsp;Switzerland.</h1>
                              <div className="af-class-stacked-paragraphs">
                                <div className="af-class-body-display-2">Through a unique approach of integrating best practices from world class Track &amp; Field and Football methodologies, we have architected the future of football athletic development and conditioning.</div>
                                <div className="af-class-body-display-2">Our performance group has accounted for 34 Olympic Medals spanning over the last 3 summer Olympic Games. In a combined effort by our athletes and coaches during the 2016 Rio de Janeiro Olympic Games, Doyle Sports Performance obtained 14 medals, placing us fourth overall if we were represented as a country. By medal count, we are the number ONE global agency in Track &amp; Field.</div>
                              </div>
                            </div>
                          </div><img src="images/Title-Accent.svg" loading="lazy" alt className="af-class-title-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Services" className="af-class-section af-class-clip af-class-wf-section">
                <div className="af-class-wrapper">
                  <div data-w-id="0442c40a-f5dc-0897-a9fb-169a73db4490" className="af-class-tripple-grid">
                    <div id="w-node-_864b30ac-902a-1bc5-c775-6b8cda770129-df13bae9" className="af-class-intro-wrapper">
                      <div className="af-class-subtitle-wrapper">
                        <div style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-subtitle">We do it best</div>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-large-heading">Our Services.</h1>
                      </div><img src="images/Title-Accent.svg" loading="lazy" alt className="af-class-title-accent af-class-_2" />
                    </div>
                    <div id="w-node-_70edc27a-5d85-b4b7-cc4a-a4055e230b7f-df13bae9" className="af-class-clip">
                      <a style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} href="contact.html" className="af-class-button w-inline-block">
                        <div className="af-class-button-text">Contact us</div>
                      </a>
                    </div>
                  </div>
                  <div className="af-class-services-grid">
                    <div data-w-id="740c604e-5a91-f71f-7b54-c6974b436c83" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-card-hover-item">
                      <div className="af-class-card-circle" />
                      <div className="af-class-services-card">
                        <div className="af-class-icon"><img src="images/list-icon-dark.svg" loading="lazy" alt /></div>
                        <div className="af-class-feature-card-info">
                          <div className="af-class-feature-card-description">
                            <h3 className="af-class-heading">Consultations</h3>
                            <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.</div>
                          </div>
                          <div className="af-class-card-button-wrapper">
                            <div className="af-class-clip">
                              <a href="contact.html" className="af-class-button af-class-grey-outline af-class-small w-inline-block">
                                <div className="af-class-button-text">Schedule a call</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="fc9bc2c3-441c-49e9-3161-c6e9cd50542d" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-card-hover-item">
                      <div className="af-class-card-circle" />
                      <div className="af-class-services-card">
                        <div className="af-class-icon"><img src="images/filters-icon-dark.svg" loading="lazy" alt /></div>
                        <div className="af-class-feature-card-info">
                          <div className="af-class-feature-card-description">
                            <h3 className="af-class-heading">Human Optimization</h3>
                            <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.</div>
                          </div>
                          <div className="af-class-card-button-wrapper">
                            <div className="af-class-clip">
                              <a href="contact.html" className="af-class-button af-class-grey-outline af-class-small w-inline-block">
                                <div className="af-class-button-text">Schedule a call</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="d3404f02-a3e3-7279-5052-cdcdd7aa3af9" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-card-hover-item">
                      <div className="af-class-card-circle" />
                      <div className="af-class-services-card">
                        <div className="af-class-icon"><img src="images/dashboard-2-icon-dark.svg" loading="lazy" alt /></div>
                        <div className="af-class-feature-card-info">
                          <div className="af-class-feature-card-description">
                            <h3>Education</h3>
                            <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum.</div>
                          </div>
                          <div className="af-class-card-button-wrapper">
                            <div className="af-class-clip">
                              <a href="contact.html" className="af-class-button af-class-grey-outline af-class-small w-inline-block">
                                <div className="af-class-button-text">Schedule a call</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Engagement" className="af-class-section-1b af-class-grey af-class-wf-section">
                <div className="af-class-grid-wrapper-4">
                  <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d13-df13bae9" className="af-class-story-wrapper">
                    <div className="af-class-story-grid">
                      <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d15-df13bae9" className="af-class-sticky-services-intro">
                        <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d16-df13bae9" className="af-class-full-stacked-intro">
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d19-df13bae9" className="af-class-medium-stacked-intro">
                            <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d1a-df13bae9" className="af-class-stacked-heading-2">
                              <div className="af-class-subtitle">We do it best</div>
                              <h2>We're changing the way an agency can enhance athletic performance.</h2>
                              <a href="contact.html" className="af-class-button w-inline-block">
                                <div className="af-class-button-text">Schedule a call</div>
                              </a><img src="images/purp.svg" loading="lazy" alt className="af-class-accent-grey-top" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-verticle-line-2" />
                      <div className="af-class-about-block">
                        <div className="af-class-body-display-4">By partnering with us, agencies, federations, clubs, athletes, and brands will benefit from our program. </div>
                        <div className="af-class-about-list">
                          <div className="af-class-core-value">
                            <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d26-df13bae9" className="af-class-core-value-top">
                              <div className="af-class-subtitle-4">01</div>
                              <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d29-df13bae9" className="af-class-subtitle-4">Discovery</div>
                            </div>
                            <div className="af-class-body-display-4 af-class-small">Client outlines their wants and needs.</div>
                          </div>
                          <div className="af-class-core-value">
                            <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d2e-df13bae9" className="af-class-core-value-top">
                              <div className="af-class-subtitle-4">02</div>
                              <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d31-df13bae9" className="af-class-subtitle-4">Timeline</div>
                            </div>
                            <div className="af-class-body-display-4 af-class-small">Understand accessibility and timeframe to work with client.</div>
                          </div>
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d35-df13bae9" className="af-class-core-value">
                            <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d36-df13bae9" className="af-class-core-value-top">
                              <div className="af-class-subtitle-4">03</div>
                              <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d39-df13bae9" className="af-class-subtitle-4">Location</div>
                            </div>
                            <div className="af-class-body-display-4 af-class-small">Identify best location to implement plan.</div>
                          </div>
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d3d-df13bae9" className="af-class-core-value">
                            <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d3e-df13bae9" className="af-class-core-value-top">
                              <div className="af-class-subtitle-4">04</div>
                              <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d41-df13bae9" className="af-class-subtitle-4">Design</div>
                            </div>
                            <div className="af-class-body-display-4 af-class-small">Define and design plan of technical execution.</div>
                          </div>
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d45-df13bae9" className="af-class-verticle-line-2" />
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d46-df13bae9" className="af-class-verticle-line-2" />
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d47-df13bae9" className="af-class-horizontal-line-2" />
                          <div id="w-node-f1e53ab1-5965-ede4-d8f0-7587963f8d48-df13bae9" className="af-class-horizontal-line-2" />
                        </div>
                        <div className="af-class-body-display-4">Together, we will develop FASTER, more ENDURING athletes who compete on the most rigorous levels and win on the global stage.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-wf-section">
                <div className="af-class-wrapper">
                  <div data-w-id="f8995adf-f440-eb1c-b576-c54a6fe6800a" className="af-class-tripple-grid">
                    <div id="w-node-f8995adf-f440-eb1c-b576-c54a6fe6800c-df13bae9" className="af-class-intro-wrapper">
                      <div className="af-class-subtitle-wrapper">
                        <div style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-subtitle">Our team</div>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-large-heading">Our Clients &amp; Athletes.</h1>
                      </div><img src="images/Title-Accent.svg" loading="lazy" alt className="af-class-title-accent af-class-_2" />
                    </div>
                    <div id="w-node-_4aa1e293-2ce7-c7b6-5938-b5dfd439db55-df13bae9" className="af-class-clip">
                      <a style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} href="athletes.html" className="af-class-button w-inline-block">
                        <div className="af-class-button-text">All Athletes</div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="w-dyn-list">
                      <div role="list" className="af-class-collection-list w-dyn-items">
                        <div id="w-node-_23626632-c221-83e4-e0ef-2521551d0bbd-df13bae9" role="listitem" className="af-class-team-collection-item w-dyn-item">
                          <div data-w-id="34f40958-909d-c930-a6c7-43d6f1cd5fa1" style={{WebkitTransform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', MozTransform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', msTransform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', transform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)', opacity: 0}} className="af-class-project-item">
                            <div data-w-id="e1a15f0b-a81e-b2e2-3198-533ed3df2537" className="af-class-project-image">
                              <div data-w-id="34f40958-909d-c930-a6c7-43d6f1cd5fa2" className="af-class-background-image">
                                <div className="af-class-image-overlay af-class-light-overlay" />
                                <div className="af-class-card-circle af-class-overlay1" />
                              </div>
                            </div>
                            <div id="w-node-_34f40958-909d-c930-a6c7-43d6f1cd5fa5-df13bae9" className="af-class-project-card-info">
                              <div className="af-class-project-info-top af-class-team-info">
                                <h3 className="af-class-text-left" />
                                <div className="af-class-subtitle af-class-white af-class-left-text" />
                              </div>
                              <div className="af-class-project-hover-link-wrapper">
                                <div data-w-id="34f40958-909d-c930-a6c7-43d6f1cd5fab" className="af-class-hover-link-wrapper af-class-project-view-link">
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
              <div data-w-id="f08c1eb2-3aea-c216-125c-3d1168acbe68" className="af-class-section-3 af-class-grey af-class-wf-section">
                <div className="af-class-grid-wrapper-3">
                  <div id="w-node-f08c1eb2-3aea-c216-125c-3d1168acbe6a-df13bae9" className="af-class-number-wrapper">
                    <div id="w-node-f08c1eb2-3aea-c216-125c-3d1168acbe6b-df13bae9" className="af-class-number-circle">
                      <div style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.85, 0.85, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(0.85, 0.85, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(0.85, 0.85, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(0.85, 0.85, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-number-circle-background">
                        <div className="af-class-overlay-2 af-class-gradient af-class-dark" />
                        <div className="af-class-testimonial-strip-wrapper af-class-tilted" />
                      </div>
                      <div style={{width: '100%', height: '100%'}} className="af-class-inner-number-circle" />
                      <div style={{width: '100%', height: '100%'}} className="af-class-number-circle-outline" />
                      <div className="af-class-number-circle-content">
                        <div className="af-class-clip-2">
                          <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', opacity: 0}} className="af-class-number">30+</h1>
                        </div>
                        <div className="af-class-clip-2">
                          <div style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(10deg, 10deg)', opacity: 0}} className="af-class-number-title">Unique Testing Metrics</div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-f08c1eb2-3aea-c216-125c-3d1168acbecf-df13bae9" className="af-class-stacked-soon">
                      <div className="af-class-stacked-intro">
                        <div className="af-class-stacked-heading">
                          <div className="af-class-left-intro">
                            <div id="w-node-f08c1eb2-3aea-c216-125c-3d1168acbed5-df13bae9" className="af-class-subtitle">Our unique Performance Strategy</div>
                          </div>
                          <div className="af-class-left-intro af-class-small-width">
                            <h1 id="w-node-f08c1eb2-3aea-c216-125c-3d1168acbed8-df13bae9">Performance Outcomes</h1>
                          </div><img src="images/Title-Accent.svg" loading="lazy" alt className="af-class-title-accent af-class-_4" />
                        </div>
                        <div className="af-class-body-display-3 af-class-dual-paragraph">We have over 30 unique testing metrics directly related to key football performance indicators. These metrics create a measurable path to achieving our goals through an established, specific criteria set. <br />This allows each player to attain their objectives within a certain time frame and bring them to the top of their game. Athletes with increased endurance and speed equates to more championship, higher player value, and increased revenue for agencies, federations, clubs, players, and worldwide brands.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="2db516f2-b446-bb59-0d56-ba4cbbc6a808" className="af-class-section af-class-no-horizontal-padding af-class-wf-section">
                <div className="af-class-grid-wrapper">
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
                  <div id="w-node-f0c63057-7c7c-2a90-b49b-0a201e7e42b3-df13bae9" className="af-class-newsletter-wrapper">
                    <div id="w-node-_86d8087c-f402-31b5-d612-f055e8856137-df13bae9" className="af-class-newsletter-intro">
                      <div>
                        <div className="af-class-subtitle-wrapper">
                          <div className="af-class-subtitle">Schedule a Call</div>
                        </div>
                        <div className="af-class-clip">
                          <h2 className="af-class-large-heading">Let's get to work!</h2>
                        </div>
                      </div>
                      <div id="w-node-_9e302ef9-a044-afc5-3392-3585167ef4fb-df13bae9" className="af-class-checklist">
                        <div className="af-class-checklist-item">
                          <div id="w-node-c401ca72-aae4-9c20-edba-400cc2545a1a-df13bae9" className="af-class-checklist-icon"><img src="images/check24x242x.svg" loading="lazy" width={12} alt /></div>
                          <div id="w-node-_158353d8-f5c3-bf30-52a2-714256d40766-df13bae9" className="af-class-body-display">Schedule a call with us.</div>
                        </div>
                        <div className="af-class-checklist-item">
                          <div id="w-node-fa1f8cec-23d9-cc72-cc5a-6169aabb1732-df13bae9" className="af-class-checklist-icon"><img src="images/check24x242x.svg" loading="lazy" width={12} alt /></div>
                          <div id="w-node-fa1f8cec-23d9-cc72-cc5a-6169aabb1733-df13bae9" className="af-class-body-display">Develop a plan.</div>
                        </div>
                        <div className="af-class-checklist-item">
                          <div id="w-node-_9fb60b98-6b85-1cf8-84f5-4c9583a249af-df13bae9" className="af-class-checklist-icon"><img src="images/check24x242x.svg" loading="lazy" width={12} alt /></div>
                          <div id="w-node-_9fb60b98-6b85-1cf8-84f5-4c9583a249b0-df13bae9" className="af-class-body-display">Train. Grow. Perform.</div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61b5-df13bae9" className="af-class-form-block w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" className="af-class-newsletter-form-wrapper">
                        <div id="w-node-_16d65def-c5d5-fd1d-5298-95653be6a9a3-df13bae9" className="af-class-form-column">
                          <div className="af-class-sticky-services-menu">
                            <div className="af-class-service-menu-list af-class-white"><label className="af-class-radio-item w-radio">
                                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-radio-button w-node-_93871b0e-b4be-09b5-05fe-cb47e8639aea-df13bae9 w-radio-input" /><input type="radio" data-name="Radio" id="radio" name="radio" defaultValue="Radio" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span id="w-node-_93871b0e-b4be-09b5-05fe-cb47e8639aeb-df13bae9" className="af-class-list-item-text w-form-label" htmlFor="radio">Football</span>
                              </label><label className="af-class-radio-item w-radio">
                                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-radio-button w-node-af714f2c-c722-46c7-fb15-8967bc04065b-df13bae9 w-radio-input" /><input type="radio" data-name="Radio 4" id="radio-4" name="radio" defaultValue="Radio" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span id="w-node-af714f2c-c722-46c7-fb15-8967bc04065c-df13bae9" className="af-class-list-item-text w-form-label" htmlFor="radio-4">Track and Field</span>
                              </label><label id="w-node-bd4c12fa-0d2a-1a7a-7e67-7e82535f682e-df13bae9" className="af-class-radio-item w-radio">
                                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-radio-button w-node-bd4c12fa-0d2a-1a7a-7e67-7e82535f682f-df13bae9 w-radio-input" /><input type="radio" data-name="Radio 5" id="radio-5" name="radio" defaultValue="Radio" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span id="w-node-bd4c12fa-0d2a-1a7a-7e67-7e82535f6830-df13bae9" className="af-class-list-item-text w-form-label" htmlFor="radio-5">Other</span>
                              </label></div>
                          </div>
                        </div>
                        <div className="af-class-form-column af-class-right">
                          <div className="af-class-form">
                            <div className="af-class-field-wrapper"><label htmlFor="name" id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61b7-df13bae9" className="af-class-field-label">Name</label><input type="text" className="af-class-text-field af-class-light w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61b9-df13bae9 w-input" maxLength={256} name="name" data-name="Name" placeholder="First name" id="name" /><input type="text" className="af-class-text-field af-class-light w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Last name" id="name-2" /></div>
                            <div className="af-class-field-wrapper"><label htmlFor="email" id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61ba-df13bae9" className="af-class-field-label">Email Address</label><input type="email" className="af-class-text-field af-class-light w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61bc-df13bae9 w-input" maxLength={256} name="email" data-name="Email" placeholder="Your email" id="email" required /></div><input type="submit" defaultValue="Submit" data-wait="Please wait..." id="w-node-_91bc64b8-353b-a94a-b0a2-353d8cfc61bd-df13bae9" className="af-class-submit-button af-class-white w-button" />
                          </div>
                        </div>
                        <div id="w-node-_686199a2-7e08-8c35-0bc2-9fc0b2c1f7c2-df13bae9" className="af-class-list-heading-wrapper">
                          <div className="af-class-subtitle af-class-white">Profession</div>
                        </div>
                      </form>
                      <div className="af-class-utility-message w-form-done">
                        <div className="af-class-success-wrapper af-class-dark">
                          <h2 className="af-class-large-heading">Thank you!</h2>
                          <div className="af-class-body-display af-class-white">An agent will be in touch with you shortly.</div>
                        </div>
                      </div>
                      <div className="af-class-error-message w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-bffc60b2-ad33-2b9a-4184-6b56bb9d8cc8-df13bae9" data-w-id="bffc60b2-ad33-2b9a-4184-6b56bb9d8cc8" className="af-class-dark-cover">
                    <div className="af-class-background-banner af-class-newsletter-banner">
                      <div className="af-class-newsletter-overlay" />
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="b47cdab8-35ce-11bf-c69c-5170190a8704" className="af-class-section-no-sides af-class-clip af-class-hide af-class-wf-section">
                <div className="af-class-grid-wrapper-2">
                  <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8706-df13bae9" className="af-class-verticle-hero-line af-class-middle">
                    <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8707-df13bae9" className="af-class-verticle-line af-class-bottom" />
                    <a id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8708-df13bae9" href="https://calendly.com/" target="_blank" className="af-class-circle-button w-inline-block">
                      <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8709-df13bae9" className="af-class-circle-outline-right">
                        <div className="af-class-circle-outline af-class-right" />
                        <div className="af-class-circle-hover-clip af-class-two">
                          <div className="af-class-circle-outline af-class-right af-class-light" />
                        </div>
                      </div>
                      <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a870d-df13bae9" className="af-class-circle-outline-top">
                        <div className="af-class-circle-outline" />
                        <div className="af-class-circle-hover-clip af-class-one">
                          <div className="af-class-circle-outline af-class-top af-class-light" />
                        </div>
                      </div>
                      <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8711-df13bae9" className="af-class-circle-outline-bottom">
                        <div className="af-class-circle-outline af-class-bottom" />
                        <div className="af-class-circle-hover-clip af-class-one">
                          <div className="af-class-circle-outline af-class-bottom af-class-light" />
                        </div>
                      </div>
                      <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8715-df13bae9" className="af-class-circle-link-text">
                        <div>Schedule a call</div><img src="images/chevron-right24x242x.svg" loading="lazy" id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8718-df13bae9" alt className="af-class-arrow" />
                      </div>
                    </a>
                  </div>
                  <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8719-df13bae9" className="af-class-content-wrapper">
                    <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a871a-df13bae9" className="af-class-action-content">
                      <div className="af-class-hero-intro">
                        <div className="af-class-stacked-title">
                          <h1 className="af-class-xxl-heading-2">Ready to level up?</h1>
                          <div className="af-class-body-display-2 af-class-light">Reach out to us</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-background-wrapper">
                  <div className="af-class-background af-class-action-background">
                    <div className="af-class-overlay" />
                  </div>
                </div>
                <div style={{display: 'flex'}} className="af-class-section-scroll-cover">
                  <div className="af-class-grid-wrapper-2">
                    <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8728-df13bae9" style={{WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-scroll-fill af-class-left" />
                    <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a8729-df13bae9" className="af-class-content-wrapper">
                      <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a872a-df13bae9" style={{WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-scroll-fill af-class-left" />
                      <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a872b-df13bae9" style={{WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-scroll-fill af-class-right">
                        <div className="af-class-verticle-line af-class-dark" />
                      </div>
                    </div>
                    <div id="w-node-b47cdab8-35ce-11bf-c69c-5170190a872d-df13bae9" style={{WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-scroll-fill af-class-right" />
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
                        <a href="athletes.html" className="af-class-menu-list-item af-class-white w-inline-block">
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
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */