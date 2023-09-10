import React from 'react'

function OrderProduct() {
  return (
    <div className='cartItem'>
      <img src= ''/>
      <div className='desc'>
        <p>
          {/* <b>{productName}</b> */}
        </p>
        {/* <p><b>{availableQuantity}</b></p> */}
        <div className='countHandler'>
          <button>-</button>
          <input value={null}/>
          <button>+</button>
           </div>
      </div>

    </div>
  )
}

export default OrderProduct ;