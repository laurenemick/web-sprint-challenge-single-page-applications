import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    const { url, path } = useRouteMatch()

    console.log('url from the hook', url)
    console.log('path from the hook', path)

    return (
        <form className='form-container' onSubmit={onSubmit}>

            <div className='header'>
                <h2>Build Your Own Pizza:</h2>
            </div>
            <div className='form-inputs'>
                <label>Name:&nbsp;
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        placeholder="Name"
                    />
                </label>
                <br />
                <br />
                <label>Pizza Size:&nbsp;
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select a Size -</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                     </select>
                </label>
                <br />
                <br />
                <div className='form-group checkboxes'>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>

                    <label>Pepperoni
                        <input
                            name='pepperoni'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pepperoni}
                        />
                    </label>
                    <br />
                    <label>Pineapple
                        <input
                            name='pineapple'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pineapple}
                        />
                    </label>
                    <br />
                    <label>Onion
                        <input
                            name='onion'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.onion}
                        />
                    </label>
                    <br />
                    <label>Spinach
                        <input
                            name='spinach'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.spinach}
                        />
                    </label>
                </div>
                <br />
                <br />
                <label>Special Instructions:&nbsp;
                    <input
                        type='text'
                        name='instructions'
                        value={values.instructions}
                        onChange={onInputChange}
                        placeholder="Special Instructions"
                    />
                </label>
                <br />
                <br />
                <div className='form-group submit'>
                  <button disabled={disabled}>Add to Order</button>
                </div>
            </div>
            <br />
            <br />
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
        </form>
    )
}