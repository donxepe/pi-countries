import React from 'react'
import './pagination.css'

export const Pagination = ({ postsPerPage, totalPosts, paginate, current }) => {
    const pageNumbers =[];
    const numberPages = Math.ceil(totalPosts / postsPerPage)

    for (let i=1; i <= (numberPages < 25 ? numberPages: 25); i++) {
        pageNumbers.push(i)
    }
  return (
      <nav className='pagNav'>
          {pageNumbers.map(number => (
              <div key={number}>
                  <a className='pagButton' onClick={() => paginate(number)} href="#!">
                      {number} {number === current && `<-`}
                  </a>
              </div>

          ))}
      </nav>
   
  )
}

export default Pagination;