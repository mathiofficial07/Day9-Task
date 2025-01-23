//clock timer
// import React, { useState, useEffect } from 'react';

// const ClockTimer = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

  
//     return () => clearInterval(timerId);
//   }, []);

//   return (
//     <div className="clock-container">
//       <div className="clock">
//         {time.toLocaleTimeString()}
//       </div>
//     </div>
//   );
// };

// export default ClockTimer;

//weather app
// import React, { useState } from 'react';
// import './App.css';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     if (!city) {
//       setError('Please enter a city.');
//       return;
//     }

//     try {
//       setError('');
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
//       );
//       if (!response.ok) throw new Error('28 degree celsius');
//       const data = await response.json();
//       setWeather(data);
//     } catch (err) {
//       setWeather(null);
//       setError(err.message);
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchWeather();
//   };

//   return (
//     <div className="weather-app">
//       <h1>Weather App</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {error && <p className="error">{error}</p>}

//       {weather && (
//         <div className="weather-info">
//           <h2>{weather.name}, {weather.sys.country}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;

//To Do List
import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

 
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Avoid adding empty tasks
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };


  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };


  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
