import React from "react";
import { useState } from "react";
//import "./styles.css";

export default function UserForm() {
    const [content, setContent] = useState("");
    const [selectedItem, setSelectedItem] = useState("Shops");

    const handlerTextAreaChanged = event => {//ф-ия, которая следит за изменениями в text area
        setContent(event.target.value);
    };
    
    const handlerSelectChanged = event => { //ловит значение, которое было изменено, и начинает с ним работать
        setSelectedItem(event.target.value);
    };

    const handlerSubmit = event => { //подтверждаем; ф-ия, которая отправляет данные на сервер
        event.preventDefault(); //отменяем перезагрузку по умолчанию
        const msg = 'Your feedback about ${selectedItem}:\n${content}';
        alert(msg);
    };
return (
    <div>
        <form onSubmit={handlerSubmit}>  
            <label>
                Please choose category of your feedback
                <select value={selectedItem} onChange={handlerSelectChanged}>
                    <option>Service</option>
                    <option>Products</option>
                    <option>Shops</option>
                </select>
            </label>
            <textarea
                value={content}
                onChange={handlerTextAreaChanged}
                placeholder="Please enter your feedback"
                required
            />  
            <input type="submit" value="Send feedback" />
        </form>
    </div>
    );
}