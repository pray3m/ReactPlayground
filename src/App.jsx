import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);



  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="flex flex-col justify-center items-center">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};

export default App;
