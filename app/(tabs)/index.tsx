import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { ModalPassword } from '@/components/modal';
import { LinearGradient } from 'expo-linear-gradient';

let charset = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {

  const [size] = useState(350);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    

    <LinearGradient
      colors={['#000000', '#000000', '#000C7B', '#000C7B']}
      locations={[0, 0.5, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <Image

        source={require("./assets/bike.png" )}
        style={[styles.logo, {width: size, height: size}]}
      />

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Bem-Vindo</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword 
          password={passwordValue} 
          handleClose={() => setModalVisible(false)} 
        />
      </Modal>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginBottom: 60,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },

  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },

  buttonText:{
    color: "#FFF",
    fontSize: 20,
  }
});