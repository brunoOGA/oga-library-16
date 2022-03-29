import React from 'react'
import { Core, Tokens } from 'oga-library-16'
import { View } from 'react-native'

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Core.Button
        text='Greetings'
        color={Tokens.globalTokens.brandColorPrimaryDark}
        onPress={() => console.log('TESTE')}
      />
    </View>
  )
}

export default App
