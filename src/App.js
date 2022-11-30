import { expenseArray, incomeArray } from "./components/utils/utils";
import Expenses from "./components/Expenses";
import Income from "./components/Income";

const App = () => {
  return (
    <div>
      <Expenses expenseArray={expenseArray} />
      <Income incomeArray={incomeArray} />
    </div>
  );
};

export default App;
