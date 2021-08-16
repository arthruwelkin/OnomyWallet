import styled from 'styled-components/native';

import {BebasBold} from 'shared/components';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 211px;
  background-color: ${props => props.theme.black700};
  margin-bottom: 20px;
`;

export const LeftColumn = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const RightColumn = styled.View`
  align-items: center;
  justify-content: center;
  width: 64px;
  background-color: ${props => props.theme.black800};
`;

export const ConnectWith = styled(BebasBold)`
  font-size: 24px;
  letter-spacing: 0.96px;
  color: #fff;
`;

ConnectWith.defaultProps = {
  children: 'Connect with',
};

export const Wallet = styled(BebasBold)`
  font-size: 32px;
  letter-spacing: 1.28px;
`;

export const WalletIcon = styled.Image`
  width: 48px;
  height: 48px;
`;

export const SkeletonRect = styled.View`
  background-color: ${props => props.theme.black800};
`;
