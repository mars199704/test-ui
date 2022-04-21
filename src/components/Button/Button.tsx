import React from 'react'

import { Text } from 'react-native'

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <Text>{props.label}</Text>
}

export default Button
