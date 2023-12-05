import {useEffect, useState} from 'react'
import {FaListUl} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'
import './App.css'

import EachProduct from './components/EachProduct'

function App() {
  const [allProducts, setProducts] = useState([])
  const [noColumns, setColumns] = useState('one')
  const [searchInput, setInput] = useState()

  const fetchAllProducts = async () => {
    const response = await fetch(
      'https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093',
    )
    const productsData = await response.json()
    const VALUE = productsData.data.map(each => ({
      productBadge: each.product_badge,
      productImage: each.product_image,
      productTitle: each.product_title,
      productVariants: each.product_variants,
    }))

    setProducts(VALUE)
    console.log(productsData)
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  console.log(allProducts)

  const retunEachProduct = () => {
    console.log(1)
    return (
      <div
        className={`all-products-card ${
          noColumns === 'one'
            ? 'all-products-card-one'
            : 'all-products-card-two'
        }`}
      >
        {allProducts.map((eachItem, i) => (
          <EachProduct
            searchInput={searchInput}
            eachItem={eachItem}
            noColumns={noColumns}
            key={i.toString()}
          />
        ))}
      </div>
    )
  }
  console.log(noColumns)
  return (
    <div className="App">
      <section className="home-page">
        <div className="header">
          <h4 className="app-name">PLP</h4>
          <div className="search-card">
            <input
              onChange={e => setInput(e.target.value)}
              value={searchInput}
              placeholder="Type something to search"
              type="search"
              className="search-input"
            />
            <FaListUl onClick={() => setColumns('one')} className="menu-icon" />
            <CgMenuGridR
              onClick={() => setColumns('two')}
              className="menu-icon"
            />
          </div>
        </div>
        {allProducts.length > 0 && retunEachProduct()}
      </section>
    </div>
  )
}

export default App
