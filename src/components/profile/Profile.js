import React from 'react';

// TODO: Style Component
const Profile = props => {

  const { name, onFollow } = props
  
  return (
    <div>
    	<h1 className="title">
			Mimo Timeline
		</h1>
		<h2 className="subtitle">
			This is {name}'s' bio
		</h2>
		<button onClick={onFollow}>Follow</button>
    </div>
  );
}


export default Profile;
