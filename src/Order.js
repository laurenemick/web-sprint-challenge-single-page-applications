import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function Order({order}) {
    const { url, path } = useRouteMatch()

    console.log('url from the hook', url)
    console.log('path from the hook', path)

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
    