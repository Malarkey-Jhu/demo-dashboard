import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="Powered by Alluxio"
      links={[
        {
          key: 'Alluxio',
          title: 'Alluxio',
          href: 'https://www.alluxio.io',
          blankTarget: true,
        },
        {
          key: 'divider',
          title: '|',
          href: '#',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Alluxio/alluxio',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
