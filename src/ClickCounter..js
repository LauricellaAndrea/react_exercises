import React, { useEffect, useState } from "react";

  const ClickCounter = () => {
  const [contatore, setContatore] = useState(0)


const clickHandler = () => {
setContatore((contatore) => {
  return contatore + 1
})
}

const onCounterChange = () => {
  console.log(`Contatore: ${contatore}`);
}


useEffect(() => {
  console.log(`The counter is now ${contatore}`);
}, [contatore])

const aumenta = () => {
  setContatore(Oldvalue => {
    return Oldvalue +1
  })
}
const reset = () => {
  setContatore(0)
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
