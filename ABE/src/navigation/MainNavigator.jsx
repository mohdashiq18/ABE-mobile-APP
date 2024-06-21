import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './stackNavigetor/StackNvigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <StatusBar
      barStyle="light-content"  // Light content for the status bar text and icons
      backgroundColor="#6a51ae" // Background color for the status bar
    />
        <StackNavigation/>
    </NavigationContainer>
  )
}

export default MainNavigator