import React from 'react'
import { Button } from 'react-native'
export interface ButtonProps {
  title: string
  color: string
}

const onPressLearnMore = () => {
  console.warn('aaa')
}

const But = (props: ButtonProps) => {
  return (
    <Button
      onPress={onPressLearnMore}
      title={props.title}
      color={props.color}
      accessibilityLabel="Learn more about this purple button"
    />
  )
}

export default But
