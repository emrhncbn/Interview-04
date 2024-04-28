import React, { useContext, useEffect, useState } from "react";

function App() {
  const [userState, setUserState] = useState({
    Namık: true,
    Eda: true,
    Suzan: true,
    Engin: true,
    Samet: true
  });

  // KODUNUZ BURAYA GELECEK

  const updateUserState = (name, active) => {
    // durum güncelleme işlemi
    setUserState(prevState => ({
      ...prevState,
      [name]: active
    }))
  }
  useEffect(() => {
    // Eğer otomatik güncelleme istenirse
    // updateUserState()
  },[])

return (
  <div className="container">
    <h1>User List</h1>
    <UserList userState={userState} updateUserState={updateUserState} />
  </div>
)
}


const UserList = ({userState,updateUserState}) => {
  // KODUNUZ BURAYA GELECEK
  return (
    <ul className="container-item">
      {Object.entries(userState).map(([name,active]) => (
      <li key={name}>
        {name}
        <button
            className="status-icon"
            style={{
              backgroundColor: active ? 'green' : 'red',
              borderRadius: '50%',
              width: '10px',
              height: '10px',
              display: 'inline-block',
            }}
            onClick={() => updateUserState(name, !active)}
          ></button>
      </li>
      ))}
    </ul>
  )
}

export default App;
