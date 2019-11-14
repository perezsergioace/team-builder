// import React, { useState } from "react";

// const Form = props => {
//     const [form, setForm] = useState({ name: "", email: "", role: "" });

//     const handleChanges = e => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const submitForm = e => {
//         e.preventDefault();
//         const newForm = {  
//           ...form,
//           id: Date.now()
//         };
//           props.addNewMember(newForm)
//           setForm({ 
//         name: "",
//         email: "",
//         role: ""})
//         console.log(newForm)
//     };

//     return (
//         <form onSubmit={submitForm}>
//             <label htmlFor="name">Name</label>
//             <input 
//             id="name" 
//             type="text" 
//             name="name" 
//             value={form.name}
//             onChange={handleChanges}
//             />

//             <label htmlFor="email">Email</label>
//             <input 
//             id="email" 
//             type="text" 
//             name="email" 
//             value={form.email}
//             onChange={handleChanges}
//             />

//             <label htmlFor="role">Role</label>
//             <input 
//             id="role" 
//             type="text" 
//             name="role" 
//             value={form.role}
//             onChange={handleChanges}
//             />
            
//             <button type="submit">Add Member</button>
//         </form>
//     );
// };

// export default Form;






import React, { useState } from "react";

 const Form = props => {
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Role: ""
      });

      const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const submitHandler = e => {
        e.preventDefault();
        const newForm = {  
          ...form,
          id: Date.now()
        };
          props.addNewMember(newForm)
          setForm({ Name: "",
        Email: "",
        Role: ""})
        console.log(newForm)
    }
      
    return (
         
        <form onSubmit={submitHandler} className="form">
                  
        <label htmlFor="name">Name: </label>
        <input 
        id="name" 
        type="text" 
        name="Name" 
        onChange={handleChanges}
        />
                 
        <label htmlFor="email">Email: </label>
        <input 
        id="email" 
        type="text" 
        name="Email" 
        onChange={handleChanges} 
        />
                  
        <label htmlFor="role">Role: </label>
        <input 
        id="Role" 
        type="text" 
        name="Role" 
        onChange={handleChanges} 
        />
                  
        <button type="submit">Add Member</button>
        </form>
    );
};

export default Form;