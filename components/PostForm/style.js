import styled from 'styled-components';
import { Form } from 'antd';

export const FormWrapper = styled(Form)`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PreUploadImage = styled.div`
  margin-top: 8px;

  img { width: 200px }
  .button-wrapper {
    margin-top: 4px;
  }
`;
