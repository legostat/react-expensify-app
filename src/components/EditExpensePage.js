import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTrash from "@fortawesome/fontawesome-free-solid/faTrashAlt";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

Modal.setAppElement("#app");

export class EditExpensePage extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemoveExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button
            className="button button--secondary"
            onClick={this.handleOpenModal}
          >
            <FontAwesomeIcon icon={faTrash} />
            Remove Expense
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleCloseModal}
            contentLabel="Remove Expense"
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h3 className="modal__title">
              Do you realy want to remove expense?
            </h3>
            <div className="modal__body">
              <button className="button" onClick={this.onRemoveExpense}>
                Yes
              </button>
              <button
                className="button button--secondary"
                onClick={this.handleCloseModal}
              >
                No
              </button>
            </div>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
