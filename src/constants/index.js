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
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import person4 from '../assets/person4.png'
import person5 from '../assets/person5.png'
import person6 from '../assets/person6.png'

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

export const CASESTUDIES = [
  {
    title: 'Case Study 1',
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: '#',
  },
  {
    title: 'Case Study 2',
    description:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    link: '#',
  },
  {
    title: 'Case Study 3',
    description:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    link: '#',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    question: 'Consultation',
    answer:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    question: 'Research and Strategy Development',
    answer:
      'We conduct thorough research to develop a customized marketing strategy that aligns with your goals and objectives.',
  },
  {
    number: '03',
    question: 'Implementation',
    answer:
      'Our team will execute the strategy with precision, ensuring all aspects are carried out effectively.',
  },
  {
    number: '04',
    question: 'Monitoring and Optimization',
    answer:
      'We continuously monitor the performance of the implemented strategy and make adjustments as needed to maximize results.',
  },
  {
    number: '05',
    question: 'Reporting and Communication',
    answer:
      'Regular reports and open communication keep you informed about the progress and success of the marketing efforts.',
  },
  {
    number: '06',
    question: 'Continual Improvement',
    answer:
      'We are committed to ongoing optimization and improvement to ensure your marketing strategy evolves with your business.',
  },
]

export const TEAM_DATA = [
  {
    name: 'John Smith',
    position: 'CEO and Founder',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: person1,
  },
  {
    name: 'Jane Doe',
    position: 'Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: person2,
  },
  {
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: person3,
  },
  {
    name: 'Emily Johnson',
    position: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    image: person4,
  },
  {
    name: 'Emily Davis',
    position: 'Lead Developer',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    image: person5,
  },
  {
    name: 'Michael Wilson',
    position: 'UX Designer',
    description:
      '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    image: person6,
  },
  {
    name: 'Sophia Lee',
    position: 'Marketing Manager',
    description: 'Driving marketing efforts to reach our audience.',
    image: person1,
  },
  {
    name: 'David Clark',
    position: 'Project Manager',
    description: 'Ensuring projects are delivered on time and within budget.',
    image: person2,
  },
  {
    name: 'Olivia Martinez',
    position: 'HR Manager',
    description: 'Fostering a positive and productive work environment.',
    image: person3,
  },
  {
    name: 'Lucas Garcia',
    position: 'Sales Manager',
    description: 'Building relationships with clients and driving sales.',
    image: person4,
  },
  {
    name: 'Ella Rodriguez',
    position: 'Content Strategist',
    description: 'Creating content that resonates with our audience.',
    image: person5,
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'This service is fantastic! My business has seen remarkable growth since we started using it.',
    author: 'John Doe',
  },
  {
    id: 2,
    text: 'Excellent customer support and results. Highly recommend this team to anyone looking to enhance their online presence.',
    author: 'Jane Smith',
  },
  {
    id: 3,
    text: 'A game-changer for our marketing strategy. The results were beyond our expectations!',
    author: 'Alice Johnson',
  },
  {
    id: 4,
    text: "Professional, reliable, and effective. This team knows what they're doing!",
    author: 'Bob Brown',
  },
]
