import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useState } from "react";
import { CREATE_ONE_PRODUCT, UPDATE_ONE_PRODUCT } from "../graphql/mutations";
import { FIND_MANY_PRODUCTS } from "../graphql/querys";
//import "./styles.css";

export default function UserForm() {
    const [content, setContent] = useState({
        description: ''
    });
    const [selectedID, setSelectedID] = useState();
    const [updetedData, setUpdetedData] = useState({});
    const [select, setSelect] = useState()
    const [selectedItem, setSelectedItem] = useState("Shops");
    const {data} = useQuery(FIND_MANY_PRODUCTS)

    useEffect(()=>{
        if(data){
            setSelect(data.products)
        }
    }, [data])

    const [addNewSneakers] = useMutation(CREATE_ONE_PRODUCT);
    const [updateOneProduct] = useMutation(UPDATE_ONE_PRODUCT);
    const handlerTextAreaChanged = event => {//ф-ия, которая следит за изменениями в text area
        setContent((value)=> (
            {
            ...value,
             description : event.target.value
            }
            )
        );
    };
    
    const handlerSelectChanged = event => { //ловит значение, которое было изменено, и начинает с ним работать
        setContent((value)=> (
            {
            ...value,
             type: event.target.value
            }
            )
        );
    };

    const handlerSubmit = event => { //подтверждаем; ф-ия, которая отправляет данные на сервер
        event.preventDefault(); //отменяем перезагрузку по умолчанию
        const msg = `Your feedback about ${selectedItem}:\n${content}`;
        console.log(event);
        addNewSneakers({
            variables: {
                data: content
            },
            onCompleted: (res) => {
                console.log(res);
            }
        })
    };

    const handlerSubmitUpdate = (event) =>{
        event.preventDefault();
        updateOneProduct({
            variables: {
                where: {
                    id: selectedID * 1
                },
                data: updetedData
            }
        })
    }
    const handlerSelectId = (event) =>{
        setSelectedID(event.target.value)
    }
    const handlerUpdateDesc = (event) =>{
        setContent({description: event.target.value})
        setUpdetedData({description: { set: event.target.value}})
    }
return (
    <div>
        {/* <form onSubmit={handlerSubmit}>  
            <label>
                Create new sneakers
                <select value={content.type} onChange={handlerSelectChanged}>
                    <option>Nike</option>
                    <option>Adidas</option>
                    <option>Reabook</option>
                </select>
            </label>
            <textarea
                value={content.description}
                onChange={handlerTextAreaChanged}
                placeholder="Please enter your feedback"
                required
            />  
            <input type="submit" value="Send feedback" />
        </form> */}
        <form onSubmit={handlerSubmitUpdate}>  
            <label>
                Create new sneakers
                <select value={selectedID} onChange={handlerSelectId}>
                {
                    select ? select.map((data)=>{
                            return <option key={data.id}>{data.id}</option>
                        }) : null
                }
                </select>
            </label>
            <textarea
                value={content.description}
                onChange={handlerUpdateDesc}
                placeholder="Please enter your feedback"
                required
            />  
            <input type="submit" value="Send feedback" />
        </form>
    </div>
    );
}