import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

const DebtorCreatorWrapper = styled.div`
  h3{
    margin-right: 30px;
  }
`;

const DebtCreator = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  return (
    <DebtorCreatorWrapper>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>Добавить нового</h3>
          <button 
            className="btn btn-primary"
            onClick={() => dispatch({type: 'SHOW_MODAL'})}>Добавить</button>
        </nav>
      </div>
    </DebtorCreatorWrapper>
  )
}

export default DebtCreator;