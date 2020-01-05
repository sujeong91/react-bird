// base
import React from 'react';
import styled from 'styled-components';

// screen
import {
  Button, List, Card, Icon,
} from 'antd';
import { NicknameEditForm } from '../components';

const ListContainer = styled.div`
  margin-bottom: 16px;
  border: 1px solid rgb(232, 232, 232);
`;
const ListWrapper = styled(List)`
  text-align: center;

  .title {
    padding: 0 16px;
    text-align: left;
  }

  .ant-spin-container {
    padding: 24px 16px 0 16px;
  }

  .button-more {
    padding: 4px 16px 24px;

    button {
      width: 100%;
    }
  }
`;

const Profile = () => (
  <div className="Profile">
    <NicknameEditForm />
    <ListContainer>
      <ListWrapper
        grid={{ gutter: 16, xs: 2, md: 3 }}
        size="small"
        header={<div className="title">팔로잉 목록</div>}
        dataSource={['sujeong', '바보', '노드버드오피셜']}
        renderItem={(item) => (
          <List.Item>
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
        loadMore={<div className="button-more"><Button type="primary">더 보기</Button></div>}
      />
    </ListContainer>
    <ListContainer>
      <ListWrapper
        grid={{ gutter: 16, xs: 2, md: 3 }}
        size="small"
        header={<div className="title">팔로워 목록</div>}
        dataSource={['mireu', '바보', '노드버드오피셜']}
        renderItem={(item) => (
          <List.Item>
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
        loadMore={<div className="button-more"><Button type="primary">더 보기</Button></div>}
      />
    </ListContainer>
  </div>
);

export default Profile;
