import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles';
import { from } from 'rxjs';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />

        <PanGestureHandler
          onGestureEvent={}
          onHandlerStateChange={onHandlerStateChange}
        >
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Joed Silva as 06:00h
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  )
};
