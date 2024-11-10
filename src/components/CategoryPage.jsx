import React, { useEffect } from 'react'
import { Card, ErrorComp, LoadingComp } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByCategory } from '../features/categories/categories';
import Container from '../Container/Container';

function CategoryPage({category}) {

  const itemsArr = useSelector(state => state.category.ItemsByCategory)
  const loading = useSelector(state => state.category.loading)
  const error = useSelector(state => state.category.errorEachCategory)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsByCategory(category))
  }, [dispatch])


  return (
    <>

      {error && <ErrorComp 
      errMsg={error}
      />}

      {loading && <LoadingComp />}

      {itemsArr && (
        <Container>
          <div className=' xl:grid xl:grid-cols-2 gap-2'>

            {itemsArr.map(item => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating.rate}
                description={item.description}
                imageSrc={item.image}
              />

            ))}
          </div>
        </Container>

      )}

    </>
  )
}

export default CategoryPage;