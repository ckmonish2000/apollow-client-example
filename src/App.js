import {Button} from "antd"
import {getPermissions}from "./services/queries"
import {useQuery,useMutation} from "@apollo/client"
import {test} from "./services/mutations"


function App() {
  let {loading, error, data,refetch} = useQuery(getPermissions)
  const [Data,{data: dta,error:er}] = useMutation(test,{refetchQueries:res=>[{query:getPermissions}]});
  console.log(dta,Data,er);
  return (
    <div className="App">
      {data?JSON.stringify(data):"loading"}
   <Button onClick={()=>{Data({variables:{uname:"jk",complete:false,task:"try32"}})}}>test</Button>
    </div>
  );
}

export default App;
