import React from "react";

const OrderForm = (props) => {

    const { change, submit, errors } = props;
    const { username, size, pepperoni, sausage, bacon, chicken, special } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return(
    <form id = 'pizza-form' onSubmit={onSubmit}>
        <div>
            <h1>Build A Pizza</h1>
            <p>{errors.username}</p>
        </div>

        <div>
            <label>Name:
                <input id ='name-input'
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChange}
                />
            </label>
            <div>
                <label>Size:
                    <select id ='size-dropdown'
                        name='size'
                        value={size}
                        onChange={onChange}
                    >
                        <option value=''>--Select A Size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
            </div>
            <h2>Toppings</h2>
            <label>Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    checked={pepperoni}
                    onChange={onChange}
                />
            </label>
            <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    checked={sausage}
                    onChange={onChange}
                />
            </label>
            <label>Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    checked={bacon}
                    onChange={onChange}
                />
            </label>
            <label>Chicken
                <input
                    type='checkbox'
                    name='chicken'
                    checked={chicken}
                    onChange={onChange}
                />
            </label>
            <div>
                <label>Special Instructions:
                    <input id ='special-text'
                        type='text'
                        name='special'
                        value={special}
                        onChange={onChange}
                    />
                </label>
            </div>
            <input id='order-button' type='submit' value='Add to order' />
        </div>
    </form>
    )
}

export default OrderForm;