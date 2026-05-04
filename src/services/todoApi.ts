// Mock API para manejo de Todos con promesas y delay de 300ms

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

// Base de datos simulada en memoria
let todosDB: Todo[] = [
  { id: 1, title: 'Implementar funcionalidad de carrito', completed: false, createdAt: new Date('2026-04-28') },
  { id: 2, title: 'Agregar validación de formularios', completed: true, createdAt: new Date('2026-04-27') },
  { id: 3, title: 'Crear página de perfil de usuario', completed: false, createdAt: new Date('2026-04-29') },
];

let nextId = 4;

// Utilidad para simular delay de red
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Utilidad para simular errores aleatorios (opcional)
const shouldSimulateError = () => Math.random() < 0.05; // 5% de chance de error

export const todoApi = {
  // READ - Obtener todos los todos
  getAll: async (): Promise<Todo[]> => {
    await delay(300);
    
    if (shouldSimulateError()) {
      throw new Error('Error al obtener los todos');
    }
    
    return [...todosDB];
  },

  // READ - Obtener un todo por ID
  getById: async (id: number): Promise<Todo | null> => {
    await delay(300);
    
    if (shouldSimulateError()) {
      throw new Error(`Error al obtener el todo con ID ${id}`);
    }
    
    const todo = todosDB.find(t => t.id === id);
    return todo ? { ...todo } : null;
  },

  // CREATE - Crear un nuevo todo
  create: async (title: string): Promise<Todo> => {
    await delay(300);
    
    if (shouldSimulateError()) {
      throw new Error('Error al crear el todo');
    }
    
    if (!title.trim()) {
      throw new Error('El título no puede estar vacío');
    }
    
    const newTodo: Todo = {
      id: nextId++,
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
    };
    
    todosDB.push(newTodo);
    return { ...newTodo };
  },

  // UPDATE - Actualizar un todo existente
  update: async (id: number, updates: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo | null> => {
    await delay(300);
    
    if (shouldSimulateError()) {
      throw new Error(`Error al actualizar el todo con ID ${id}`);
    }
    
    const index = todosDB.findIndex(t => t.id === id);
    
    if (index === -1) {
      return null;
    }
    
    todosDB[index] = {
      ...todosDB[index],
      ...updates,
    };
    
    return { ...todosDB[index] };
  },

  // DELETE - Eliminar un todo
  delete: async (id: number): Promise<boolean> => {
    await delay(300);
    
    if (shouldSimulateError()) {
      throw new Error(`Error al eliminar el todo con ID ${id}`);
    }
    
    const index = todosDB.findIndex(t => t.id === id);
    
    if (index === -1) {
      return false;
    }
    
    todosDB.splice(index, 1);
    return true;
  },

  // EXTRA - Marcar como completado/incompleto
  toggleComplete: async (id: number): Promise<Todo | null> => {
    await delay(300);
    
    const todo = todosDB.find(t => t.id === id);
    
    if (!todo) {
      return null;
    }
    
    return todoApi.update(id, { completed: !todo.completed });
  },

  // EXTRA - Limpiar todos completados
  clearCompleted: async (): Promise<number> => {
    await delay(300);
    
    const initialLength = todosDB.length;
    todosDB = todosDB.filter(t => !t.completed);
    return initialLength - todosDB.length;
  },
};
