import React, { useEffect, useState } from 'react'

export const Subtotal = ({ item }) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [item])

    const totalAmount = () => {
        let price = 0;
        item.map((item) => {
            price += item.price.cost
        });

        setPrice(price)
    }
    return (
        <>
            <div className='sub_item'>
                <h3>Subtotal ( {item.length} items ): <strong style={{ 'fontWeight': '700', 'color': '#111' }}>₹{price}</strong></h3>
            </div>
        </>
    )
}
