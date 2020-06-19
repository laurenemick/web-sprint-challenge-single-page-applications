import React from 'react'

export default function Confirmation({order}) {
      if (!order) {
        return <h3>Working fetching your order...</h3>
      }
    
      return (
        <div className='order container'>
          <h2>{order.name}</h2>
          <p>Size: {order.size}</p>
          <p>Special Instructions: {order.instructions}</p>
          {
            !!order.toppings && !!order.toppings.length &&
            <div>
              Toppings:
              <ul>
                {order.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
              </ul>
            </div>
          }
        </div>
      )
    }
    