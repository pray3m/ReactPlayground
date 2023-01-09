import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const ExpenseTransaction = ({expenseTransaction}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <div>
         <li className='transaction'>
          <span className='transaction-text'>{expenseTransaction.expenseText}</span>
          <span className='transaction-amount'>${expenseTransaction.expenseAmount}</span>
          <button className='delete-btn'>
            <i className='fas fa-trash' onClick={()=>{deleteTransaction(expenseTransaction.id)}}></i>
          </button>
        </li>
    </div>
  )
}

export default ExpenseTransaction