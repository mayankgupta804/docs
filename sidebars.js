/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'Parca',
      items: [
        'parca',
        'storage',
        'symbolization',
        {
          type: 'link',
          label: 'gRPC APIs',
          href: 'https://buf.build/parca-dev/parca',
        },
        'observability',
      ]
    },
    {
      type: 'category',
      label: 'Parca Agent',
      items: [
        'parca-agent',
        'parca-agent-design',
        'parca-agent-security'
      ]
    },
    {
      type: 'doc',
      label: 'Concepts',
      id: 'concepts',
    },
    {
      type: 'doc',
      label: 'FAQ',
      id: 'faq',
    },
    {
      type: 'doc',
      label: 'Community',
      id: 'community',
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'binary',
        'agent-binary',
        'kubernetes',
        'openshift',
        'systemd',
        'querying-parca',
        'profiling-101',
        'troubleshooting-parca-agent',
      ],
    }
  ],
};
