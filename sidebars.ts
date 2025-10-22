import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/setup',
      ],
    },
    {
      type: 'category',
      label: '🧩 Components',
      items: [
        'components/productCard',
        'components/header',
        'components/footer',
      ],
    },
    {
      type: 'category',
      label: '🔌 Integrations',
      items: [
        'integration/bigcommerce',
        'integration/craft',
      ],
    },
    {
      type: 'category',
      label: '📄 Pages',
      items: [
        'pages/product-details',
        'pages/ordering',
        'pages/cart',
      ],
    },
    {
      type: 'category',
      label: '📚 How the System Works',
      items: [
        'how-it-works/add-to-cart',
        'how-it-works/update-product-in-cart',
        'how-it-works/remove-product',
        'how-it-works/login',
        'how-it-works/logout',
        'how-it-works/forgot-password',
        'how-it-works/checkout',
      ],
    }, {
      type: 'category',
      label: '🚀 Work in Progress',
      items: [
        'work-in-progress/category',
        'work-in-progress/cupom',
      ],
    },
    {
      type: 'category',
      label: '📦 Deploy',
      items: [
        'deployment/production',
      ],
    },
  ],
};

export default sidebars;
