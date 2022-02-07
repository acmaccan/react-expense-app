import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense</h2>;
  }

  return (
    <li className='expenses-list'>
      {props.items.map((filteredExpense) => (
        <ExpenseItem
          key={filteredExpense.id}
          title={filteredExpense.title}
          amount={filteredExpense.amount}
          date={filteredExpense.date}
        />
      ))}
    </li>
  );
};

export default ExpensesList;
