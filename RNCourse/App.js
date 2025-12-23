import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  function startAddGoalHandler(params) {
    setModalVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            // console.log(itemData);
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            // { console.log(item); }
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
