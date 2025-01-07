import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        { id: Math.random().toString(), text: newTask, completed: false },
      ]);
      setNewTask('');
      setModalVisible(false);
    }
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>todo</Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar tarefa"
          placeholderTextColor="#A0A0A0"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Tarefas criadas <Text style={styles.badge}>{tasks.length}</Text></Text>
        <Text style={styles.statsText}>Concluídas <Text style={styles.badgeCompleted}>{tasks.filter(task => task.completed).length}</Text></Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <Icon
                name={item.completed ? "checkmark-circle-outline" : "ellipse-outline"}
                size={24}
                color={item.completed ? "#36B37E" : "#A0A0A0"}
              />
            </TouchableOpacity>
            <Text style={[styles.taskText, item.completed && styles.taskCompleted]}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Icon name="trash-outline" size={24} color="#FF5C5C" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="clipboard-outline" size={48} color="#D9D9D9" />
            <Text style={styles.emptyText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptySubText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        }
      />

      {/* Create Button */}
      <TouchableOpacity style={styles.createButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.createButtonText}>Criar</Text>
        <Icon name="add-outline" size={20} color="white" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Tarefa</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Digite sua tarefa"
              value={newTask}
              onChangeText={setNewTask}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCreateButton]}
                onPress={addTask}
              >
                <Text style={styles.modalButtonText}>Criar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6246EA',
  },
  logoutButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#6246EA',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    elevation: 3,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#E1DDFE',
    color: '#6246EA',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 14,
    marginLeft: 5,
  },
  badgeCompleted: {
    backgroundColor: '#D9FBEA',
    color: '#36B37E',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 14,
    marginLeft: 5,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 20,
  },
  emptySubText: {
    fontSize: 14,
    color: '#C0C0C0',
    marginTop: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#A0A0A0',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6246EA',
    width: 110,
    height: 52,
    borderRadius: 8,
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  modalCancelButton: {
    backgroundColor: '#FF5C5C',
  },
  modalCreateButton: {
    backgroundColor: '#6246EA',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
