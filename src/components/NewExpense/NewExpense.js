import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [viewForm, setViewForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setViewForm(false);
  };

  const showFormHandler = () => {
    setViewForm(true);
  };

  const hideFormHandler = () => {
    setViewForm(false);
  };

  return (
    <div className='new-expense'>
      {!viewForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {viewForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
