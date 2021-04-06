import React, {Suspense, Component, useState} from 'react';
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Animated, TouchableHighlight } from 'react-native';
import {SwiperinoStyles,ScrollViewContainerStyles} from '../static/styles.js';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable';
import { RectButton } from 'react-native-gesture-handler';

const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>
export default function Swipe(props) {
  const navigation = useNavigation();
  return <SwipeableExample {...props} navigation={navigation} />;
}

export class SwipeableExample extends Component {
  state = {
    currentlyOpenSwipeable: null
  };

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  render() {
    const {currentlyOpenSwipeable} = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter();
        }

        this.setState({currentlyOpenSwipeable: swipeable});
      },
      onClose: () => this.setState({currentlyOpenSwipeable: null})
    };

    return (
      <ScrollView onScroll={this.handleScroll} style={SwiperinoStyles.container}>
        <Example1 {...itemProps}/>
        <Example2 {...itemProps}/>
        <Example3 {...itemProps}/>
        <View style={ScrollViewContainerStyles.ScrollViewContainer}>
          <Text style={ScrollViewContainerStyles.paddingTop}>
            Opis ekranu
          </Text>
          <Text style={ScrollViewContainerStyles.PaddingLowerFontSize}>
            Wykorzystany został komponent Swipeable. Komponent ten posiada bardzo dużo możliwości do efektownego
            przesuwania między poszczególnymi komponentami. Na ekranie widoczne są 3 przykłady. 1 przykład pokazuje możliwość
            przesuwania w lewo za pomocą props'u <B>right buttons</B> oraz gdy przesuwamy w prawo jest tam widoczny tekst w trakcie przesuwania
            za pomocą props'u <B>right content</B>. 2 Przykład pokazuje możliwość przesuwania w prawo za pomocą props'u <B>left buttons</B>.
            Gdy przesuniemy ukażę nam się tym razem 6 guzików <B>TouchableOpacity</B>. Teraz przy przesuwaniu w lewo pokaże się tekst przy pomocy
            props'u <B>right content</B>. Przykład 3 pokazuje akcje (tutaj tekst) jak będą się wyświetlać (lub wykonywać) po danej odległości
            jaką przesuniemy palcem za pomocą props'u <B>leftActionActivationDistance</B>.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

function Example1({onOpen, onClose}) {
  return (
    <Swipeable
      leftContent={(
        <View style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
          <Text>Jakaś akcja podczas przesuwania</Text>
        </View>
      )}
      rightButtons={[
        <TouchableOpacity style={[SwiperinoStyles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
          <Text>1</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
          <Text>2</Text>
        </TouchableOpacity>
      ]}
      onRightButtonsOpenRelease={onOpen}
      onRightButtonsCloseRelease={onClose}
    >
      <View style={[SwiperinoStyles.listItem, {backgroundColor: 'salmon'}]}>
        <Text>Przykład 1</Text>
      </View>
    </Swipeable>
  );
}

function Example2({onOpen, onClose}) {
  return (
    <Swipeable
      leftButtonWidth={45}
      leftButtons={[
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'papayawhip'}]}>
          <Text>1</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'olivedrab'}]}>
          <Text>2</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'mistyrose'}]}>
          <Text>3</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'mediumaquamarine'}]}>
          <Text>4</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'lightslategray'}]}>
          <Text>5</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: 'ivory'}]}>
          <Text>6</Text>
        </TouchableOpacity>
      ]}
      rightContent={(
        <View style={[SwiperinoStyles.rightSwipeItem, {backgroundColor: 'linen'}]}>
          <Text>Jakaś akcja podczas przesuwania</Text>
        </View>
      )}
      onLeftButtonsOpenRelease={onOpen}
      onLeftButtonsCloseRelease={onClose}
    >
      <View style={[SwiperinoStyles.listItem, {backgroundColor: 'paleturquoise'}]}>
        <Text>Przykład 2</Text>
      </View>
    </Swipeable>
  );
}

class Example3 extends Component {

  state = {
    leftActionActivated: false,
    toggle: false
  };

  render() {
    const {leftActionActivated, toggle} = this.state;

    return (
      <Swipeable
        leftActionActivationDistance={200}
        leftContent={(
          <View style={[SwiperinoStyles.leftSwipeItem, {backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}]}>
            {leftActionActivated ?
              <Text>wypuść!</Text> :
              <Text>przesuwaj dalej!</Text>}
          </View>
        )}
        onLeftActionActivate={() => this.setState({leftActionActivated: true})}
        onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
        onLeftActionComplete={() => this.setState({toggle: !toggle})}
      >
        <View style={[SwiperinoStyles.listItem, {backgroundColor: toggle ? 'thistle' : 'darkseagreen'}]}>
          <Text>Przykład 3</Text>
        </View>
      </Swipeable>
    );
  }
}





