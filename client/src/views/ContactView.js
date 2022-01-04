/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611be0c6313fafe90c13baf9'
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
    const proxies = ContactView.Controller !== ContactView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\doyle-performance-group.webflow.css);


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
                      <a href="index.html" className="af-class-brand-2 w-nav-brand"><img src="images/DOYLE-LOGO.svg" loading="lazy" alt /></a>
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
                      <a href="contact.html" data-w-id="496782d7-8ca9-71e3-94b4-cbb44a84663b" aria-current="page" className="af-class-navigation-button w-inline-block w--current">
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
              <div data-w-id="ed18e026-2679-c3d8-da62-56bb6b9e9b76" className="af-class-page-hero af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-inner-page-hero-wrapper">
                    <div id="w-node-_820c470e-2642-280b-4e92-cb88549a75a8-0c13baf9" className="af-class-subtitle af-class-white">Contact us</div>
                    <div id="w-node-ed18e026-2679-c3d8-da62-56bb6b9e9b7c-0c13baf9">
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-one">Let's start</h1>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-two">talking.</h1>
                      </div>
                    </div>
                    <div id="w-node-ed18e026-2679-c3d8-da62-56bb6b9e9b82-0c13baf9" className="af-class-logos-headline">
                      <div className="af-class-subtitle af-class-small af-class-white">Fill out the form below</div>
                      <div className="af-class-horizontal-line af-class-white" />
                    </div>
                  </div>
                  <div data-w-id="ed18e026-2679-c3d8-da62-56bb6b9e9b86" className="af-class-hover-link-wrapper">
                    <a href="#scroll" className="af-class-hover-link w-inline-block"><img src="images/arrow-down24x242x.svg" loading="lazy" width={24} alt className="af-class-scroll-icon" /></a>
                  </div>
                </div>
                <div className="af-class-background-cover">
                  <div className="af-class-hero-background-image af-class-contact-background">
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
              <div id="scroll" data-w-id="08abb744-5a25-175e-8602-d4c23b824838" className="af-class-section af-class-no-verticle-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-page-info-ribbon">
                    <div id="w-node-_78588d14-247f-5076-34c1-c503a9ab4918-0c13baf9" className="af-class-page-info">
                      <div id="w-node-_08abb744-5a25-175e-8602-d4c23b82483b-0c13baf9" className="af-class-banner-items">
                        <div className="af-class-banner-scrolling-wrapper">
                          <div className="af-class-scrolling-text">
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Start the conversation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-no-top-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-project-description-wrapper">
                    <div id="w-node-_0afe1988-388e-b5cb-404e-8a553a0bef5a-0c13baf9" className="af-class-project-description af-class-top-grey-border">
                      <div id="w-node-c1386cff-6b52-7e7b-943b-f01eec93797f-0c13baf9" className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form">
                          <div className="af-class-field-wrapper"><label htmlFor="name" id="w-node-c1386cff-6b52-7e7b-943b-f01eec937981-0c13baf9" className="af-class-field-label">Name</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Your first name" id="name" /><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Your last name" id="name-2" /></div>
                          <div className="af-class-field-wrapper"><label htmlFor="name-3" id="w-node-_5e3db900-a825-6509-a424-cf926f0e51a6-0c13baf9" className="af-class-field-label">Email Address</label><input type="email" className="af-class-text-field w-node-_5e3db900-a825-6509-a424-cf926f0e51a8-0c13baf9 w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Your email" id="name-3" /></div>
                          <div className="af-class-field-wrapper"><label htmlFor="name-4" id="w-node-_9f611142-c9c4-1dbb-5d72-be5bad231d1e-0c13baf9" className="af-class-field-label">Message</label><textarea placeholder="Example Text" maxLength={5000} id="field" name="field" data-name="field" className="af-class-text-field af-class-large w-node-_9ecb47d5-8f4d-56b8-1721-4ed5246ec8ac-0c13baf9 w-input" defaultValue={""} /></div><input type="submit" defaultValue="Submit" data-wait="Please wait..." id="w-node-c1386cff-6b52-7e7b-943b-f01eec937987-0c13baf9" className="af-class-submit-button w-button" />
                        </form>
                        <div className="af-class-utility-message w-form-done">
                          <div className="af-class-success-wrapper">
                            <h3>Thank you!</h3>
                            <div className="af-class-body-display">Your message has been received.</div>
                          </div>
                        </div>
                        <div className="af-class-error-message w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_0afe1988-388e-b5cb-404e-8a553a0bef68-0c13baf9" className="af-class-project-features">
                      <div className="af-class-sticky-services-menu">
                        <div className="af-class-list-heading-wrapper">
                          <h4>Paul Doyle</h4>
                        </div>
                        <div className="af-class-service-menu-list">
                          <a href="mailto:paul@doylesportsperformance.ch?subject=Doyle%20Sports%20Contact" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-e9ec757d-bde5-cfd1-09ea-ee86b7bf3893-0c13baf9" className="af-class-list-item-text">Email<br /></div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-e9ec757d-bde5-cfd1-09ea-ee86b7bf3895-0c13baf9" alt className="af-class-list-item-arrow" />
                          </a>
                          <a href="tel:+001-706-424-2635" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-_829fc5cb-baba-7a42-58e4-097db0e10bb0-0c13baf9" className="af-class-list-item-text">Call</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_829fc5cb-baba-7a42-58e4-097db0e10bb4-0c13baf9" alt className="af-class-list-item-arrow" />
                          </a>
                          <div className="af-class-list-heading-wrapper af-class-_2">
                            <h4> Mike Cunliffe</h4>
                          </div>
                          <a href="mailto:coachmike@doylesportsperformance.ch?subject=Doyle%20Sports%20Contact" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-b5f0f859-f2e3-8e3f-1204-c264ea8fba83-0c13baf9" className="af-class-list-item-text">Email</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-b5f0f859-f2e3-8e3f-1204-c264ea8fba85-0c13baf9" alt className="af-class-list-item-arrow" />
                          </a>
                          <a href="tel:+001-206-683-2071" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-b4b45dd1-ad01-cdf8-6bdc-c53c6262e43f-0c13baf9" className="af-class-list-item-text">Call</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-b4b45dd1-ad01-cdf8-6bdc-c53c6262e441-0c13baf9" alt className="af-class-list-item-arrow" />
                          </a>
                        </div>
                      </div>
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
                        <a href="contact.html" aria-current="page" className="af-class-menu-list-item af-class-white w-inline-block w--current">
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

export default ContactView

/* eslint-enable */