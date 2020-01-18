import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content :center;
  align-items: center;
`;

export const Logo = styled(Animated.Image)`
  z-index: 5;
  background: #8b10ae;
`;

export const TitleRoof = styled.View`
  background: #8b10ae;
  width: 45%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 4;
`;

export const Name = styled(Animated.Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  position: absolute;
`;
