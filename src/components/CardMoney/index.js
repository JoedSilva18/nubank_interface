import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles';

export default function CardMoney() {
  return (
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
  );
}
