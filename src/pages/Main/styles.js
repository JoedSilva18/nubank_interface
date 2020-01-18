import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content :center;
`;

export const Content = styled(Animated.View)`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const CardContainer = styled(Animated.View)`
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0 20px 0 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;
