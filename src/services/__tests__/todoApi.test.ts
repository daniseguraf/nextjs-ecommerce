import { todoApi, Todo } from '../todoApi';

describe('Todo API Mock', () => {
  beforeEach(() => {
    // Resetear el tiempo de delay para los tests
    jest.setTimeout(10000);
  });

  describe('getAll', () => {
    it('debería retornar todos los todos con delay de 300ms', async () => {
      const start = Date.now();
      const todos = await todoApi.getAll();
      const duration = Date.now() - start;

      expect(Array.isArray(todos)).toBe(true);
      expect(todos.length).toBeGreaterThan(0);
      expect(duration).toBeGreaterThanOrEqual(300);
    });
  });

  describe('getById', () => {
    it('debería retornar un todo específico por ID', async () => {
      const todos = await todoApi.getAll();
      const firstTodo = todos[0];

      const todo = await todoApi.getById(firstTodo.id);

      expect(todo).not.toBeNull();
      expect(todo?.id).toBe(firstTodo.id);
      expect(todo?.title).toBe(firstTodo.title);
    });

    it('debería retornar null para un ID inexistente', async () => {
      const todo = await todoApi.getById(99999);
      expect(todo).toBeNull();
    });
  });

  describe('create', () => {
    it('debería crear un nuevo todo', async () => {
      const title = 'Test todo desde prueba unitaria';
      const newTodo = await todoApi.create(title);

      expect(newTodo).toBeDefined();
      expect(newTodo.id).toBeDefined();
      expect(newTodo.title).toBe(title);
      expect(newTodo.completed).toBe(false);
      expect(newTodo.createdAt).toBeInstanceOf(Date);

      // Verificar que se agregó a la lista
      const todos = await todoApi.getAll();
      const found = todos.find(t => t.id === newTodo.id);
      expect(found).toBeDefined();
    });

    it('debería lanzar error si el título está vacío', async () => {
      await expect(todoApi.create('')).rejects.toThrow('El título no puede estar vacío');
      await expect(todoApi.create('   ')).rejects.toThrow('El título no puede estar vacío');
    });
  });

  describe('update', () => {
    it('debería actualizar un todo existente', async () => {
      const todos = await todoApi.getAll();
      const todoToUpdate = todos[0];

      const updated = await todoApi.update(todoToUpdate.id, {
        title: 'Título actualizado',
        completed: true,
      });

      expect(updated).not.toBeNull();
      expect(updated?.title).toBe('Título actualizado');
      expect(updated?.completed).toBe(true);
    });

    it('debería retornar null para un ID inexistente', async () => {
      const updated = await todoApi.update(99999, { title: 'No existe' });
      expect(updated).toBeNull();
    });
  });

  describe('delete', () => {
    it('debería eliminar un todo existente', async () => {
      const newTodo = await todoApi.create('Todo para eliminar');
      const success = await todoApi.delete(newTodo.id);

      expect(success).toBe(true);

      // Verificar que ya no existe
      const todo = await todoApi.getById(newTodo.id);
      expect(todo).toBeNull();
    });

    it('debería retornar false para un ID inexistente', async () => {
      const success = await todoApi.delete(99999);
      expect(success).toBe(false);
    });
  });

  describe('toggleComplete', () => {
    it('debería cambiar el estado de completado', async () => {
      const newTodo = await todoApi.create('Todo para toggle');
      const initialState = newTodo.completed;

      const toggled = await todoApi.toggleComplete(newTodo.id);

      expect(toggled).not.toBeNull();
      expect(toggled?.completed).toBe(!initialState);

      // Toggle de nuevo
      const toggledAgain = await todoApi.toggleComplete(newTodo.id);
      expect(toggledAgain?.completed).toBe(initialState);
    });
  });

  describe('clearCompleted', () => {
    it('debería eliminar todos los todos completados', async () => {
      // Crear y completar algunos todos
      const todo1 = await todoApi.create('Completado 1');
      const todo2 = await todoApi.create('Completado 2');
      await todoApi.create('No completado');

      await todoApi.update(todo1.id, { completed: true });
      await todoApi.update(todo2.id, { completed: true });

      const deletedCount = await todoApi.clearCompleted();

      expect(deletedCount).toBeGreaterThanOrEqual(2);

      const remainingTodos = await todoApi.getAll();
      const hasCompleted = remainingTodos.some(t => t.completed);
      expect(hasCompleted).toBe(false);
    });
  });
});
