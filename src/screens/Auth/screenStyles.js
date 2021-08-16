import styled from 'styled-components/native';

import {BebasBold} from 'shared/components';

export const AuthLayout = styled.ScrollView`
  background-color: ${props => props.theme.black900};
`;

AuthLayout.defaultProps = {
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 78,
    paddingHorizontal: 32,
  },
};

export const GreetingText = styled(BebasBold)`
  font-size: 24px;
  letter-spacing: 0.96px;
  line-height: 36px;
  color: ${props => props.theme.white200};
`;

export const SignInText = styled(BebasBold)`
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.28px;
  color: ${props => props.theme.lightblue};
`;

export const AuthMethodsWrapper = styled.View`
  margin-top: 36px;
`;
