import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import logo from '~/assets/Nubank_Logo.png';
import { Container, Logo, Name, TitleRoof } from './styles';

export default function SplashScreen({ navigation }) {

  const logoSize = new Animated.Value(2);
  const logoX = new Animated.Value(0);
  const titleX = new Animated.Value(-60);

  useEffect(() => {
    function animate() {
      Animated.sequence([
        Animated.timing(logoSize, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(logoX, {
          toValue: -40,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(titleX, {
          toValue: 10,
          duration: 500,
          useNativeDriver: true,
        })
      ]).start(() => {
        setTimeout(() => {
          navigation.navigate('Main');
        }, 400);
      });
    }

    setTimeout(animate, 1000);
  }, []);

  return (
    <Container>
      <TitleRoof />
      <Logo source={logo} style={{
        transform: [
          {
            scale: logoSize.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            })
          },
          { translateX: logoX }
        ]
      }} />
      <Name
        style={{
          transform: [
            {
              translateX: titleX
            }
          ]
        }}
      >Joed</Name>
    </Container>
  );
}
