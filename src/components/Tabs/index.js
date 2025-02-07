import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
  const contentX = new Animated.Value(300);

  useEffect(() => {
    function animate() {
      Animated.parallel([
        Animated.spring(contentX, {
          toValue: 0,
          bounciness: 15
        })
      ]).start()
    }

    animate()
  }, [contentX]);

  return (
    <Container style={{
      transform: [
        {
          translateY: translateY.interpolate({
            inputRange: [0, 480],
            outputRange: [0, 30],
            extrapolate: 'clamp'
          })
        },
        {
          translateX: contentX
        }],
      opacity: translateY.interpolate({
        inputRange: [0, 480],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
