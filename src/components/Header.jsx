import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchCategories } from '../features/categories/categories'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const categoriesArr = useSelector(state => state.category.categories);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])


  return (
    <>
      <nav className="bg-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between px-4">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center text-white">
                <h1 className='text-lg font-medium'>E-commerce app</h1>
              </div>


              <div className="hidden sm:ml-6 sm:block">
                <ul className="flex space-x-4 items-center">

                  <li>
                    <NavLink
                      to="/"
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className='relative'>
                    <button
                      onClick={() => toggleDropdown()}
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Categories
                    </button>

                    {isDropDownOpen &&
                      <ul className='absolute top-full -left-16 -right-24 bg-gray-700 mt-2 w-48 border border-black shadow-lg rounded-md'>
                        {categoriesArr.map(category => (
                          <li key={category} className='hover:bg-gray-900'>
                            <NavLink
                              to={`/category/${category}`}
                              className="block px-4 py-2 text-gray-100"
                              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                            >
                              {category}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    }

                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <ul className="space-y-1 px-2 pb-3 pt-2">

            <li>
              <NavLink
                to="/"
                className='w-full block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Home
              </NavLink>
            </li>

            <li className='relative'>
              <button
                onClick={() => toggleDropdown()}
                className='w-full text-left rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Categories
              </button>

              {isDropDownOpen &&
                <ul className='absolute top-full bg-gray-700 text-gray-100 mt-2 w-full border border-black shadow-lg rounded-md'>
                  {categoriesArr.map(category => (
                    <li key={category} className='hover:bg-gray-100'>
                      <NavLink
                        to={`/category/${category}`}
                        className="block px-4 py-2 text-gray-300"
                        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                      >
                        {category}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              }

            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header