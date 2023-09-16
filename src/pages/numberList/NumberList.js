import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberAction, clearNumbersAction } from "../../redux/action";
import "./NumberList.css"

function NumberList() {
  const [inputValue, setInputValue] = useState("");
  const [total, setTotal] = useState(0); // Состояние для хранения суммы чисел
  const numbers = useSelector((state) => state.numberReducer.numbers);
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    if (inputValue.trim() === "") {
      return;
    }
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      dispatch(addNumberAction(number));
      setInputValue("");
      setTotal(total + number); // Обновляем сумму
    }
  };

  const handleClearNumbers = () => {
    dispatch(clearNumbersAction());
    setTotal(0); // Сбрасываем сумму при очистке списка
  };

  return (
    <div className="number-list">
      <h2>Number List</h2>
      <div className="input-container">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddNumber}>Add</button>
      </div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <div>Total: {total}</div> {/* Выводим сумму */}
      <button onClick={handleClearNumbers}>Clear</button>
    </div>
  );
}

export default NumberList;




