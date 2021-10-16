import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight();
const bottomSpace = getBottomSpace();

export const Container = styled.View`
  margin-bottom: ${bottomSpace}px;
  margin-top: ${statusBarHeight}px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  padding: 0px 15px;
`;
