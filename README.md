<p align="center">
<img src="https://i.imgur.com/Cfe2ZOt.png" height="150" width="300">
</p>

# Nubank Interface

### Conteúdo
O  aplicativo tem como objetivo criar uma interface semelhante ao Nubank aplicando os conceitos de React Native. Até o momento as telas presentes no aplicativo são:

+ Tela de apresentação(SplashScreen)
+ Tela inicial(Dashboard)
  + Menu do usuário

### Tecnologias/Ferramentas utilizadas:
- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](http://reactnavigation.org/)
- [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/docs/getting-started.html)
- [VS Code](https://code.visualstudio.com/)
- [Styled Components](https://styled-components.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Imagens do projeto:
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
<img src="https://i.imgur.com/VSjw5JD.png" height="500" width="300"> | <img src="https://i.imgur.com/sxZkJZR.png" height="500" width="300"> | <img src="https://i.imgur.com/KlN6QHe.png" height="500" width="300">
<img src="https://i.imgur.com/TpLbTlJ.png" height="500" width="300"> | <img src="https://i.imgur.com/senKzBy.png" height="500" width="300"> |

### Como executar o projeto:
**OBS: Esse projeto foi desenvolvido e testado apenas em dispositivos Android (por motivos técnicos). Para o funcionamento em dispositivos iOS, são necessárias configurações adicionais que não foram contempladas durante o desenvolvimento até o momento.**

#### React Native
Primeramente tenha o ambiente do React Native configurado em sua máquina. **Lembrando que este projeto foi criado usando o React Native CLI e não o Expo CLI.**
 - [Tutorial de instalação](https://facebook.github.io/react-native/docs/getting-started) (Documentação oficial)
 - [Tutorial de instalação](https://docs.rocketseat.dev/ambiente-react-native/android/linux) (Tutorial em português da Rocketseat)


#### Gerenciador de pacotes
Ter instalado um dos gereciadores de pacotes abaixo:
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/) (Recomendado)

#### Clone do projeto
```
git clone https://github.com/JoedSilva18/nubank_interface.git
```

#### Configurações gerais
Na pasta do projeto, executar o seguinte comando para baixar todas as dependencias. Use o comando baseado no gerenciador instalado em sua máquina(**npm ou yarn**):
```
yarn
npm install
```

Após esse procedimento caso esteja usando um dispositivo físico, conecte o seu dispositivo via USB com o modo de desenvolvedor do dispositivo ativada.

Para garantir que seu dispositivo está se conectando corretamente ao ADB, o Android Debug Bridge, execute:
```
adb reverse tcp:3333 tcp:3333
```

Para finalizar o procedimento, execute:
```
react-native run-android
```

e logo em seguida:
```
react-native start
```

Após esse procedimento, o aplicativo será executado.
