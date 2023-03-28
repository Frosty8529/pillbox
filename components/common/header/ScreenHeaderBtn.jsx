import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, borderRadius, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl} 
        resizeMode = "cover"
        style={{ width: dimension, height: dimension, borderRadius: borderRadius }}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn