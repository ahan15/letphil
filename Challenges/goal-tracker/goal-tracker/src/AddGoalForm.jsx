import React from 'react';
import { useState } from 'react';

function AddGoalForm({ onAddGoal }) {
  const [goalText, setGoalText] = useState('');

  return (
    <>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          if (goalText.trim() !== '') {
            onAddGoal(goalText);
            setGoalText('');
          }
        }}
      >
        <input 
          name='add-goal-text'
          placeholder='add here'
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
        />
        <button type='submit'>clik</button>
      </form>
    </>
  );
}

export default AddGoalForm