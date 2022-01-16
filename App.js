import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native'

// Components Items
import Prioridades from './src/components/Prioridades';
import TaskCard from './src/components/TaskCard';

// Database Items
import Database from './src/db/Database'
import Tarefa from './src/db/Tarefa';

export default class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        titulo: "",
        termino: "",
        prioridade: "Pressione para selecionar!",
        concluido: 0,
        atrasado: 0,
        lista: []
      }

    this.Listar();
  }

  Listar = () => {
    const db = new Database();
    db.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })
      }
    )
  }
  Cadastrar = (titulo, termino, prioridade) => {
    const novaTarefa = new Tarefa(titulo, termino, prioridade);
    const banco = new Database();
    banco.Inserir(novaTarefa)
    this.Listar()
  }


  setPriority = (option) => {
    this.setState({ prioridade: option })
    console.log(this.state.prioridade)
  }
  
  validationDate = (value) => {
    if(this.state.termino.length >= 2) {
      value += "/"
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#10CD7B'} barStyle='dark-content' />
        <View style={styles.globalView}>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles.titleInput} allowFontScaling={false}>Título</Text>
            <TextInput style={styles.inputText} placeholderTextColor={'#305D4A'} placeholder='Escolha um nome para a sua tarefa...' onChangeText={(valorTitle) => {this.setState({titulo: valorTitle})}} allowFontScaling={false}/>
          </View>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles.titleInput} allowFontScaling={false}>Data de término</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <TextInput style={styles.inputData} placeholderTextColor={'#305D4A'} placeholder='__/__/____' keyboardType='numbers-and-punctuation' onChangeText={(valorTermino) => this.validationDate(valorTermino)} allowFontScaling={false}/>

            </View>
          </View>
          <View>
            <View style={styles.spaceBetween}>
              <Text style={styles.titleInput} allowFontScaling={false}>Prioridade: </Text>
              <Text style={{color: '#f5f5f5', backgroundColor: 'rgba(16,205,123, 0.1)', paddingVertical: 2, paddingHorizontal: 8, borderRadius: 2,}} allowFontScaling={false}>{this.state.prioridade}</Text>
            </View>
            <Prioridades priority={this.setPriority}/>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => this.Cadastrar()}>
              <Text style={styles.textAdd} allowFontScaling={false}>Adicionar tarefa</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.listTitle} allowFontScaling={false}>
            Tarefas
          </Text>
          <ScrollView>
            {
              this.state.lista.map(
                (item, index) => (
                  <TaskCard 
                    key={index}
                    item={item}
                    id={item.id}
                    title={item.titulo}
                    date={item.termino}
                  />
                )
              )
            }
          </ScrollView>
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
    fontSize: 16,
    marginBottom: 5,
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
    minHeight: 40
  },
  inputData: {
    minHeight: 40,
    width: '100%',
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
  textPriority: {
    fontWeight: 'bold',
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonAdd: {
    paddingVertical: 12,
    width: 157,
    backgroundColor: '#10CD7B',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 25
  },
  textAdd: {
    color: '#181818',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: "#10CB7D",
    paddingLeft: 15,
    paddingVertical: 5,
    marginBottom: 10
  }
})