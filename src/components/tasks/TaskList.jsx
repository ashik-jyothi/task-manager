import { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi2';
import { tasksAPI } from '../../services/api';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import DeleteConfirmation from './DeleteConfirmation';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <>
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await tasksAPI.getTasks();
      setTasks(fetchedTasks);
    } catch (err) {
      setError(err.message || 'Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleTaskSubmit = async (taskData) => {
    try {
      if (editingTask) {
        const updatedTask = await tasksAPI.updateTask(editingTask.id, taskData);
        setTasks(tasks.map(task => task.id === editingTask.id ? updatedTask : task));
      } else {
        const newTask = await tasksAPI.createTask(taskData);
        setTasks([newTask, ...tasks]);
      }
      setShowForm(false);
      setEditingTask(null);
    } catch (err) {
      setError(err.message || 'Failed to save task');
    }
  };

  const handleDeleteConfirm = async (taskId) => {
    try {
      await tasksAPI.deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
      setDeletingTask(null);
    } catch (err) {
      setError(err.message || 'Failed to delete task');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
          <p className="text-gray-600 mt-1">{tasks.length} tasks</p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <HiPlus className="w-4 h-4 mr-2" />
          Add Task
        </button>
      </div>

      {error && <ErrorMessage message={error} onDismiss={() => setError('')} />}

      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No tasks</h3>
          <p className="text-gray-500 mt-1">Get started by creating your first task.</p>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="inline-flex items-center mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <HiPlus className="w-4 h-4 mr-2" />
            Add your first task
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={(task) => { setEditingTask(task); setShowForm(true); }}
              onDelete={setDeletingTask}
            />
          ))}
        </div>
      )}

      {showForm && (
        <TaskForm
          task={editingTask}
          onSubmit={handleTaskSubmit}
          onCancel={() => { setShowForm(false); setEditingTask(null); }}
        />
      )}

      {deletingTask && (
        <DeleteConfirmation
          task={deletingTask}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;