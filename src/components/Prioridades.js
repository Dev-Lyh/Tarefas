import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Prioridades extends Component {

  state = {
    OPTIONS: ['BAIXA', 'MÉDIA', 'URGENTE']
  }

  onPressItem = (option) => {
    this.props.priority(option)
  }

  render() {


    const option = this.state.OPTIONS.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          onLongPress={() => this.onPressItem(item)}
          style={styles.touchable}
        >

          <Text style={styles.text} allowFontScaling={false}>{item}</Text>

        </TouchableOpacity>
      )
    })

    return (
      <View style={styles.view}>
        {option}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  view: {
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 5,
    justifyContent: 'space-between'
  },
  touchable: {
    borderWidth: 2,
    borderColor: '#10CD7B',
    paddingVertical: 12,
    width: 96,
    alignItems: 'center',
    borderRadius: 8
  }
})