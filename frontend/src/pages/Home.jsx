import React from 'react'
import Panel from '../components/Panel'
import { useEffect, useState } from 'react'

function Home() {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [brands, setBrands] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const products = await fetchData('products')
            setProducts(products)
            const users = await fetchData('users')
            setUsers(users)
            const brands = await fetchData('products')
            setBrands(brands.countByCategory)
            setLoading(false)
        }
        getData()
    }, [])

    const fetchData = async (name) => {
        const response = await fetch(`http://localhost:8000/api/${name}`)
        const data = await response.json()
        return data
    }

    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h2 className='text-center fs-1 mb-5'><span className="badge bg-dark">Dashboard</span></h2>
                    { !loading ?
                    <>
                        <Panel title="Productos" count={products.count} color='#f3a683' />
                        <Panel title="Usuarios" count={users.count} color='#f7d794' />
                        <Panel title="Marcas" count={brands.length} color='#ea8685' />
                    </>
                    :
                    <div className="spinner-border m-5" role="status" style={{width: '10rem', height: '10rem'}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home