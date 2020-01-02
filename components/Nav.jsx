// base
import React from 'react';
import Link from 'next/link';

// screen
import { Input, Menu, Icon } from 'antd';

const Nav = () => (
  <div>
    <Menu mode="horizontal">
      <Menu.Item key="home"><Link href="/"><a>리액트버드</a></Link></Menu.Item>
      <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
      <Menu.Item key="mail">
        <Input.Search
          enterButton={<Icon type="search" style={{ margin: 0 }} />}
          style={{ verticalAlign: 'middle' }}
        />
      </Menu.Item>
    </Menu>
  </div>
);

export default Nav;
