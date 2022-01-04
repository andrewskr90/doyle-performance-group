/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class SearchView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/SearchController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SearchView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611be0c6313faf666e13bb02'
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
    const proxies = SearchView.Controller !== SearchView ? transformProxies(this.props.children) : {

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
            <div data-collapse="none" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
              <div className="af-class-wrapper af-class-navbar-wrapper">
                <div className="af-class-left-navbar">
                  <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/douyle-dark.svg" loading="lazy" alt className="af-class-img-100" /></a>
                  <div data-w-id="17c43587-c790-b4d8-1466-5f40336b9d4c" className="af-class-full-menu-button">
                    <div data-w-id="17c43587-c790-b4d8-1466-5f40336b9d4d" data-animation-type="lottie" data-src="documents/menu-nav.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="2.875" data-duration={0} data-ix2-initial-state={0} className="af-class-menu-lottie" />
                  </div>
                </div>
                <div className="af-class-menu-wrapper">
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <div className="af-class-navigation-links">
                      <a href="#" className="af-class-nav-link w-inline-block">
                        <div className="af-class-button-text">Services</div>
                        <div className="af-class-nav-link-hover-button" />
                      </a>
                      <a href="#" className="af-class-nav-link w-inline-block">
                        <div className="af-class-button-text">Projects</div>
                        <div className="af-class-nav-link-hover-button" />
                      </a>
                      <a href="contact.html" className="af-class-nav-link af-class-bottom w-inline-block">
                        <div className="af-class-button-text">Contact</div>
                        <div className="af-class-nav-link-hover-button" />
                      </a>
                    </div>
                  </nav>
                  <div className="w-nav-button">
                    <div className="w-icon-nav-menu" />
                  </div>
                  <div className="af-class-navigation-cover" />
                </div>
                <div className="af-class-mega-menu">
                  <div className="af-class-large-menu-wrapper">
                    <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d5b-336b9d43" className="af-class-projects-search-wrapper">
                      <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d5d-336b9d43" className="af-class-search-wrapper">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Search projects…" id="search" required /><input type="submit" defaultValue="Search" className="af-class-search-button w-button" /></form>
                      </div>
                      <div id="w-node-_6fe66bf6-22c6-7c4b-e980-c09ffd4740ae-336b9d43" className="af-class-mega-social-wrapper">
                        <div className="af-class-team-social-wrapper">
                          <a href="https://www.instagram.com/tycreated/" target="_blank" className="af-class-team-social-icon af-class-outline w-inline-block"><img src="images/IG.svg" loading="lazy" alt /></a>
                          <a href="https://twitter.com/Tycreated" target="_blank" className="af-class-team-social-icon af-class-outline w-inline-block"><img src="images/facebook-f.svg" loading="lazy" alt /></a>
                          <a href="https://twitter.com/Tycreated" target="_blank" className="af-class-team-social-icon af-class-outline w-inline-block"><img src="images/linkedin.svg" loading="lazy" alt /></a>
                          <a href="https://twitter.com/Tycreated" target="_blank" className="af-class-team-social-icon af-class-outline w-inline-block"><img src="images/YT.svg" loading="lazy" alt /></a>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_16738520-6de8-1fcc-6cbc-d48e45d42b91-336b9d43" className="af-class-mega-category-list">
                      <div className="af-class-stacked-description af-class-horizontal">
                        <div id="w-node-_16738520-6de8-1fcc-6cbc-d48e45d42b93-336b9d43" className="af-class-subtitle">Our team</div>
                        <a id="w-node-f4f0ce64-1f82-9e16-20fb-882e6946b843-336b9d43" href="athletes.html" className="af-class-button af-class-grey-outline af-class-small w-inline-block">
                          <div className="af-class-button-text">About us</div>
                        </a>
                      </div>
                      <div>
                        <div className="w-dyn-list">
                          <div role="list" className="af-class-mega-menu-list-wrapper w-dyn-items">
                            <div role="listitem" className="af-class-menu-collection-list-item w-dyn-item">
                              <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                                <div className="af-class-stacked-description af-class-horizontal">
                                  <div className="af-class-list-item-text" />
                                  <div id="w-node-_7a338548-6995-26a0-d4df-2c2b4c59a395-4c59a38f" className="af-class-subtitle" />
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d61-336b9d43" className="af-class-mega-category-list af-class-middle">
                      <div className="af-class-stacked-description af-class-horizontal">
                        <div id="w-node-_17c43587-c790-b4d8-1466-5f40336b9d63-336b9d43" className="af-class-subtitle">Project Categories</div>
                        <a id="w-node-aea9f59c-b439-2797-db5e-6ba2ebbcded2-336b9d43" href="#" className="af-class-button af-class-grey-outline af-class-small w-inline-block">
                          <div className="af-class-button-text">View all</div>
                        </a>
                      </div>
                      <div>
                        <div className="w-dyn-list">
                          <div role="list" className="af-class-mega-menu-list-wrapper w-dyn-items">
                            <div role="listitem" className="af-class-menu-collection-list-item w-dyn-item">
                              <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                                <div className="af-class-stacked-description">
                                  <div id="w-node-e8411f27-0bc9-1e9f-ead1-b785bda240e5-bda240e0" className="af-class-list-item-text">This is some text inside of a div block.</div>
                                </div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-e8411f27-0bc9-1e9f-ead1-b785bda240e6-bda240e0" alt className="af-class-list-item-arrow" />
                              </a>
                            </div>
                          </div>
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-e16c4357-004d-8209-e100-36bb04545bd4-336b9d43" className="af-class-mega-category-list">
                      <div className="af-class-stacked-description af-class-horizontal">
                        <div id="w-node-e16c4357-004d-8209-e100-36bb04545bd6-336b9d43" className="af-class-subtitle">News Categories</div>
                        <a id="w-node-_1e0f0e3b-c735-de45-d3e2-0c9fcf80a649-336b9d43" href="#" className="af-class-button af-class-grey-outline af-class-small w-inline-block">
                          <div className="af-class-button-text">View all</div>
                        </a>
                      </div>
                      <div>
                        <div className="w-dyn-list">
                          <div role="list" className="af-class-mega-menu-list-wrapper w-dyn-items">
                            <div role="listitem" className="af-class-menu-collection-list-item w-dyn-item">
                              <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                                <div className="af-class-stacked-description">
                                  <div className="af-class-list-item-text">This is some text inside of a div block.</div>
                                </div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_4541705a-de97-7f82-8818-9c9145464680-4546467a" alt className="af-class-list-item-arrow" />
                              </a>
                            </div>
                          </div>
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-d364a0a1-eed2-cc02-8c38-c72be241387a-336b9d43" className="af-class-tablet-mobile-menu">
                      <div data-hover="false" data-delay={1300} id="w-node-_742bc615-eb92-0d24-5678-32641c325156-336b9d43" className="af-class-dropdown af-class-top w-dropdown">
                        <div className="af-class-dropdown-toggle w-dropdown-toggle">
                          <div className="af-class-body-display af-class-dark">Our team</div>
                          <div data-w-id="310e10b1-84f0-48f0-3347-482d442c2ed8" data-animation-type="lottie" data-src="documents/dropdown-easey.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration={2} data-duration={0} data-ix2-initial-state={50} className="af-class-dropdown-lottie" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <div className="w-dyn-list">
                            <div role="list" className="af-class-mega-menu-list-wrapper w-dyn-items">
                              <div role="listitem" className="af-class-menu-collection-list-item w-dyn-item">
                                <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                                  <div className="af-class-stacked-description af-class-horizontal">
                                    <div className="af-class-list-item-text" />
                                    <div id="w-node-_7a338548-6995-26a0-d4df-2c2b4c59a395-4c59a38f" className="af-class-subtitle" />
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                          <a href="athletes.html" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                            <div>About us</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-f6a0a796-4f1d-5758-490b-395b2a23adce-336b9d43" alt className="af-class-list-item-arrow" />
                          </a>
                        </nav>
                      </div>
                      <div data-hover="false" data-delay={1300} id="w-node-e7216152-f701-971a-aa13-8b0d399ea0a2-336b9d43" className="af-class-dropdown w-dropdown">
                        <div className="af-class-dropdown-toggle w-dropdown-toggle">
                          <div className="af-class-body-display af-class-dark">Project categories</div>
                          <div data-w-id="26ed9205-d756-8b1d-71b5-e2d2bc505b69" data-animation-type="lottie" data-src="documents/dropdown-easey.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration={2} data-duration={0} data-ix2-initial-state={50} className="af-class-dropdown-lottie" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <div className="w-dyn-list">
                            <div role="list" className="af-class-mega-menu-list-wrapper w-dyn-items">
                              <div role="listitem" className="af-class-menu-collection-list-item w-dyn-item">
                                <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                                  <div className="af-class-stacked-description">
                                    <div id="w-node-e8411f27-0bc9-1e9f-ead1-b785bda240e5-bda240e0" className="af-class-list-item-text">This is some text inside of a div block.</div>
                                  </div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-e8411f27-0bc9-1e9f-ead1-b785bda240e6-bda240e0" alt className="af-class-list-item-arrow" />
                                </a>
                              </div>
                            </div>
                            <div className="w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                          <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                            <div>View all</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_169c8dac-dcf9-9d77-b5a0-6fe2bb220d51-336b9d43" alt className="af-class-list-item-arrow" />
                          </a>
                        </nav>
                      </div>
                      <div data-hover="false" data-delay={1300} id="w-node-fdd5de7a-6baa-18bc-4fc4-17f9de14bff9-336b9d43" className="af-class-dropdown w-dropdown">
                        <div className="af-class-dropdown-toggle w-dropdown-toggle">
                          <div className="af-class-body-display af-class-dark">News categories</div>
                          <div data-w-id="7c88412b-5653-be4c-c04b-15b269f63e7d" data-animation-type="lottie" data-src="documents/dropdown-easey.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration={2} data-duration={0} data-ix2-initial-state={50} className="af-class-dropdown-lottie" />
                        </div>
                        <nav className="af-class-dropdown-list w-dropdown-list">
                          <div className="w-dyn-list">
                            <div role="list" className="af-class-mega-menu-list-wrapper w-dyn-items">
                              <div role="listitem" className="af-class-menu-collection-list-item w-dyn-item">
                                <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                                  <div className="af-class-stacked-description">
                                    <div className="af-class-list-item-text">This is some text inside of a div block.</div>
                                  </div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_4541705a-de97-7f82-8818-9c9145464680-4546467a" alt className="af-class-list-item-arrow" />
                                </a>
                              </div>
                            </div>
                            <div className="w-dyn-empty">
                              <div>No items found.</div>
                            </div>
                          </div>
                          <a href="#" className="af-class-post-list-item af-class-category-list-item w-inline-block">
                            <div>View all</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-fbb98bb2-0970-908c-f9a3-aa45d34eaea4-336b9d43" alt className="af-class-list-item-arrow" />
                          </a>
                        </nav>
                      </div>
                    </div>
                    <div id="w-node-be6e1212-c8c8-b564-9d2f-b92422ca9045-336b9d43" className="af-class-tablet-mobile-nav-links">
                      <div className="af-class-navigation-links">
                        <a href="#" className="af-class-nav-link w-inline-block">
                          <div className="af-class-button-text">Services</div>
                          <div className="af-class-nav-link-hover-button" />
                        </a>
                        <a href="#" className="af-class-nav-link w-inline-block">
                          <div className="af-class-button-text">Projects</div>
                          <div className="af-class-nav-link-hover-button" />
                        </a>
                        <a href="contact.html" className="af-class-nav-link af-class-bottom w-inline-block">
                          <div className="af-class-button-text">Contact</div>
                          <div className="af-class-nav-link-hover-button" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-mega-menu-overlay" />
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
            <div className="af-class-more-projects-wrapper af-class-in-page">
              <div className="af-class-project-gallery-wrapper">
                <div className="af-class-grid-wrapper af-class-projects-search">
                  <div id="w-node-_397244f1-6d58-8f51-019c-f7e5a2b1e41a-f9270e17" className="af-class-project-discovery-wrapper">
                    <div id="w-node-_849e754c-a02b-b240-b303-2bf5e8a0db81-f9270e17" className="af-class-project-discovery-cover af-class-two" />
                    <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5e4-f9270e17" className="af-class-gallery-items-wrapper">
                      <div className="af-class-project-discovery-list">
                        <div className="af-class-gallery-heading">
                          <h3 className="af-class-heading-2">Explore our work</h3>
                        </div>
                        <div id="scrollbar" className="af-class-project-search-collection w-dyn-list">
                          <div role="list" className="af-class-project-search-items w-dyn-items">
                            <div role="listitem" className="af-class-project-search-collection-item w-dyn-item">
                              <a href="#" className="af-class-menu-list-item af-class-discovery-item w-inline-block">
                                <div id="w-node-c47dbc6c-9b93-d53a-3ac5-94688c374a85-f9270e17" className="af-class-stacked-description af-class-short">
                                  <div className="af-class-list-item-text af-class-subtitle af-class-grey">This is some text inside of a div block.</div>
                                  <div className="af-class-list-item-text">This is some text inside of a div block.</div>
                                </div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-_6ad8919c-2309-2a37-80a2-1e0756464dfe-f9270e17" alt className="af-class-list-item-arrow" />
                              </a>
                            </div>
                          </div>
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_24909537-2aef-fa73-cf08-5d19c7632e15-f9270e17" className="af-class-project-discovery-cover af-class-one" />
                  <div className="af-class-project-gallery-overlay" />
                </div>
                <div className="af-class-more-projects-wrapper">
                  <div className="af-class-grid-wrapper af-class-fixed">
                    <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5f0-f9270e17" data-w-id="a30333d2-032c-03e5-f1b1-a5d31eb7f5f0" className="af-class-fly-out-button af-class-on-click">
                      <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5f1-f9270e17" className="af-class-projects-lottie-wrapper">
                        <div data-w-id="a30333d2-032c-03e5-f1b1-a5d31eb7f5f2" data-animation-type="lottie" data-src="documents/Project-open-dropdown.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="2.4791666666666665" data-duration={0} data-ix2-initial-state={0} className="af-class-projects-lottie" />
                      </div>
                      <div id="w-node-a30333d2-032c-03e5-f1b1-a5d31eb7f5f3-f9270e17" className="af-class-subtitle">Discover projects</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-grid-wrapper af-class-project-discovery-grid">
                <div id="w-node-c1267971-e98a-4887-2b61-4f4973f4569f-f9270e17" className="af-class-discovery-button-wrapper">
                  <div id="w-node-_93ff6921-d28d-6640-4312-da6eaaed889e-f9270e17" className="af-class-fly-out-button-wrapper">
                    <div data-w-id="fc177a8e-c247-e188-8355-4c56f9270e19" className="af-class-fly-out-button af-class-off-click">
                      <div id="w-node-fc177a8e-c247-e188-8355-4c56f9270e1a-f9270e17" className="af-class-projects-lottie-wrapper">
                        <div data-w-id="fc177a8e-c247-e188-8355-4c56f9270e1b" data-animation-type="lottie" data-src="documents/Project-open-dropdown.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="2.4791666666666665" data-duration={0} data-ix2-initial-state={0} className="af-class-projects-lottie" />
                      </div>
                      <div id="w-node-fc177a8e-c247-e188-8355-4c56f9270e1c-f9270e17" className="af-class-subtitle">Discover projects</div>
                    </div>
                  </div>
                </div>
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
              <div data-w-id="ff11f385-19e7-2610-e10a-74658e22583b" className="af-class-page-hero af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-inner-page-hero-wrapper">
                    <div id="w-node-ff11f385-19e7-2610-e10a-74658e22583e-6e13bb02">
                      <div className="af-class-subtitle af-class-white">Search NSIDE</div>
                    </div>
                    <div id="w-node-ff11f385-19e7-2610-e10a-74658e225841-6e13bb02" className="af-class-search-results-info">
                      <div>
                        <div className="af-class-clip">
                          <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-one">Better than google</h1>
                        </div>
                        <div className="af-class-clip">
                          <h1 style={{WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 10deg)', opacity: 0}} className="af-class-xxl-heading af-class-two">kind of search.</h1>
                        </div>
                      </div>
                      <form action="/search" className="af-class-large-search-wrapper w-form"><input type="search" className="af-class-large-search-input w-input" maxLength={256} name="query" placeholder="Search…" id="search" required /><input type="submit" defaultValue="Search" className="af-class-large-search-button w-button" /></form>
                    </div>
                    <div id="w-node-ff11f385-19e7-2610-e10a-74658e225846-6e13bb02">
                      <div className="af-class-logos-headline">
                        <div className="af-class-subtitle af-class-small af-class-white">Search results</div>
                        <div className="af-class-horizontal-line af-class-white" />
                      </div>
                    </div>
                  </div>
                  <div data-w-id="ff11f385-19e7-2610-e10a-74658e22584b" className="af-class-hover-link-wrapper">
                    <a href="#scroll" className="af-class-hover-link w-inline-block"><img src="images/arrow-down24x242x.svg" loading="lazy" width={24} alt className="af-class-scroll-icon" /></a>
                  </div>
                </div>
                <div className="af-class-background-cover">
                  <div className="af-class-hero-background-image af-class-search-background">
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
              </div>
              <div id="scroll" data-w-id="f401a23e-7b45-ba45-9d27-4acdd5da1d75" className="af-class-section af-class-no-verticle-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-page-info-ribbon">
                    <div id="w-node-f401a23e-7b45-ba45-9d27-4acdd5da1d88-6e13bb02" className="af-class-page-info">
                      <div id="w-node-f401a23e-7b45-ba45-9d27-4acdd5da1d78-6e13bb02" className="af-class-banner-items">
                        <div className="af-class-banner-scrolling-wrapper">
                          <div className="af-class-scrolling-text">
                            <div className="af-class-subtitle">You searched, we showed results</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">You searched, we showed results</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">You searched, we showed results</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">You searched, we showed results</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">You searched, we showed results</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">You searched, we showed results</div>
                            <div className="af-class-dark-dot" />
                            <div className="af-class-subtitle">You searched, we showed results</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-no-top-padding af-class-wf-section">
                <div className="af-class-wrapper">
                  <div className="af-class-tripple-grid">
                    <div id="w-node-_01c4e3cf-0ca8-0926-bf92-4bf4daeb8ca0-6e13bb02" className="af-class-search-results">
                      <div className="af-class-results-help-wrapper">
                        <div className="af-class-body-display af-class-large af-class-white">Need help finding something?</div>
                        <a id="w-node-_9a966d75-8ba6-8c66-a053-3fb940aae614-6e13bb02" href="contact.html" className="af-class-button af-class-solid-white w-inline-block">
                          <div className="af-class-button-text">Contact Us</div>
                        </a>
                      </div>
                    </div>
                    <div id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad0c-6e13bb02">
                      <div className="af-class-sticky-services-menu">
                        <div className="af-class-list-heading-wrapper">
                          <div className="af-class-subtitle">Quick links</div>
                        </div>
                        <div className="af-class-service-menu-list">
                          <a href="https://calendly.com/" target="_blank" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad13-6e13bb02" className="af-class-list-item-text">Schedule a meeting</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad15-6e13bb02" alt className="af-class-list-item-arrow" />
                          </a>
                          <a href="mailto:info@template.com" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad17-6e13bb02" className="af-class-list-item-text">info@template.com</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad19-6e13bb02" alt className="af-class-list-item-arrow" />
                          </a>
                          <a href="tel:+15555555555" className="af-class-menu-list-item w-inline-block">
                            <div id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad1b-6e13bb02" className="af-class-list-item-text">(555) 555-5555</div><img src="images/arrow-right48x482x.svg" loading="lazy" id="w-node-b22aeac6-9557-5b9b-37e1-4e65fd78ad1d-6e13bb02" alt className="af-class-list-item-arrow" />
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

export default SearchView

/* eslint-enable */