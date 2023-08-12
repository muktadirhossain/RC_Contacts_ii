import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextSplitter = ({array}) => {
  const last_element_index= array.length-1;
  const last_element= array[last_element_index];
  
  return (
    <Text>
      {
      array.map((item,indx)=>{
        return(
          <Text key={indx}>
          {item}
          {item === last_element ? <Text></Text> : <Text>{'\n'}</Text>}
          </Text>
        )
      })  
      }
    </Text>
  )
}

export default TextSplitter

const styles = StyleSheet.create({})