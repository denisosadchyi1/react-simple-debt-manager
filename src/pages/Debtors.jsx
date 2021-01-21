import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddForm from "../components/AddForm";
import { useDispatch, useSelector } from "react-redux";
import DebtCreator from "../components/DebtCreator";
import Card from '../components/Card';

const DebtorsWrapper = styled.div`
  background: #f8f9fa;
`;

const Debtors = () => {
  const debtors = useSelector((state) => state.post.debtorList);
  console.log(debtors);
  return (
    <Fragment>
      <DebtorsWrapper>
        <DebtCreator />
        <AddForm />
        <div className="row">
        {debtors.map(debtor => (
          <div className="col-sm-4 mb-4" key={debtor.id}>
            <Card debtor={debtor} />
          </div>
          )) }
        </div>
      </DebtorsWrapper>
    </Fragment>
  );
};

export default Debtors;
