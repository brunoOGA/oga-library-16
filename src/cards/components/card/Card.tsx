import React from 'react'
import { StyleSheet, View } from 'react-native'
const Card: React.FC = () => {
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
})
export default Card
