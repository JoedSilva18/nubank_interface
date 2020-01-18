import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';
import { Container, Top, Logo, Title } from './styles';

export default function Header() {

  const headerOpacity = new Animated.Value(0);

  useEffect(() => {
    function animate() {
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start()
    }

    animate();
  }, [headerOpacity]);

  return (
    <Container style={{
      opacity: headerOpacity
    }}>
      <Top>
        <Logo source={logo} />
        <Title>Joed</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container >
  );
}
