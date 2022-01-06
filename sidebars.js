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
      type: 'category',
      label: 'Using the Dashboard',
      items: ['overview', 'shipping', 'managing', 'lodge-restore']
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
      type: 'doc',
      label: 'Architecture',
      id: 'architecture'
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
          href: 'https://lodge-logging.github.io'
        },
        {
          type: 'category',
          label: 'Elastic Stack',
          items: [
            {
              type: 'link',
              label: 'Filebeat',
              href: 'https://www.elastic.co/guide/en/beats/filebeat/current/index.html'
            },
            {
              type: 'link',
              label: 'Logstash',
              href: 'https://www.elastic.co/guide/en/logstash/current/index.html'
            },
            {
              type: 'link',
              label: 'Elasticsearch',
              href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html'
            },
            {
              type: 'link',
              label: 'Kibana',
              href: 'https://www.elastic.co/guide/en/kibana/current/index.html'
            },
          ]
        },
        {
          type: 'category',
          label: 'Supporting Components',
          items: [
            {
              type: 'link',
              label: 'Kafka',
              href: 'https://kafka.apache.org/documentation/'
            },
            {
              type: 'link',
              label: 'Kafka Kowl',
              href: 'https://github.com/cloudhut/kowl'
            },
            {
              type: 'link',
              label: 'Zookeeper',
              href: 'https://zookeeper.apache.org/documentation.html'
            },
            {
              type: 'link',
              label: 'ZooNavigator',
              href: 'https://zoonavigator.elkozmon.com/en/latest/'
            },
          ]
        },
      ]
    }
  ],
};
