import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native'

import Database from './src/db/Database'
import Tarefa from './src/db/Tarefa';

export default class App extends Component {

  constructor(props) {
    super(props),
      this.state = {
        titulo: "",
        termino: { dia: "15", mes: "01", ano: "2022" },
        prioridade: 0,
        concluido: 0,
        atrasado: 0
      }

    this.Listar();
  }

  FormataData(aaaa, mm, dd) {
    let dataCompleta = aaaa + "-" + mm + "-" + dd
    // console.log(dataCompleta, typeof(dataCompleta))
  }

  Listar = () => {
    const db = new Database();
    db.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })
      }
    )
  }
  Cadastrar = (titulo, termino, prioridade, concluido, atrasado) => {
    const novaTarefa = new Tarefa(titulo, termino, prioridade, concluido, atrasado);
    const banco = new Database();
    banco.Inserir(novaTarefa)
    this.Listar()
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#10CD7B'} barStyle='dark-content' />
        <View style={styles.globalView}>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles.titleInput}>Título</Text>
            <TextInput style={styles.inputText} placeholderTextColor={'#305D4A'} placeholder='Escolha um nome para a sua tarefa...' />
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles.titleInput}>Data de término</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput style={styles.inputData} placeholderTextColor={'#305D4A'} placeholder='Dia' keyboardType='numeric' />
              <Text style={styles.slashText}>/</Text>
              <TextInput style={styles.inputData} placeholderTextColor={'#305D4A'} placeholder='Mês' keyboardType='numeric' />
              <Text style={styles.slashText}>/</Text>
              <TextInput style={styles.inputData} placeholderTextColor={'#305D4A'} placeholder='Ano' keyboardType='numeric' />
            </View>
          </View>
          <View>
            <Text style={styles.titleInput}>Prioridade</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity style={styles.buttonPriority}>
                <Text style={styles.textPriority}>BAIXA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPriority}>
                <Text style={styles.textPriority}>MÉDIA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPriority}>
                <Text style={styles.textPriority}>URGENTE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  globalView: {
    minHeight: '100%',
    backgroundColor: '#181818',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  titleInput: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 5
  },
  inputText: {
    borderWidth: 2,
    borderColor: '#10CD7B',
    borderRadius: 8,
    backgroundColor: '#181818',
    width: '100%',
    color: '#10CD7B',
    fontSize: 16,
    paddingHorizontal: 15,
    height: 40
  },
  inputData: {
    height: 40,
    width: 80,
    borderWidth: 2,
    borderColor: '#10CD7B',
    borderRadius: 8,
    backgroundColor: '#181818',
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#10CD7B',
  },
  slashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A4FFD7'
  },
  buttonPriority: {
    flexDirection: 'row',
    height: 40,
    width: 100,
    borderWidth: 2,
    borderColor: '#10CD7B',
    borderRadius: 8,
    backgroundColor: '#181818',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPriority: {
    fontWeight: 'bold',
    color: '#ffffff'
  }
})