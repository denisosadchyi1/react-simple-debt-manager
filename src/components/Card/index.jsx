import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { debtHistory, payOffDebt } from "../../redux/actions/postActions";

const CheckWrapper = styled.div`
  width: 200px;
`;

const CardWrapper = styled.div`
  height: 280px;
  background: #fff;
  label {
    font-size: 12px;
  }
`;

const Card = ({ debtor }) => {
  const dispatch = useDispatch()

   //Переписать ?!!! + дороюить

  const onPayOff = (id) => {
    dispatch(debtHistory(id))
    dispatch(payOffDebt(id))
  }

  return (
    <CardWrapper className="card mt-3">
      <CheckWrapper>
        <button 
          className="btn btn-success" 
          // onClick={() => dispatch(payOffDebt(debtor.id))}
          onClick={() => onPayOff(debtor.id)}
          >
          Закрыть долг
        </button>
      </CheckWrapper>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <label htmlFor="name">Имя</label>
            <h5 className="card-title" id="name">
              {debtor.name}
            </h5>
            <label htmlFor="surname">Фамилия</label>
            <h5 className="card-title" id="surname">
              {debtor.surname}
            </h5>
          </div>
          <div className="col">
            <label htmlFor="phone">Номер телефона</label>
            <h5 className="card-title" id="phone">
              {debtor.phone}
            </h5>
            <label htmlFor="date">Дата</label>
            <h5 className="card-title" id="date">
              {debtor.date}
            </h5>
          </div>
        </div>
        <label htmlFor="text">Список долгов</label>
        <div id="text">{debtor.text}</div>
      </div>
    </CardWrapper>
  );
};

export default Card;
