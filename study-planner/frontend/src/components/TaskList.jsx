import React, { useState, useEffect } from 'react';
import { studyAPI } from '../services/api';
import '../styles/TaskList.css';

const TaskList = ({ refreshTrigger }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await studyAPI.getAllTasks();
      setTasks(response.data);
    } catch (error) {
      alert('Error fetching tasks: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Load tasks on component mount and when refreshTrigger changes
  useEffect(() => {
    fetchTasks();
  }, [refreshTrigger]);

  // Delete task
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await studyAPI.deleteTask(id);
        fetchTasks(); // Refresh list
        alert('Task deleted successfully!');
      } catch (error) {
        alert('Error deleting task: ' + error.message);
      }
    }
  };

  // Toggle task status
  const toggleStatus = async (task) => {
    const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
    try {
      await studyAPI.updateTask(task._id, { ...task, status: newStatus });
      fetchTasks(); // Refresh list
    } catch (error) {
      alert('Error updating task: ' + error.message);
    }
  };

  // Update task
  const handleUpdate = async (updatedTask) => {
    try {
      await studyAPI.updateTask(updatedTask._id, updatedTask);
      setEditingTask(null);
      fetchTasks(); // Refresh list
      alert('Task updated successfully!');
    } catch (error) {
      alert('Error updating task: ' + error.message);
    }
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h2 className="task-list-title">Study Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks found. Add your first study task!</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <div
              key={task._id}
              className={`task-card ${task.status === 'Completed' ? 'completed' : ''}`}
            >
              {editingTask === task._id ? (
                <EditTaskForm task={task} onSave={handleUpdate} onCancel={() => setEditingTask(null)} />
              ) : (
                <TaskDisplay
                  task={task}
                  onEdit={() => setEditingTask(task._id)}
                  onDelete={() => handleDelete(task._id)}
                  onToggleStatus={() => toggleStatus(task)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Task display component
const TaskDisplay = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  return (
    <>
      <div className="task-header">
        <h3 className="task-title">{task.subjectName}</h3>
        <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>
      </div>
      
      <p className="task-info"><strong>Topic:</strong> {task.topic}</p>
      <p className="task-info"><strong>Date:</strong> {new Date(task.studyDate).toLocaleDateString()}</p>
      <p className="task-info"><strong>Time:</strong> {task.startTime} - {task.endTime}</p>
      <p className="task-info">
        <strong>Status:</strong>
        <span className={`task-status ${task.status === 'Completed' ? 'status-completed' : 'status-pending'}`}>
          {task.status}
        </span>
      </p>

      <div className="task-actions">
        <button
          onClick={onToggleStatus}
          className={`btn btn-toggle ${task.status === 'Pending' ? '' : 'pending'}`}
        >
          Mark as {task.status === 'Pending' ? 'Completed' : 'Pending'}
        </button>
        
        <button onClick={onEdit} className="btn btn-edit">
          Edit
        </button>
        
        <button onClick={onDelete} className="btn btn-delete">
          Delete
        </button>
      </div>
    </>
  );
};

// Edit task form component
const EditTaskForm = ({ task, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    ...task,
    studyDate: new Date(task.studyDate).toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="form-group">
        <input
          type="text"
          name="subjectName"
          value={formData.subjectName}
          onChange={handleChange}
          placeholder="Subject Name"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Topic"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="studyDate"
          value={formData.studyDate}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="form-input"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-input"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn btn-save">
          Save
        </button>
        <button type="button" onClick={onCancel} className="btn btn-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskList;