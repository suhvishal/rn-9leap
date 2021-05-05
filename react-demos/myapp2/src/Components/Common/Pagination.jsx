import React from 'react';
import _ from 'lodash';
import Types from 'prop-types';

function Pagination({itemsCount, pageSize, currentPage, onPageChange}) {

    const pagesCount = Math.ceil(itemsCount / pageSize);   //5
    const pages = _.range(1, pagesCount+1);      //[ 1, 2, 3, 4, 5]

    if(pagesCount === 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                { pages.map(page => (
                        <li key={page} className={ page === currentPage? 'page-item active' : 'page-item' }>
                            <a className="page-link" onClick={ ()=> onPageChange(page)} >
                                {page}
                            </a>
                        </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount : Types.number.isRequired ,
    pageSize: Types.number.isRequired, 
    currentPage: Types.number.isRequired, 
    onPageChange:  Types.func.isRequired
}

export default Pagination;