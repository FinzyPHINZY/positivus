import { BRAND_LOGOS } from '../constants'

const BrandsCarousel = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <div className="flex space-x-12 justify-between items-center animate-marquee hover:pause-marquee">
        {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
          <img src={logo} alt="" key={i} loading="lazy" />
        ))}
      </div>
    </div>
  )
}

export default BrandsCarousel
