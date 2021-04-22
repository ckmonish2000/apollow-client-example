import gql from "graphql-tag"

let getPermissions=gql`
query one{
  AllTasks{
    task
  }
  }
`


export {getPermissions}