import React, { Fragment, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {addDebtor} from '../../redux/actions/postActions';

const GlobalStyles = createGlobalStyle`
  .show {
    display: block;
  }
  .hide{
    display: none;
  }
  textarea{
    resize: none;
  }
`;

const CloseButton = styled.button`
  font-size: 11px;
  font-weight: 700;
  border-radius: 33px;
  height: 27px;
  padding: 0 8px;
  text-align: center;
`;

const CloseButtonWrapper = styled.div`
  float: right;
`;

const FormWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
const FormWindowWrapper = styled.form`
  width: 450px;
  height: 500px;
  margin: 70px auto;
  background: #f8f9fa;
  padding: 20px 25px;
  border-radius: 8px;
`;


const AddForm = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  // const [name, setName] = useState('')

  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.app.modal);
  const cls = showModal ? "show" : "hide";

  const onClose = (e) => {
    e.preventDefault();
    dispatch({ type: "HIDE_MODAL" });
  };

  //Переписать !

  const onAdd = (e) => {
    e.preventDefault();

    if(name.trim().length === 0 || surname.trim().length === 0){
      alert('Введите данные о должнике')
    } 
    else if (text.trim().length === 0 ) {
      alert('Введите данные о долге')
    }
    else {
      const newDebtor = {
        payOff: false,
        name,
        surname,
        phone,
        text,
        date,
        id: Date.now().toString()
      }
      dispatch(addDebtor(newDebtor))
  
      setDate('')
      setName('')
      setPhone('')
      setSurname('')
      setText('')
    }
  };

  //Переписать !

  const onKeyAdd = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      if(name.trim().length === 0 || surname.trim().length === 0){
        alert('Введите данные о должнике')
      } 
      else if (text.trim().length === 0 ) {
        alert('Введите данные о долге')
      } else {
        const newDebtor = {
          payOff: false,
          name,
          surname,
          phone,
          text,
          date,
          id: Date.now().toString()
        }
        dispatch(addDebtor(newDebtor))
  
        setDate('')
        setName('')
        setPhone('')
        setSurname('')
        setText('')
      }
    }
  }

  return (
    <Fragment>
      <GlobalStyles />
      <FormWrapper className={cls}>
        <FormWindowWrapper>
          <CloseButtonWrapper>
            <CloseButton className="btn btn-danger" onClick={(e) => onClose(e)}>
              X
            </CloseButton>
          </CloseButtonWrapper>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Имя</label>
              <input
                type="name"
                className="form-control"
                id="inputEmail4"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                onKeyPress={(e) => onKeyAdd(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Фамилия</label>
              <input
                type="surname"
                className="form-control"
                id="inputPassword4"
                placeholder="surname"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                onKeyPress={(e) => onKeyAdd(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Номер телефона</label>
            <input
              type="number"
              className="form-control"
              id="inputAddress"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              onKeyPress={(e) => onKeyAdd(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Список долгов</label>
            <textarea
              className="form-control"
              placeholder="Enter all debt"
              rows="4"
              onChange={(e) => setText(e.target.value)}
              value={text}
              onKeyPress={(e) => onKeyAdd(e)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Дата</label>
              <input
                type="text"
                className="form-control"
                placeholder="debt date"
                id="inputCity"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                onKeyPress={(e) => onKeyAdd(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => onAdd(e)}
          >
            Добавить нового
          </button>
        </FormWindowWrapper>
      </FormWrapper>
    </Fragment>
  );
};

export default AddForm;
