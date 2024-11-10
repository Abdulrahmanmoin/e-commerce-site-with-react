import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../features/products/products'
import { useDispatch, useSelector } from 'react-redux'
import { Card, ErrorComp, LoadingComp } from "../components"
import Container from '../Container/Container'

function Home() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)

    const [limit, setLimit] = useState(5)

    useEffect(() => {
        dispatch(fetchProducts(limit))
    }, [dispatch, limit])

    return (
        <div>
            {error && <ErrorComp 
            errMsg={error}
            />}

            {loading && <LoadingComp />}

            {products && (
                <Container>
                    <div className=' xl:grid xl:grid-cols-2 gap-2'>

                        {products.map(product => (
                            <Card
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating.rate}
                                description={product.description}
                                imageSrc={product.image}
                            />

                        ))}
                    </div>

                    {limit < 20 && (<div className='flex justify-center'>
                        <button
                            className="bg-gray-700 hover:bg-gray-900 mb-10 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setLimit(prevLimit => prevLimit + 5)}
                        >
                            See More Products
                        </button>
                    </div>
                    )}
                </Container>
            )
            }
        </div>
    )
}

export default Home
