import React from 'react';
import { useState, useRef } from 'react';
import AddGoalForm from './AddGoalForm.jsx'

function GoalTracker() {
  let nextId = useRef(0);
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function addGoal() {
    if (goal.trim() === '') {
      return;
    }

    setGoals([
      ...goals,
      { id: nextId.current++, goal: goal }
    ]);

    setGoal('');
  }

  return (
    <>
      <h2>Goal Tracking... otw 😆</h2>
      <input 
        type='text' 
        placeholder='add here' 
        value={goal} 
        onChange={e => setGoal(e.target.value)}
        onKeyDown={e => { 
          if (e.key==='Enter') {
            addGoal()
          }
        }}
      />
      <button 
        type='button' 
        onClick={addGoal}  
      >clik</button>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.goal}</li>
        ))}
      </ul>

      <AddGoalForm onAddGoal={addGoal} />
    </>
  );
}

export default GoalTracker;