// base
import React from 'react';

// screen
import { Input, Button } from 'antd';
import { FormWrapper, ButtonWrapper, PreUploadImage } from './style';

const dummy = {
  imagePaths: [],
};

const PostForm = () => (
  <FormWrapper className="PostForm" encType="multipart/form-data">
    <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
    <ButtonWrapper>
      <input type="file" multiple hidden />
      <Button>이미지 업로드</Button>
      <Button type="primary" htmlType="submit">짹짹</Button>
    </ButtonWrapper>
    {dummy.imagePaths.map((path) => (
      <PreUploadImage key={path}>
        {/* NOTE: 임시 확인용 주석 */}
        {/* <img src={'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'} alt={v} /> */}
        <img src={`http://localhost:3065/${path}`} alt={path} />
        <div className="button-wrapper">
          <Button>제거</Button>
        </div>
      </PreUploadImage>
    ))}
  </FormWrapper>
);

export default PostForm;
