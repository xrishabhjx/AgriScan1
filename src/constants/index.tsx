/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import { MenuItem } from '@/types';

/**
 * Assets
 */
import {
  ArrowBigDownDash,
  BetweenHorizonalEnd,
  Blocks,
  BrainCircuit,
  Building2,
  ChartArea,
  ChartPie,
  Code,
  Component,
  CreditCard,
  Files,
  GitFork,
  Github,
  Instagram,
  LaptopMinimal,
  Linkedin,
  Package,
  SquareMousePointer,
  Terminal,
  Twitter,
  UserRoundPen,
  Youtube,
} from 'lucide-react';

import {
  avatar1,
  avatar2,
  avatar3,
  blog1,
  blog2,
  blog3,
  feature1,
  feature2,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
  {
    href: '/Home',
    label: 'Home',
  },
  {
    href: '/services',
    label: 'Services',
    submenu: [
      {
        href: '#',
        icon: <ChartArea />,
        label: 'AI Crop Diagnosis',
        desc: 'Upload images to detect diseases, pests, or nutrient deficiencies.',
      },
      {
        href: '#',
        icon: <Building2 />,
        label: 'Ask the Community',
        desc: 'Post questions, share photos, and get answers from fellow experts.',
      },
      {
        href: '#',
        icon: <Component />,
        label: 'Fertilizer & Pesticide Suggestions',
        desc: 'Smart recommendations based on crop type and diagnosis.',
      },
      {
        href: '#',
        icon: <Code />,
        label: 'Real-Time Alert Services:',
        desc: 'Region-specific alerts about pest or disease outbreaks nearby, powered by AI + community reports.',
      },
      {
        href: '#',
        icon: <BetweenHorizonalEnd />,
        label: 'Crop Health Log',
        desc: 'See a chronological list of past crop scans with thumbnails and quick summary.',
      },
      {
        href: '#',
        icon: <BrainCircuit />,
        label: 'Farmer Success Stories',
        desc: 'Inspire and learn from other farmers’ innovative practices.',
      },
    ],
  },
  {
    href: '/Diagnose',
    label: 'Diagnose Crop',
  },
  {
    href: '/history',
    label: 'My Farm',
  },
];

// Hero
export const heroData = {
  sectionSubtitle: 'Powerful Insights, Simplified',
  sectionTitle: 'Snap a Photo. Get a Diagnosis. Save Your',
  decoTitle: 'crops.',
  sectionText:
    'From diagnosis to decisions — everything a farmer needs, all in one app.',
};

// Feature
export const featureData = {
  sectionSubtitle: 'Our Features',
  sectionTitle: 'Unlock Limitless Possibilities',
  sectionText:
    'Discover intelligent tools crafted to simplify your farming journey and boost crop health.',
  features: [
    {
      icon: <ChartPie size={32} />,
      iconBoxColor: 'bg-red-500',
      title: 'AI-Powered Insights',
      desc: 'Get real-time, intelligent analysis to make faster, smarter decisions.',
      imgSrc: feature1,
    },
    {
      icon: <Files size={32} />,
      iconBoxColor: 'bg-orange-500',
      title: 'Real-Time Alerts',
      desc: 'Stay informed with instant notifications on key metrics and changes.',
      imgSrc: feature2,
    },
    {
      icon: <UserRoundPen size={32} />,
      iconBoxColor: 'bg-yellow-500',
      title: 'Custom Dashboards',
      desc: 'Build and personalize views that fit your workflow perfectly.',
    },
    {
      icon: <GitFork size={32} />,
      iconBoxColor: 'bg-pink-500',
      title: 'Crop Health Log',
      desc: 'Maintain a timeline of past diagnoses and treatments for every crop.',
    },
    {
      icon: <Blocks size={32} />,
      iconBoxColor: 'bg-slate-500',
      title: 'Multi-Language Support',
      desc: 'Use the app comfortably in your preferred local language.',
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: 'Getting Started',
  sectionTitle: 'Simple Steps to Begin',
  sectionText:
    'Follow these quick and easy steps to set up your account and start making data-driven decisions effortlessly.',
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: 'Sign Up',
      text: 'Create your account in minutes and gain access to powerful tools designed to elevate your experience.',
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: 'Install the App',
      text: 'Download and install our app to seamlessly track, analyze, and optimize your data in real time.',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Monitor & Optimize',
      text: 'Start tracking key metrics, uncover insights, and optimize your strategy for maximum efficiency.',
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: 'Overview',
  sectionTitle: 'Your Ultimate Analytics Solution',
  sectionText:
    'Gain deep insights effortlessly. Make smarter, data-driven decisions with our comprehensive analytics platform.',
  listTitle: 'Trusted by over 1 million users worldwide',
  list: [
    {
      title: '1M+',
      text: 'Total Downloads',
    },
    {
      title: '4.86',
      text: 'Average User Rating',
    },
    {
      title: '60K+',
      text: 'Active Monthly Users',
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: 'Reviews',
  sectionTitle: 'What Our Customers Have to Say',
  reviewCard: [
    {
      title: 'Saved My Entire Harvest!',
      text: 'This app diagnosed a fungal issue early. I followed the advice and saved my crop. Truly a game-changer for small farmers like me.',
      reviewAuthor: 'Ravi,Wheat Farmer',
      date: '3month ago',
    },
    {
      title: 'Simple and Accurate',
      text: 'Just clicked a photo, and it told me exactly what was wrong with my tomato plants. The suggestions were easy to follow and worked well.',
      reviewAuthor: 'Meena, Vegetable Grower',
      date: '3month ago',
    },
    {
      title: 'Farming Got Smarter',
      text: 'Real-time alerts and health tracking helped me manage multiple fields more efficiently. It feels like having an agri expert in my pocket!',
      reviewAuthor: 'Arjun, Multi-crop Farmer',
      date: '3month ago',
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: 'Our Blog',
  sectionTitle: 'Knowledge Hub',
  sectionText:
    'Tap into our knowledge hub to stay informed, empowered, and ahead in modern farming.',
  blogs: [
    {
      imgSrc: blog1,
      badge: 'Diagnosis',
      title: 'AI-Powered Crop Disease Detection: Deep Learning & UAVs',
      link: 'https://flypix.ai/blog/crop-disease-detection/?utm_source=chatgpt.com',
      author: {
        avatarSrc: avatar1,
        authorName: 'John Carte',
        publishDate: 'Jan 10, 2025',
        readingTime: '8 min read',
      },
    },
    {
      imgSrc: blog2,
      badge: 'Management',
      title: 'Detecting and Managing Crop Pests and Diseases with AI',
      link: 'https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/blog/detecting-and-managing-crop-pests-and-diseases-with-ai-insights-from-plantix/?utm_source=chatgpt.com',
      author: {
        avatarSrc: avatar2,
        authorName: 'Annette Black',
        publishDate: 'Feb 15, 2025',
        readingTime: '5 min read',
      },
    },
    {
      imgSrc: blog3,
      badge: 'Automation',
      title: 'AI in Agriculture: Transforming Farming with Artificial Intelligence',
      link: 'https://www.cropler.io/blog-posts/how-artificial-intelligence-is-transforming-farming?utm_source=chatgpt.com',
      author: {
        avatarSrc: avatar3,
        authorName: 'Ralph Edwards',
        publishDate: 'Mar 1, 2025',
        readingTime: '2 min read',
      },
    },
  ],
};

// Cta
export const ctaData = {
  text: 'Make smarter decisions and optimize your strategy.',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Company',
      items: [
        {
          href: '#',
          label: 'About Us',
        },
        {
          href: '#',
          label: 'Careers',
        },
        {
          href: '#',
          label: 'Our Mission',
        },
        {
          href: '#',
          label: 'Press & Media',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Case Studies',
        },
        {
          href: '#',
          label: 'Resource Center',
        },
        {
          href: '#',
          label: 'Tutorials',
        },
        {
          href: '#',
          label: 'Changelog',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          href: '#',
          label: 'Help Center',
        },
        {
          href: '#',
          label: 'Contact Us',
        },
        {
          href: '#',
          label: 'FAQs',
        },
        {
          href: '#',
          label: 'Community Forum',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          label: 'Terms and Conditions',
        },
        {
          href: '#',
          label: 'Privacy Policy',
        },
        {
          href: '#',
          label: 'Data Processing Agreement',
        },
        {
          href: '#',
          label: 'Cookie manager',
        },
      ],
    },
  ],
  copyright: '© 2025 AgriScan',
  socialLinks: [
    {
      href: 'https://x.com',
      icon: <Twitter size={18} />,
    },
    {
      href: 'https://github.com',
      icon: <Github size={18} />,
    },
    {
      href: 'https://www.linkedin.com/in',
      icon: <Linkedin size={18} />,
    },
    {
      href: 'https://www.instagram.com',
      icon: <Instagram size={18} />,
    },
    {
      href: 'https://www.youtube.com',
      icon: <Youtube size={18} />,
    },
  ],
};
