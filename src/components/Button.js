import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Dimensions, 
  TouchableOpacity,
} from 'react-native';

export default props => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple)stylesButton.push(styles.buttonTriple);
  if(props.operation)stylesButton.push(styles.operationButton);

  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}> {props.label} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 45,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#111',
    fontWeight: 'bold',
    color: '#222'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});