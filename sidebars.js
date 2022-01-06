module.exports = {
  docs: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['prerequisites', 'installation', 'initialization', 'deployment']
    },
    {
      type: 'doc',
      label: 'Lodge Connect',
      id: 'connect'
    },
    {
      type: 'doc',
      label: 'Teardown',
      id: 'teardown'
    },
    {
      type: 'category',
      label: 'Helpful Resources',
      items: [
        {
          type: 'link',
          label: 'AWS CLI Setup',
          href: 'https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html'
        },
        {
          type: 'link',
          label: 'Lodge Case Study',
          href: 'https://lodge-pipeline.github.io'
        },
      ]
    }
  ],
};
