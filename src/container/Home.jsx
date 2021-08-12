import React from 'react'
import initialState from '../initialState'
import Products from "../components/Products"

export default function Home() {
    return (
        <div>
            <h1>React Conf</h1>
            <Products products={initialState.products} />
        </div>
    )
}
