import React from 'react';

function MainComponent() {
  return (
    <div className='profile-parent'>
      <div className='single-input'>
        <label for="name">Name :</label>
        <input type="text" id="name" name="name" value="" />
      </div>
      <div className='single-input'>
        <label for="age">Age :</label>
        <input type="number" id="age" name="age" value="" />
      </div>
      <div className='single-input'>
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" value="" />
      </div>
    </div>
  );
}

export default MainComponent;
