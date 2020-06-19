import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()

    const routeToForm = () => {
        if (true) { 
            history.push('/pizza')
          } 
    }

    return (
        <div className='home-wrapper'>
            <section>
                <img
                    className='home-image'
                    src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    alt='Pizza'
                />
                <button
                    onClick={routeToForm}
                    className='order-button'
                >
                Order now!
                </button>
            </section>
            <section>
                <h2>Food Delivery in Seattle</h2>
                <div className='food-choices'>
                    <div>
                        <img src='https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='McDonalds' />
                        <p>$ - American - Fast Food - Burgers</p>
                        <div>
                            <div className='delivery-time'>
                                <p>20-30 minutes</p>
                            </div>
                            <div className='delivery-fee'>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}