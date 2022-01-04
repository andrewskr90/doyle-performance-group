/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=611be0c6313faf2b4613badf").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class DetailInstagramFeedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/DetailInstagramFeedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailInstagramFeedView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '611fe44c17bd3d1bbb52e219'
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
    const proxies = DetailInstagramFeedView.Controller !== DetailInstagramFeedView ? transformProxies(this.props.children) : {

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
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default DetailInstagramFeedView

/* eslint-enable */