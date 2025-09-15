import {useContext, useState} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../services/useTodoService";
import {Modal, Input} from 'antd';

export function TodoGroup() {
  const {state, dispatch} = useContext(TodoContext);
  const navigate = useNavigate();
  const {addTodo, deleteTodo, loadTodo, updateTodo} = useTodoService();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [updateId, setUpdateId] = useState(-1)

  function deleteToto(item) {
    deleteTodo(item)
    .then(() => dispatch({
      type: "DELETE_TODO",
      payload: {id: item.id}
    }));
  }

  const showModal = (item) => {
    setIsModalVisible(true);
    setInputValue(item.text);
    setUpdateId(item.id)
  };

  const handleOk = () => {
    if (inputValue.trim()) {
      const todoToUpdate = state.find(item => item.id === updateId);
      if (todoToUpdate) {
        const updatedTodo = {...todoToUpdate, text: inputValue};
        updateTodo({todo: updatedTodo}).then(todo => dispatch({
          type: "TOGGLE_TODO",
          payload: todo
        }))
      }
      setInputValue('');
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setInputValue('');
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
      <div>
        <div className={"todo-title"} onClick={showModal}>Todo List</div>
        {state.length === 0 ? (
            <div className="todo-empty">Add the things you need to do today...</div>
        ) : (
            state.map((item, index) => (
                <div className="todo-row" key={index}>
                  <TodoItem todo={item} index={index}/>
                  <button type="button" className={"todo-delete-button"} onClick={() => deleteToto(item)}>X</button>
                  <button onClick={() => navigate(`/todos/${item.id}`)}>detail</button>
                  <button onClick={() => showModal(item)}>edit</button>
                </div>
            ))
        )}
        <Modal
            title="Basic Modal"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          <Input.TextArea value={inputValue} onChange={handleChange} placeholder="Enter your todo item"/>
        </Modal>
      </div>
  );
}