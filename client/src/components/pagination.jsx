import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate, current }) => {
    const pageNumbers =[];

    for (let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
      <nav>
          {pageNumbers.map(number => (
              <div key={number}>
                  <a onClick={() => paginate(number)} href="#!">
                      {number} {number === current && `<-`}
                  </a>
              </div>

          ))}

      </nav>
   
  )
}

export default Pagination;