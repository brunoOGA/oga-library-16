import React, { useEffect } from 'react'
import RNModuleTemplateModule, { Counter } from 'oga-library-16'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  return <Counter buttonTitle='Greetings' />
}

export default App
