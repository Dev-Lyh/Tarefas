import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

export default class TaskCard extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.recognizeData}>
          <View style={styles.viewId}>
            <Text style={styles.id} allowFontScaling={false}> 1 </Text>
          </View>
          <View style={styles.titleAndDate}>
            <Text style={styles.title} allowFontScaling={false}> {this.props.title} </Text>
            <Text style={styles.date} allowFontScaling={false}> Termina em: {this.props.date} </Text>
          </View>
          <View style={styles.boxStatus}>
            <Text style={styles.statusPriority} allowFontScaling={false}> {this.props.status} </Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableHighlight style={styles.btnDEL} onPress={() => this.props.deletar(this.props.id)} underlayColor={'#ffffff'}>
            <Text style={styles.txtDEL} allowFontScaling={false}>EXCLUIR</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnUPD} onPress={() => this.props.atualizar(this.props.item)} underlayColor={'#181818'}>
            <Text style={styles.txtUPD} allowFontScaling={false}>CONCLUIR</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#202020',
    borderRadius: 8,
    padding: 10
  },
  recognizeData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  viewId: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    width: 22,
    backgroundColor: '#10CD7B',
    borderRadius: 20
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181818',
  },
  titleAndDate: {
    minHeight: 40,
    alignItems: 'flex-start',
    width: 215
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
  },
  boxStatus: {
    width: 56,
    height: 20,
    backgroundColor: 'rgba(196,196,196,0.1)',
    alignItems: 'center',
    borderRadius: 2
  },
  statusPriority: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A4FFD7',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 52,
    marginRight: 82,
    height: 52,
    alignItems: 'center',
  },
  btnDEL: {
    borderWidth: 2,
    borderColor: '#10CD7B',
    paddingVertical: 8,
    width: 100,
    alignItems: 'center',
    borderRadius: 20
  },
  txtDEL: {
    color: '#10CD7B',
    fontWeight: 'bold',
    fontSize: 14
  },
  btnUPD: {
    backgroundColor: '#10CD7B',
    paddingVertical: 9,
    width: 100,
    alignItems: 'center',
    borderRadius: 20
  },
  txtUPD: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14
  },
})
