import { Code, Layout, Globe, ShoppingCart, Monitor, Palette, Search, MapPin } from 'lucide-react';
import { Service } from '../types/services';

export const services: Service[] = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Expert web development services for creating modern, responsive, and high-performance websites and web applications.',
    icon: Code,
    details: {
      intro: 'Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case.',
      solutions: [
        {
          title: 'Web Portals',
          icon: Layout,
          description: 'Since 2005, we work with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users.'
        },
        {
          title: 'Websites',
          icon: Globe,
          description: '250+ businesses, governmental and non-profit organizations use the websites we have created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.'
        },
        {
          title: 'E-commerce',
          icon: ShoppingCart,
          description: '21 years in ecommerce development, we have grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes.'
        },
        {
          title: 'Web Apps',
          icon: Monitor,
          description: 'In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation.'
        }
      ]
    }
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.',
    icon: Palette,
    details: {
      intro: 'Our UI/UX design services focus on creating intuitive, engaging, and user-centered digital experiences that delight users and achieve business goals.',
      solutions: [
        {
          title: 'User Interface Design',
          icon: Layout,
          description: 'We create visually stunning and intuitive interfaces that enhance user engagement and reflect your brand identity.'
        },
        {
          title: 'User Experience Design',
          icon: Monitor,
          description: 'Through careful research and testing, we design seamless user experiences that guide users effectively through your digital products.'
        },
        {
          title: 'Interaction Design',
          icon: Code,
          description: 'We design meaningful interactions that make your digital products more intuitive and enjoyable to use.'
        },
        {
          title: 'Prototyping',
          icon: Layout,
          description: 'We create interactive prototypes that allow you to test and refine your digital products before development.'
        }
      ]
    }
  },
  {
    id: '03',
    title: 'Logo Design',
    description: 'Professional logo design services that help establish your brand identity and make a lasting impression.',
    icon: Layout,
    details: {
      intro: 'Our logo design services help businesses create memorable brand identities that resonate with their target audience and stand the test of time.',
      solutions: [
        {
          title: 'Brand Identity',
          icon: Layout,
          description: 'We develop comprehensive brand identities that include logo design, color palettes, and typography.'
        },
        {
          title: 'Logo Design',
          icon: Palette,
          description: 'We create unique and memorable logos that capture your brand essence and values.'
        },
        {
          title: 'Brand Guidelines',
          icon: Code,
          description: 'We provide detailed brand guidelines to ensure consistent use of your visual identity across all platforms.'
        },
        {
          title: 'Brand Strategy',
          icon: Monitor,
          description: 'We help develop brand strategies that align with your business goals and target audience.'
        }
      ]
    }
  },
  {
    id: '04',
    title: 'SEO',
    description: 'Comprehensive SEO services to improve your website visibility and drive organic traffic.',
    icon: Search,
    details: {
      intro: 'Our SEO services help businesses improve their online visibility and attract more qualified traffic through search engine optimization.',
      solutions: [
        {
          title: 'Technical SEO',
          icon: Code,
          description: 'We optimize your website technical aspects to improve search engine crawling and indexing.'
        },
        {
          title: 'Content Optimization',
          icon: Layout,
          description: 'We optimize your content to target relevant keywords and improve search engine rankings.'
        },
        {
          title: 'Link Building',
          icon: Globe,
          description: 'We build high-quality backlinks to improve your website authority and search engine rankings.'
        },
        {
          title: 'Local SEO',
          icon: MapPin,
          description: 'We optimize your local presence to attract more customers in your area.'
        }
      ]
    }
  }
];