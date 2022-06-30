import React from 'react'

function ProfilePage({user}) {
  return (
    
    <div className='profile-page'>
      {user ? user.title : ""}
    { user &&
      <button onClick={() => {
        alert("Chiiiiiu")
      }}>View full profile</button>
    }
    </div>
  )
}

export default ProfilePage