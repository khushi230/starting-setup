import  expenseArray from "./components/utils/utils";
import Expenses from "./components/Expenses";


const App = () => {
  return (
    <div>
      <Expenses expenseArray={expenseArray} />
      
    </div>
  );
};

export default App;
