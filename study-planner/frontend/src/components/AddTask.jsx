import React, { useState } from 'react';
import { studyAPI } from '../services/api';
import '../styles/AddTask.css';

const AddTask = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    subjectName: '',
    topic: '',
    studyDate: '',
    startTime: '',
    endTime: '',
    priority: 'Medium',
    status: 'Pending'
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await studyAPI.createTask(formData);
      // Reset form
      setFormData({
        subjectName: '',
        topic: '',
        studyDate: '',
        startTime: '',
        endTime: '',
        priority: 'Medium',
        status: 'Pending'
      });
      onTaskAdded(); // Refresh task list
      alert('Task added successfully!');
    } catch (error) {
      alert('Error adding task: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-task-container">
      <h2 className="add-task-title">Add New Study Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Subject Name:</label>
          <input
            type="text"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Topic:</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Study Date:</label>
          <input
            type="date"
            name="studyDate"
            value={formData.studyDate}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <div className="form-col">
            <label className="form-label">Start Time:</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-col">
            <label className="form-label">End Time:</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label className="form-label">Priority:</label>
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
          </div>
          <div className="form-col">
            <label className="form-label">Status:</label>
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
        </div>

        <button type="submit" disabled={loading} className="add-task-btn">
          {loading ? 'Adding...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default AddTask;