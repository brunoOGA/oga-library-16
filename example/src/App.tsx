import React from 'react'
import { Button, Card } from 'oga-library-16'

const App = () => {
  return (
    <>
      <Button
        text='Greetings'
        disabled={true}
        onPress={() => console.log('TESTE')}
      />
      <Card />
    </>
  )
}

export default App
