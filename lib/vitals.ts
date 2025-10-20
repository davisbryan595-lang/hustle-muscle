import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export function reportWebVitals() {
  getCLS(console.log)
  getFID(console.log)
  getFCP(console.log)
  getLCP(console.log)
  getTTFB(console.log)
}

export function sendToAnalytics(metric: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    const page_path = window.location.pathname
    window.gtag.event(metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
      page_path: page_path,
    })
  }
}
