import React from 'react'
import Item from '../components/Item'
import { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const products = await fetchData('products')
            setProducts(products.data)
            setLoading(false)
        }
        getData()
    },[])

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/api/products`)
        const data = await response.json()
        return data
    }

    const lastProduct = products[products.length - 1]

    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <h2 className='text-center fs-1'><span className="badge bg-dark">Ultimo creado</span></h2>
                <div className="col-md-6 mt-4 mb-5 text-center">
                    { !loading ? 
                    <Item {...lastProduct} /> 
                    : 
                    <div className="spinner-border m-5" role="status" style={{width: '10rem', height: '10rem'}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    }
                </div>
                <h3 className='text-center fs-1 mb-5 mt-4'><span className="badge bg-dark">Todos los productos</span></h3>
                { !loading ? products.map(product => (
                <div key={product.id} className="col-md-6">
                    <Item key={product.id} {...product} />
                </div>
                ))
                : 
                <div className="spinner-border m-5" role="status" style={{width: '10rem', height: '10rem'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                }
            </div>
        </div>
    )
}

export default Products