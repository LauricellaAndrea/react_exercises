import React, { useState } from "react";

  const ClickCounter = () => {
  const [contatore, setContatore] = useState(0)

const reset = () => {
  setContatore(0)
}  


const aumenta = () => {
  setContatore(Oldvalue => {
    return Oldvalue +1
  })
}

return(
<div>
  <h3>{contatore}</h3>
  <button onClick={() => setContatore(contatore -1)}>
  Diminuisci</button>
  <button onClick={() => setContatore(contatore +1)}>
  incrementa</button>
  <button onClick={reset}>
  Reset</button>
</div>

)
}


export default ClickCounter

// export class ClickCounter extends React.Component {
//   state = {
//     count: 0,
//   };

//   ClickButtonEvent = () => {
//     this.setState((state) => {
//       return { count: state.count + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Count of click: {this.state.count}</h3>
//         <button onClick={this.ClickButtonEvent}>Increment Counter</button>
//       </div>
//     );
//   }
// }
