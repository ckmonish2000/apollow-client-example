import {gql} from "@apollo/client"


let test=gql`
mutation first($uname:String,$complete:Boolean,$task:String) {
    AddTodo(Users: $uname, complete: $complete, task: $task) {
      ok
      objs{
        Todoid
        task
      }
    }
  }
`


export {test}