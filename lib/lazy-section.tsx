import dynamic from 'next/dynamic'

export const lazyAboutSection = dynamic(() => import('@/components/about-section'), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})

export const lazyServicesSection = dynamic(() => import('@/components/services-section'), {
  loading: () => <div className="py-20 bg-gray-950" />,
  ssr: true,
})

export const lazyGallerySection = dynamic(() => import('@/components/gallery-section'), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})

export const lazyPricingSection = dynamic(() => import('@/components/pricing-section'), {
  loading: () => <div className="py-20 bg-gray-950" />,
  ssr: true,
})

export const lazyBookingSection = dynamic(() => import('@/components/booking-section'), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})
