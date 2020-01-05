// base
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// screen
import { Input, Menu } from 'antd';

const SearchButton = styled(Input.Search)`
  vertical-align: middle;
  & .anticon {
    margin: 0;
  }
`;

const Nav = () => (
  <div className="Nav">
    <Menu mode="horizontal">
      <Menu.Item key="home"><Link href="/"><a>리액트버드</a></Link></Menu.Item>
      <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
      <Menu.Item key="mail">
        <SearchButton enterButton />
      </Menu.Item>
    </Menu>
  </div>
);

export default Nav;
