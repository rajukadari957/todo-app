import React,{useState} from 'react';
import './App.css';

// function Index(){

//   const [value,setValue]=useState(10);

//   const incrementValue=()=>{
//     return setValue(value+1);
//   }

//   const decrementValue=()=>{
//     if(value<=10){
//       return alert("Value cannot be less than 10");
//     }
//     return setValue(value-1);

//   }
//   return (
//     <div className="index">
//     <button onClick={decrementValue}>-</button>
//     <button>{value}</button>
//      <button onClick={incrementValue}>+</button>
//      </div>
//   );
// }



// function Index(){

//   const initialObj={
//     firstName:"Raju",
//     lastName:"Sharma"
//   }

//   const [Data,setData]=useState(initialObj);


//   const changefirstName=()=>{
//     setData({
//       firstName:"Rahul",
//       lastName:"Kadari",
//     })
//   }

//   const changeLastname=()=>{
//     setData({
//       ...Data,
//       lastName:"Kumar"
//     })
//   }
//   return(
//     <div>
//       <p>Hello this is my {Data.firstName}</p>
//       <button onClick={changefirstName}>Change firstName</button>
//       <button onClick={changeLastname}>Change LastName</button>
//       <p>Hello this is my {Data.lastName}</p>
//     </div>
//   );
// }



// function Index(){
//   const ArrayData=[
//     {
//       id:"hideit",
//       Firstname:"Raju",
//       Lastname:"Kadari",
//     },
//     {
//       id:"notshow",
//       Firstname:"Rahul",
//       Lastname:"Varma",
//     }
//   ];
//   const [data,setData]=useState(ArrayData);
//   const hiding=(comingData)=>{
//                const newData=data.filter((item)=>item.id!==comingData);
//                setData(newData);
//                 console.log(newData);
//                 }

//   return(
//     <div>
//      <h1>Array Data</h1>
//      {data.map((item,index)=>{
//        const {Firstname,Lastname,id}=item;
//        return(
//           <div>
//              <p>MY FIRSTNAME IS {Firstname}</p>
//              <p>MY LASTNAME IS {Lastname}</p>
//              <button onClick={()=>hiding(id)}>Hide me</button>
//             </div>
//        );

//      })}
//     </div>

//   );
// }



// function Index(){
//   const [count,setCount]=useState(0);
//   const incrementButton=()=>{
//     return setCount(count+1);
//   }

//   const decrementButton=()=>{
//     if(count<=0){
//       return alert("Count cannot be less than 0");
//     }
//     return setCount(count-1);
//   }
//   return(
//     <div>
//       <button onClick={decrementButton}>-</button>
//       <div>{count}</div>
//       <button onClick={incrementButton}>+</button>
//     </div>
//   );
// }


// function Index(){
//   const initObj=[{
//     id:"hideit",
//     firstName:"Raju",
//     Lastname:"Kadari",
//   },
//     {
//       id:"notshow",
//       firstName:"Charan",
//     Lastname:"Velaga",
//    },
//      {
//     id: "showme",
//     firstName: "Anjali",
//     Lastname: "Sharma",
//   },
//   {
//     id: "deleteit",
//     firstName: "Rahul",
//     Lastname: "Kumar",
//   },
//   {
//     id: "keepit",
//     firstName: "Sneha",
//     Lastname: "Reddy",
//   },
//   {
//     id: "randomid",
//     firstName: "Vikas",
//     Lastname: "Patel",
//   },
//   ]
//   const [data,setdata]=useState(initObj);

  // const deleteInfo=(comingData)=>{
  //   const newData=data.filter((item)=>item.id!==comingData);
  //   setdata(newData);
  //   console.log(newData);

  // }
  // const changeFirst=()=>{
  //   return setName({
  //     ...name,
  //     firstName:"Charan"
  //   })
  // }

  // const changeLast=()=>{
  //   return setName({
  //     ...name,
  //     Lastname:"Velaga",
  //   })
  // }

//   return(
//     <div>
//       {data.map((item,index)=>{
//         const {firstName,Lastname,id}=item;
//         return(
//           <div>
//             <p >Hello this is my firstname {firstName}</p>
//             <p>Hello this is my lastname {Lastname}</p>
//             <button onClick={()=>deleteInfo(id)}>Delete me</button>
//             </div>

//         );
//       })}
//     </div>
//   );
// }


//we can hide the data using conditional rendering
// function Index(){
//   const [show,setShow]=useState(false);

//   const changeHandle=()=>{
//     setShow(!show);
//   }
//   return(
//     <div>
//       <button onClick={changeHandle}>{show?"hide":"show"}</button>
//       {show ? (
//       <div style={{width:"300px",height:"100px",backgroundColor:"black",margin:"auto",textAlign:"center",color:"white"}}>
//         lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
//       </div>
//       ):(<div>Data is hidden</div>)}
//     </div>
//   );
// }


//create form and getting details about connection between form and usestate 

// function Index(){
//   const [firstName,setfirstName]=useState("");
//   const[email,setEmail]=useState("");
//   const[password,setPassword]=useState("");

//   const takeInput=(e,name)=>{
//     if(name==="firstName"){
//       setfirstName(e.target.value);
//     }
//     else if(name==="email"){
//       setEmail(e.target.value);
//     }
//     else{
//       setPassword(e.target.value);
//     }
//   }

//   const changeBehavior=(e)=>{
//     e.preventDefault();
//     let userObj={
//       firstName:firstName,
//       email:email,
//       password:password,
//     }
//     console.log(userObj);
//     console.log("Form is submitted");
//   }

 
//   return(
//     <div className="form">
//       <form >
//         <h1>Form</h1>
//         <div>
//            <input type="text" name="firstName" placeholder='Enter your name' value={firstName} onChange={(e)=>takeInput(e,"firstName")}/>
//         </div>
//         <div>
//            <input type="email" name="email" placeholder='Enter your email' value={email} onChange={(e)=>takeInput(e,"email")}/>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder='Enter your Password' value={password}
//           onChange={(e)=>takeInput(e,"password")}/>
//         </div>
       

//         <button  onClick={changeBehavior}>Submit</button>
//       </form>
//     </div>

//   );
// }


//Creating Todo



function Index() {
  const [editing, setEditing] = useState({ id: "", isEditing: false });
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({ text: "", id: "" });

  const handleInput = (e) => {
    setMessage({ ...message, text: e.target.value });
  };

  const handleAdding = (e) => {
    e.preventDefault();
    if (message.text.trim() === "") return;

    let todos = {
      text: message.text,
      id: new Date().getTime().toString(),
    };

    setList([...list, todos]);
    setMessage({ text: "", id: "" });
  };

  const handleDelete = (id) => {
    const newTodos = list.filter((eachitem) => eachitem.id !== id);
    setList(newTodos);
  };

  const handleChangeEdit = (id) => {
    setEditing({ id: id, isEditing: true });
    let editableItem = list.find((eachItem) => eachItem.id === id);
    setMessage({ text: editableItem.text, id: editableItem.id });
  };

  const handleEditing = (e) => {
    e.preventDefault();
    const toDos = list.map((eachItem) =>
      eachItem.id === editing.id
        ? { text: message.text, id: editing.id }
        : eachItem
    );

    setList(toDos);
    setMessage({ text: "", id: "" });
    setEditing({ id: "", isEditing: false });
  };

  // ✅ Inline CSS Styles
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px 30px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      marginBottom: "20px",
      fontSize: "28px",
      fontWeight: "bold",
      color: "#333",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
    },
    btn: {
      padding: "10px 18px",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      cursor: "pointer",
      transition: "0.3s",
    },
    addBtn: { background: "#28a745", color: "#fff" },
    editBtn: { background: "#007bff", color: "#fff" },
    deleteBtn: { background: "#dc3545", color: "#fff" },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#f8f9fa",
      padding: "12px 16px",
      margin: "8px 0",
      borderRadius: "8px",
    },
    todoText: {
      fontSize: "16px",
      color: "#333",
      flex: 1,
      textAlign: "left",
    },
    empty: {
      color: "#888",
      marginTop: "20px",
      fontStyle: "italic",
    },
    smallBtn: {
      padding: "6px 12px",
      fontSize: "14px",
      marginLeft: "8px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Todo List ✨</h1>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={message.text}
          onChange={handleInput}
          style={styles.input}
        />

        {editing.isEditing ? (
          <button
            style={{ ...styles.btn, ...styles.editBtn }}
            onClick={handleEditing}
          >
            Update
          </button>
        ) : (
          <button
            style={{ ...styles.btn, ...styles.addBtn }}
            onClick={handleAdding}
          >
            Add
          </button>
        )}
      </form>

      {list.length === 0 && <h4 style={styles.empty}>No items in the list 😔</h4>}

      <ul style={styles.list}>
        {list.map(({ text, id }) => (
          <li key={id} style={styles.item}>
            <span style={styles.todoText}>{text}</span>
            <div>
              <button
                style={{ ...styles.smallBtn, ...styles.editBtn }}
                onClick={() => handleChangeEdit(id)}
              >
                Edit
              </button>
              <button
                style={{ ...styles.smallBtn, ...styles.deleteBtn }}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
