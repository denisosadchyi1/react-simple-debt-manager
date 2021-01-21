import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import HistoryCard from "../components/HistoryCard";

const DebtorsWrapper = styled.div`
  background: #f8f9fa;
`;

const History = () => {
  const debtorsHistory = useSelector((state) => state.post.debtorHistoryList);
  return (
    <Fragment>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>История закрытых долгов</h3>
        </nav>
      </div>
      <DebtorsWrapper>
        <div className="row">
          {debtorsHistory.map((debtor) => (
            <div className="col-sm-4 mb-4" key={debtor.id}>
              <HistoryCard debtor={debtor} />
            </div>
          ))}
        </div>
      </DebtorsWrapper>
    </Fragment>
  );
};

export default History;
