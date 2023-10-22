import React from "react"
import PropTypes from "prop-types"
import { IS_PRODUCTION } from "./utils/constants"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {IS_PRODUCTION && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.GATSBY_GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.GATSBY_GA_TRACKING_ID}');`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: ` var initOpts = {
                      projectKey: "${process.env.GATSBY_OR_PROJECT_KEY}",
                      ingestPoint: "https://or.aftershock.agency/ingest",
                      defaultInputMode: 0,
                      obscureTextNumbers: false,
                      obscureTextEmails: false,
                      obscureInputEmails: false,
                      network: {
                        capturePayload: true
                      } 
                    };
                    var startOpts = { userID: "" };
                    (function(A,s,a,y,e,r){
                      r=window.OpenReplay=[e,r,y,[s-1, e]];
                      s=document.createElement('script');s.src=A;s.async=!a;
                      document.getElementsByTagName('head')[0].appendChild(s);
                      r.start=function(v){r.push([0])};
                      r.stop=function(v){r.push([1])};
                      r.setUserID=function(id){r.push([2,id])};
                      r.setUserAnonymousID=function(id){r.push([3,id])};
                      r.setMetadata=function(k,v){r.push([4,k,v])};
                      r.event=function(k,p,i){r.push([5,k,p,i])};
                      r.issue=function(k,p){r.push([6,k,p])};
                      r.isActive=function(){return false};
                      r.getSessionToken=function(){};
                    })("//static.openreplay.com/9.0.0/openreplay.js",1,0,initOpts,startOpts);`,
              }}
            />
          </>
        )}
        {!IS_PRODUCTION && process.env.GATSBY_MARKER_PROJECT_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
               window.markerConfig = {
              project: '${process.env.GATSBY_MARKER_PROJECT_ID}', 
              source: 'snippet'
            };`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);`,
              }}
            />
          </>
        )}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
