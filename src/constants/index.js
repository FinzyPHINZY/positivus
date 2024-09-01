import amazonLogo from '../assets/amazon.svg'
import dribbleLogo from '../assets/dribble.svg'
import hubSpotLogo from '../assets/hubspot.svg'
import notionLogo from '../assets/notion.svg'
import netFlixLogo from '../assets/netflix.svg'
import zoomLogo from '../assets/zoom.svg'
import seoImg from '../assets/seo.svg'
import payperclickImg from '../assets/payperclick.svg'
import socialmarketingImg from '../assets/socialmediamarketing.svg'
import emailmarketing from '../assets/emailmarketing.svg'
import contentcreationImg from '../assets/contentcreation.svg'
import analyticsImg from '../assets/analysis.svg'

export const NAV_MENU_ITEMS = [
  {
    name: 'About us',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Use Cases',
    href: '#use-cases',
  },
  {
    name: 'Team',
    href: '#team',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
]

export const BRAND_LOGOS = [
  amazonLogo,
  dribbleLogo,
  hubSpotLogo,
  notionLogo,
  netFlixLogo,
  zoomLogo,
]

export const SERVICES = [
  {
    title: 'Search engine optimization',
    description:
      'Improve your website’s visibility on search engines with our SEO services.',
    image: seoImg,
    backgroundColor: 'bg-[#f3f3f3]',
    foregroundColor: 'bg-primary',
    textColor: 'text-black',
  },
  {
    title: 'Pay-per-click Advertising',
    description:
      'Boost your online presence with targeted PPC advertising campaigns.',
    image: payperclickImg,
    backgroundColor: 'bg-primary',
    foregroundColor: 'bg-white',
    textColor: 'text-blue-900',
  },
  {
    title: 'Social Media Marketing',
    description:
      'Engage your audience and grow your brand on social media platforms.',
    image: socialmarketingImg,
    backgroundColor: 'bg-green-100',
    foregroundColor: 'bg-green-500',
    textColor: 'text-green-900',
  },
  {
    title: 'Email Marketing',
    description:
      'Reach your audience directly with targeted email campaigns and newsletters.',
    image: emailmarketing,
  },
  {
    title: 'Content Creation',
    description:
      'Create compelling content that drives engagement and conversions.',
    image: contentcreationImg,
    backgroundColor: 'bg-red-100',
    foregroundColor: 'bg-red-500',
    textColor: 'text-red-900',
  },
  {
    title: 'Analytics and Tracking',
    description:
      'Track and analyze your website’s performance to make data-driven decisions.',
    image: analyticsImg,
    backgroundColor: 'bg-gray-100',
    foregroundColor: 'bg-primary',
    textColor: 'text-gray-900',
  },
]
