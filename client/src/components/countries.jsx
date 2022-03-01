import './countries.css'
import React, { useEffect, useState } from 'react';
import CountryCard from './country';
import { useDispatch, useSelector } from 'react-redux'
import { getActivities, obtener } from '../redux/actions';
import Filter from './filter';
import Sort from './sort';
import Search from './search';
import Pagination from './pagination';
import ActivityFilter from './afilter';


export default function Cards() {
    const dispatch = useDispatch()
    const renderCountries = useSelector((state) => state.filtered);
    
    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const indexOfLastPost = currentPage > 1 ? currentPage * postsPerPage -1 : currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = renderCountries.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber) => {
        pageNumber === 1 ? setPostsPerPage(9) : setPostsPerPage(10)
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        dispatch(obtener())
        dispatch(getActivities())
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h2 className='countriesTitle'>Paises del mundo</h2>
            <div className='countriesTop'>
                <div className='countriesTopLeft countriesTopItems' value='1' onClick={() => paginate(1)}> 
                    <Search />
                </div>
                <div className='countriesTopRight'>
                    <div className='countriesTopItems'>
                        <Filter />
                    </div>
                    <div className='countriesTopItems'>
                        <ActivityFilter />
                    </div>
                    <div className='countriesTopItems'>
                        <Sort />
                    </div>
                </div>
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={renderCountries.length} paginate={paginate} current={currentPage}/>
            <div className='countriesBottom'>
                {currentPosts.length > 0 ? (
                    currentPosts.map((c, i) => (
                    <CountryCard 
                        key={i} 
                        id={c.id}
                        name={c.name} 
                        flag={c.flag} 
                        continent={c.continent}
                    />
                    ))
                ):(
                    <h2>No se encontraron paises</h2>
                )}
            </div>

        </div>
    )
}