import React, {useState}  from 'react'

function Test() {
let[cartOpen, setCartOpen]=useState(false)

  return (
    <div>
      <button onClick={()=>setCartOpen(cartOpen=!cartOpen)}>Кнопка</button>

      {cartOpen &&(<div>Здесь будет какой-то текст, или что-то другое.....</div>)}
    </div>
  )
}
export default Test;