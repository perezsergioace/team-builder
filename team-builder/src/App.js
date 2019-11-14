import React, { useState } from 'react';

import './App.css';
import Form from "./components/Form";
import Card from "./components/Card"

function App() {
 const [teamMember, setTeamMember] = useState([
   {
     Name: "Sergio Perez",
     Email: "email@gmail.com",
     Role: "Web25 Student"
   }
 ])

 const addNewMember = member => {
  const newTeamMember = setTeamMember([...teamMember, member]);
};

  return (
    <div className="App">
     <h1>Team Builder</h1>
     
     <Form addNewMember={addNewMember}/>
     <Card teamMember={teamMember} />
     
    </div>
  );
}

export default App;