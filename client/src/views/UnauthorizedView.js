/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("/[?&]e=1(&|$)/.test(document.location.search)&&(document.querySelector(\".w-password-page.w-form-fail\").style.display=\"block\");"), isAsync: false },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611be0c6313faf187b13baf6'
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
    const proxies = UnauthorizedView.Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

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
            <div className="af-class-password-hero">
              <div className="af-class-background-cover">
                <div className="af-class-hero-background-image af-class-password-background">
                  <div className="af-class-image-overlay" />
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
              <div className="af-class-wrapper w-password-page w-form">
                <form action="/.wf_auth" method="post" className="af-class-inner-page-hero-wrapper w-password-page">
                  <div id="w-node-fbfab365-c38f-1be6-6e51-32f69bada7bf-7b13baf6">
                    <div className="af-class-subtitle af-class-white">Protected page</div>
                  </div>
                  <div id="w-node-fbfab365-c38f-1be6-6e51-32f69bada7c2-7b13baf6" className="af-class-search-results-info">
                    <div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-one">This page is</h1>
                      </div>
                      <div className="af-class-clip">
                        <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-two">protected.</h1>
                      </div>
                    </div>
                    <div className="af-class-large-search-wrapper"><input type="password" className="af-class-large-search-input w-password-page w-input" autofocus="true" maxLength={256} name="pass" data-name="field" placeholder="Enter your password" id="pass" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-large-search-button w-password-page w-button" /></div>
                  </div>
                  <div className="w-password-page w-form-fail">
                    <div>Incorrect password. Please try again.</div>
                  </div>
                  <div id="w-node-fbfab365-c38f-1be6-6e51-32f69bada7ce-7b13baf6" className="af-class-logos-headline">
                    <div className="af-class-subtitle af-class-small af-class-white">Looking for a different page? Find relevant pages below.</div>
                    <div className="af-class-horizontal-line af-class-white" />
                  </div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script">
                  </div>
                </form>
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
              <div id="scroll" data-w-id="2f63b0aa-4d8d-1fa1-5a06-4ca21859a800" className="af-class-section af-class-no-verticle-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-page-info-ribbon">
                    <div id="w-node-_2f63b0aa-4d8d-1fa1-5a06-4ca21859a81f-7b13baf6" className="af-class-page-info">
                      <div id="w-node-_2f63b0aa-4d8d-1fa1-5a06-4ca21859a803-7b13baf6" className="af-class-banner-items">
                        <div className="af-class-banner-scrolling-wrapper">
                          <div className="af-class-scrolling-text">
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">Choose a page below</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-services-grid">
                    <div className="af-class-card-hover-item">
                      <div className="af-class-card-circle" />
                      <a href="index.html" className="af-class-minimal-card w-inline-block">
                        <div className="af-class-category-description">
                          <div className="af-class-subtitle">Home</div>
                          <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                      </a>
                    </div>
                    <div className="af-class-card-hover-item">
                      <div className="af-class-card-circle" />
                      <a href="athletes.html" className="af-class-minimal-card w-inline-block">
                        <div className="af-class-category-description">
                          <div className="af-class-subtitle">Team</div>
                          <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                      </a>
                    </div>
                    <div className="af-class-card-hover-item">
                      <div className="af-class-card-circle" />
                      <a href="#" className="af-class-minimal-card w-inline-block">
                        <div className="af-class-category-description">
                          <div className="af-class-subtitle">Projects</div>
                          <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                      </a>
                    </div>
                    <div className="af-class-card-hover-item af-class-no-top-border">
                      <div className="af-class-card-circle" />
                      <a href="#" className="af-class-minimal-card w-inline-block">
                        <div className="af-class-category-description">
                          <div className="af-class-subtitle">Services</div>
                          <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                      </a>
                    </div>
                    <div className="af-class-card-hover-item af-class-no-top-border">
                      <div className="af-class-card-circle" />
                      <a href="#" className="af-class-minimal-card w-inline-block">
                        <div className="af-class-category-description">
                          <div className="af-class-subtitle">News</div>
                          <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                      </a>
                    </div>
                    <div className="af-class-card-hover-item af-class-no-top-border">
                      <div className="af-class-card-circle" />
                      <a href="contact.html" className="af-class-minimal-card w-inline-block">
                        <div className="af-class-category-description">
                          <div className="af-class-subtitle">Contact</div>
                          <div className="af-class-body-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                      </a>
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

export default UnauthorizedView

/* eslint-enable */