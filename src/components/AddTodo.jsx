import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";


const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title != "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 py-3 px-6 rounded-[10px] shadow-2xl text-xl border-gray-400 w-[400px]"
        /> <br/>
        <button className="m-5 bg-purple-500 px-7 py-3 rounded-md text-white hover:bg-purple-700 hover:font-medium transition-all hover:duration-150 ease-in-out">Add</button>
      </form>
    </center>
  );
};

export default AddTodo;
