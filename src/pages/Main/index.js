import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import CardMoney from '~/components/CardMoney';
import {
  Container,
  Content,
  CardContainer,
} from './styles';

export default function Main() {
  let offsetY = 0;
  const contentX = new Animated.Value(300);
  const translateY = new Animated.Value(0);

  const animatedEventY = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ]
  );

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

  function onHandlerStateChangeY(event) {

    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      let opened = false;

      offsetY += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offsetY);
        translateY.setOffset(0);
        offsetY = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 480 : 0,
        duration: 100,
        useNativeDriver: true
      }).start(() => {
        offsetY = opened ? 480 : 0;
        translateY.setOffset(offsetY);
        translateY.setValue(0);
      })

    }
  }

  return (
    <Container>
      <Header />
      <Content style={{
        transform: [
          {
            translateX: contentX
          }
        ]
      }}>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEventY}
          onHandlerStateChange={onHandlerStateChangeY}
        >
          <CardContainer style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-200, 0, 480],
                outputRange: [-50, 0, 480],
                extrapolate: 'clamp'
              }),
            }]
          }}>
            < CardMoney />
          </CardContainer>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  )
};
