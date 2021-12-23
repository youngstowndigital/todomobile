import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";
 
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
 
export default function App() {
  const [tasks, setTasks] = useState([{ id: 1, value: "Hello, world!" }]);
  const [addTasks, setAddTasks] = useState(false);
 
  const addTaskHandler = taskTitle => {
    setTasks([
      ...tasks,
      { id: Math.random().toString(), value: taskTitle, checked: true }
    ]);
    setAddTasks(false);
  };
 
  const deleteTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };
 
  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };

  const checktaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.map(task => task.id === taskId ? { ...task, checked: !task.checked } : task)
    })
  }
 
  return (
    <View>
      <Header title="To-Do App"></Header>
      <View style={styles.screen}>
        <Button title="Add New task" onPress={() => setAddTasks(true)}></Button>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>
 
      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
              checked={itemData.item.checked}
              onCheckTask={checktaskHandler}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70
  },
  screenlist: {
    marginLeft: 20,
    marginRight: 20
  }
});
