import { ref } from 'vue';

const todos = ref([]);

export const fetchTodos = async () => {
  try {
    const response = await fetch("https://node-todos.vercel.app/users/grupo3/todos");
    const data = await response.json();
    todos.value = data; // Asignar los datos a la propiedad reactiva
  } catch (error) {
    console.error('Error al obtener los contactos:', error);
  }
  //   console.log(todos.value); // Comprobamos por consola que los datos se asignaron correctamente
};


export const deleteTask = async (id) => {
  try {
    const response = await fetch(`https://node-todos.vercel.app/users/grupo3/todos/${id}`, {
      'method': 'DELETE',
    });
    if (response.ok) {
      todos.id.value = todos.id.value.filter(todo => todo.id !== id);
    } else {
      console.error('Error al eliminar la tarea:', response.status);
    }
  } catch (error) {
    console.error('Error al eliminar la tarea:', error);
  }
  fetchTodos();
}

export { todos }; // Exportamos la referencia a 'todos' para que sea accesible donde sea necesario
