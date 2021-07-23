import React from "react";
const users = [
  { id: 1, name: "ahsan" },
  { id: 2, name: "hassan" },
  { id: 3, name: "Abdul" },
  { id: 4, name: "usama" },
];

// const Exercise = () => {
//   return users.map((user) => {
//     return (
//       <ul key={user.id}>
//         <li>{user.name}</li>
//       </ul>
//     );
//   });
// };
class Exercise extends React.Component {
  render() {
    const result = users.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
    return <ul>{result}</ul>;
  }
}
export default Exercise;
