import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

export default class TaskCard extends Component {
  getAvailableDate = () => {
    this.props.concluir(this.props.item)
  }

  concludedInDate = () => {
    return (
      <Text style={{ marginLeft: 25, color: '#29BDCC', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 14 }} allowFontScaling={false}>Concluído no prazo</Text>
    )
  }
  concludedOutDate = () => {
    return (
      <Text style={{ marginLeft: 25, color: '#CC1B73', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 14 }} allowFontScaling={false}>Concluído com Atraso</Text>
    )
  }

  visible = () => {
    return (
      <View style={styles.buttonArea}>
        <TouchableHighlight style={styles.btnDEL} onPress={() => this.props.excluir(this.props.id)} underlayColor={'#ffffff'} >
          <Text style={styles.txtDEL} allowFontScaling={false}>EXCLUIR</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.btnUPD} onPress={() => this.getAvailableDate()} underlayColor={'#181818'}>
          <Text style={styles.txtUPD} allowFontScaling={false}>CONCLUIR</Text>
        </TouchableHighlight>
      </View>
    )
  }
  invisible = () => {
    var str = this.props.date
    var date = new Date(str.split("/").reverse().join("/"))
    var newDate = new Date()
    return (
      <View style={styles.buttonArea}>
        <TouchableHighlight style={styles.btnDEL} onPress={() => this.props.excluir(this.props.id)} underlayColor={'#ffffff'} >
          <Text style={styles.txtDEL} allowFontScaling={false}>EXCLUIR</Text>
        </TouchableHighlight>
        {date > newDate ? this.concludedInDate() : this.concludedOutDate()}
      </View>
    )
  }
  render() {

    return (
      <View style={styles.cardContainer}>
        <View style={styles.recognizeData}>
          <View style={styles.viewId}>
            <Text style={styles.id} allowFontScaling={false}> {this.props.id} </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <View style={styles.titleAndDate}>
              <Text style={styles.title} allowFontScaling={false}> {this.props.title} </Text>
              <Text style={styles.date} allowFontScaling={false}> Termina em: {this.props.date} </Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.8)', textDecorationLine: 'underline'}}> Concluído: {this.props.concluded != null ? this.props.concluded : "Não"} </Text>
            </View>
            <View style={styles.boxStatus}>
              <Text style={styles.statusPriority} allowFontScaling={false}> {this.props.status} </Text>
            </View>
          </View>
        </View>
        {this.props.concluded != null ? this.invisible() : this.visible()}
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
    padding: 10,
    marginVertical: 10
  },
  recognizeData: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewId: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    paddingHorizontal: 2,
    backgroundColor: '#10CD7B',
    borderRadius: 20,
    marginRight: 10
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181818',
  },
  titleAndDate: {
    minHeight: 40,
    alignItems: 'flex-start',
    width: 215,
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
    paddingHorizontal: 10,
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
    marginLeft: 42,
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
