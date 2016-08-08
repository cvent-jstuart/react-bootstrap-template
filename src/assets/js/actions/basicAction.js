import axios from "axios";

// store.dispatch((dispatch) => {
//   dispatch({type: "FETCH_USERS_START"})
//
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response) => {
//       dispatch({type: "RECIEVE_USERS", payload: response.data})
//     })
//     .catch((err) => {
//       dispatch({type: "FETCH_USERS_ERROR", payload: err})
//     })
// })

export function addUser(name, age, company) {
  return {
    type: "ADD_USER",
    payload: {
      name: name,
      age: age,
      company: company
    }
  }
}
