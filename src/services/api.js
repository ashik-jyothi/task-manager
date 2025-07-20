export const authAPI = {
  async login({ username, password }) {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    return {
      token: `demo-token-${username}-${Date.now()}`,
      user: { id: 1, username: username.trim(), name: username.trim() }
    };
  },

  validateToken(token) {
    return token?.startsWith('demo-token-') || false;
  }
};

export const tasksAPI = {
  async getTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    
    return todos.slice(0, 10).map(todo => ({
      id: todo.id,
      title: todo.title,
      description: `Description for: ${todo.title}`,
      status: todo.completed ? 'Completed' : 'To-Do',
      dueDate: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }));
  },

  async createTask(task) {
    return {
      id: Date.now(),
      ...task,
      dueDate: task.dueDate || new Date().toISOString().split('T')[0]
    };
  },

  async updateTask(id, updates) {
    return { id, ...updates };
  },

  async deleteTask(id) {
    return;
  }
};