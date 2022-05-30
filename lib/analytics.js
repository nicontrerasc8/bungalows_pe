export const pageview = (url) => {
     if (window && window.gtag) {
         window.gtag('config', 'G-H12YR0ZNF9', {
             page_path: url,
         })
     }
 }
 
 export const event = ({ action, params }) => {
     window.gtag('event', action, params)
 }