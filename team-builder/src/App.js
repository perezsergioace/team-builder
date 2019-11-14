// import React, { useState } from 'react';

// import Form from "./components/Form";
// import Card from "./components/Card";


// import './App.css';

// function App() {
//   const [teamMember, setTeamMember] = useState([
//     {
//       name: "Sergio Perez",
//       email: "TeamMember@lambda.com",
//       role: "Full Stack Student"
//     }  
//   ]);

//   const addNewMember = member => {
//     const newTeamMember = setTeamMember([...teamMember, member]);
//   }

//   return (
//     <div className="App">
//       <h1>Team Builder</h1>
//       <Form addNewMember={addNewMember}/>
//       <Card teamMember={teamMember}/>
//     </div>
//   );
// }

// export default App;



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