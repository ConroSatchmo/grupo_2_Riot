import React from 'react'
import Panel from '../components/Panel'
import { useEffect, useState } from 'react'

function Brands() {
	const [brands, setBrands] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getData = async () => {
			const brands = await fetchData()
			setBrands(brands.countByCategory)
			setLoading(false)
		}
		getData()
	}, [])

	const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/api/products`)
        const data = await response.json()
        return data
    }

	return (
		<div className='container my-5'>
			<div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h2 className='text-center fs-1 mb-5'><span className="badge bg-dark">Marcas</span></h2>
                    { !loading ?
                    brands.map((brand, i) => (
						<Panel key={i+1} title={brand.brand} count={brand.products} />
					))
                    :
                    <div className="spinner-border text-center" role="status" style={{width: '10rem', height: '10rem'}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    }
                </div>
            </div>
		</div>
	)
}

export default Brands