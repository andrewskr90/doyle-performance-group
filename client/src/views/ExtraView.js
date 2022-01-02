/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ExtraView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ExtraController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ExtraView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611eb65e2eb75fc4ed40bab2'
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
    const proxies = ExtraView.Controller !== ExtraView ? transformProxies(this.props.children) : {

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
          <div>
            <div className="af-class-section af-class-no-verticle-padding af-class-dark af-class-wf-section">
              <div className="af-class-wrapper">
                <div className="af-class-testimonial-wrapper">
                  <div data-delay={4000} data-animation="fade" className="af-class-testimonial-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="true" data-autoplay-limit={0} data-nav-spacing={3} data-duration={0} data-infinite="true">
                    <div className="w-slider-mask">
                      <div className="af-class-testimonial-slide w-slide">
                        <div className="af-class-testimonial-content">
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6203c-ed40bab2" className="af-class-testimonial-column af-class-testimonial-image">
                            <div className="af-class-background-image af-class-testimonial-003">
                              <div className="af-class-image-overlay" />
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6203f-ed40bab2" className="af-class-testimonial-column af-class-testimonial-name">
                            <div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-one">Samantha</h1>
                              </div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-two">Vohnhale</h1>
                              </div>
                            </div>
                            <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62047-ed40bab2" className="af-class-clip">
                              <div className="af-class-subtitle af-class-white">San Francisco, California</div>
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6204a-ed40bab2" className="af-class-testimonial-column af-class-testimonial-description">
                            <div className="af-class-clip">
                              <div className="af-class-body-display af-class-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br /><br />Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-testimonial-slide w-slide">
                        <div className="af-class-testimonial-content">
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62053-ed40bab2" className="af-class-testimonial-column af-class-testimonial-image">
                            <div className="af-class-background-image af-class-testimonial-004">
                              <div className="af-class-image-overlay" />
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62056-ed40bab2" className="af-class-testimonial-column af-class-testimonial-name">
                            <div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-one">Wilson</h1>
                              </div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-two">Tomales</h1>
                              </div>
                            </div>
                            <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6205e-ed40bab2" className="af-class-clip">
                              <div className="af-class-subtitle af-class-white">New York, New York</div>
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62061-ed40bab2" className="af-class-testimonial-column af-class-testimonial-description">
                            <div className="af-class-clip">
                              <div className="af-class-body-display af-class-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br /><br />Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-testimonial-slide w-slide">
                        <div className="af-class-testimonial-content">
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6206a-ed40bab2" className="af-class-testimonial-column af-class-testimonial-image">
                            <div className="af-class-background-image af-class-testimonial-001">
                              <div className="af-class-image-overlay" />
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6206d-ed40bab2" className="af-class-testimonial-column af-class-testimonial-name">
                            <div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-one">Tammy</h1>
                              </div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-two">Georgeon</h1>
                              </div>
                            </div>
                            <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62075-ed40bab2" className="af-class-clip">
                              <div className="af-class-subtitle af-class-white">Miami, Florida</div>
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62078-ed40bab2" className="af-class-testimonial-column af-class-testimonial-description">
                            <div className="af-class-clip">
                              <div className="af-class-body-display af-class-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br /><br />Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-testimonial-slide w-slide">
                        <div className="af-class-testimonial-content">
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62081-ed40bab2" className="af-class-testimonial-column af-class-testimonial-image">
                            <div className="af-class-background-image af-class-testimonial-005">
                              <div className="af-class-image-overlay" />
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62084-ed40bab2" className="af-class-testimonial-column af-class-testimonial-name">
                            <div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-one">Emily</h1>
                              </div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-two">Camphon</h1>
                              </div>
                            </div>
                            <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6208c-ed40bab2" className="af-class-clip">
                              <div className="af-class-subtitle af-class-white">Austin, Texas</div>
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6208f-ed40bab2" className="af-class-testimonial-column af-class-testimonial-description">
                            <div className="af-class-clip">
                              <div className="af-class-body-display af-class-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br /><br />Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-testimonial-slide w-slide">
                        <div className="af-class-testimonial-content">
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc62098-ed40bab2" className="af-class-testimonial-column af-class-testimonial-image">
                            <div className="af-class-background-image af-class-testimonial-002">
                              <div className="af-class-image-overlay" />
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc6209b-ed40bab2" className="af-class-testimonial-column af-class-testimonial-name">
                            <div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-one">Cassie</h1>
                              </div>
                              <div className="af-class-clip">
                                <h1 className="af-class-large-heading af-class-two">Shamath</h1>
                              </div>
                            </div>
                            <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc620a3-ed40bab2" className="af-class-clip">
                              <div className="af-class-subtitle af-class-white">Los Angeles, California</div>
                            </div>
                          </div>
                          <div id="w-node-_72c89d68-90e9-9420-bdde-f354acc620a6-ed40bab2" className="af-class-testimonial-column af-class-testimonial-description">
                            <div className="af-class-clip">
                              <div className="af-class-body-display af-class-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.<br /><br />Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-testimonial-arrow w-slider-arrow-left">
                      <div className="af-class-rotate-text af-class-no-rotate-on-mobile">Previous</div>
                    </div>
                    <div className="af-class-testimonial-arrow af-class-right-arrow w-slider-arrow-right">
                      <div className="af-class-rotate-text af-class-no-rotate-on-mobile">Next</div>
                    </div>
                    <div className="af-class-slider-dots w-slider-nav w-round" />
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
            <div data-w-id="663b41c8-df9c-1aac-3ee5-9572705a24e1" className="af-class-section af-class-video-section af-class-wf-section">
              <div className="af-class-wrapper">
                <div className="af-class-dual-wrapper">
                  <div className="af-class-video-info">
                    <div id="w-node-_663b41c8-df9c-1aac-3ee5-9572705a24e5-ed40bab2">
                      <div className="af-class-subtitle af-class-white">About DPG Switzerland</div>
                    </div>
                    <div className="af-class-client-quote">
                      <h2 className="af-class-large-heading">Through a unique approach of integrating best practices from world class Track &amp; Field and Football methodologies, we have architected the future of football athletic development and conditioning.</h2>
                      <div className="af-class-client-quote-credit">
                        <div className="af-class-subtitle af-class-white">JESSICA POINT, CEO</div>
                      </div>
                    </div>
                    <div data-w-id="663b41c8-df9c-1aac-3ee5-9572705a24ee" className="af-class-hover-link-wrapper af-class-video-link-wrapper">
                      <a href="#" className="af-class-hover-link w-inline-block w-lightbox"><img src="images/play24x242x.svg" loading="lazy" width={24} alt className="af-class-scroll-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-background-cover">
                <div className="af-class-background-banner af-class-video-banner">
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
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ExtraView

/* eslint-enable */