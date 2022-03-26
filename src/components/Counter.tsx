import * as React from 'react'

import { Button, Container, Label } from './Styles'

const addOne = (input: number) => input + 1

export const Counter = ({ buttonTitle }: { buttonTitle: string }) => {
  const [count, setCount] = React.useState(0)

  return (
    <Container>
      <Label>You pressed {count} times</Label>
      <Button
        color='red'
        onPress={() => setCount(addOne(count))}
        title={buttonTitle}
      />
    </Container>
  )
}
