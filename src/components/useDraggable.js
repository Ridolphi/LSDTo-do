// useDraggable.js
import { ref } from 'vue';
import { fetchTodos, todos, deleteTask, editTask, deleteModal } from "../service/ToDosAPI.js";


export function useDraggable() {
  const draggedTask = ref(null);

  const onDragStart = (task, event) => {
    draggedTask.value = task;
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = async (event, status) => {
    event.preventDefault();
    if (draggedTask.value) {
      const updatedTask = { ...draggedTask.value, tags: { ...draggedTask.value.tags, status } };
      await editTask(updatedTask.id, updatedTask);
      draggedTask.value = null;
    }
    fetchTodos();  //llamar al fetch para actualizar el template...
  };

  return { draggedTask, onDragStart, onDragOver, onDrop };
}
