import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  // console.log(props);
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#25064eff', foreground: true }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
