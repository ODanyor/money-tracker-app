import React from "react";
import MainContainer from "../../containers/MainContainer/index";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTransaction } from "../../store/actions/transactionActions";
// Components
import History from "../History/index";
import Form from "../Form/index";

const index = ({ addTransaction, loading, transactions }) => {
  return (
    <MainContainer>
      <History transactions={transactions} />
      <Form addTransaction={addTransaction} />
      <h1>Charts</h1>
    </MainContainer>
  );
};

index.propTypes = {
  loading: PropTypes.bool.isRequired,
  transactions: PropTypes.array.isRequired,
  addTransaction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
});

const mapStateToProps = state => ({
  loading: state.transactions.loading,
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
