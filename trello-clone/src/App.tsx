
import {Column} from './Column'
import {Card} from './Card'
import {AddNewItem} from './AddNewItem'
import { AppContainer } from './styles';


const  App = ()=> {
  return (
    <AppContainer>
      <Column text = "To Do">
        <Card text = 'generate scaffold'/>
      </Column>
      <Column text = 'In Progress'>
        <Card text = 'Learn TypeScript'/>
      </Column>
      <Column text = "Done">
        <Card text = 'Begin to use static typing'/>
      </Column>
     <AddNewItem toggleButtonText='+ Add New List' onAdd = {console.log}/>
      </AppContainer>
  );
}

export default App;
