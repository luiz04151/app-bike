import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Título */}
      <Text style={styles.title}>Bicicleta Houston</Text>

      {/* Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://www.armazemparaiba.com.br/ccstore/v1/images/?source=/file/v3797488419836085187/products/010018198183.f5c0789c408120430654c16dc1f3528e6.jpeg&height=300&width=300' }}
          style={styles.image}
        />

        <Text style={styles.bikeName}>Bicicleta Aro 29 Houston Discovery Tamanho 18 com 21 Marchas - Vermelho Pimenta</Text>
        <Text style={styles.description}>
          A bicicleta Houston Discovery com aro 29, tamanho 18, e 21 marchas é uma excelente escolha para ciclistas que buscam desempenho e estilo. 
        </Text>

        <Text style={styles.price}>por: R$ 1.099,00</Text>

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },

  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },

  bikeName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  description: {
    color: '#94a3b8',
    marginTop: 5,
  },

  price: {
    color: '#3b82f6',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#3b82f6',
    marginTop: 15,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});