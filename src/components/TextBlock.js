import React, {useState} from 'react'

function TextBlock() {
let[cartOpen, setCartOpen]=useState(false)







  return (
    <div>
      <button onClick={()=>setCartOpen(cartOpen=!cartOpen)}>Правила заказа</button>

      {cartOpen&&( <p>Здесь будет информация о правилах заказа продукции.....</p>)}

      
    </div>
  )
}

export default TextBlock
