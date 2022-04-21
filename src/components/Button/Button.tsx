import React from 'react'

// import { Text } from 'react-native'

// export interface ButtonProps {
//   label: string
// }

// const Button = () => {
//   return <Text>aaa</Text>
// }

// export default Button

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

export default Button
