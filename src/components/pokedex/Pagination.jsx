import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, maxPage, setPage}) => {
    
    const pagesPerBlock = 6
    const currentBlock = Math.ceil( page / pagesPerBlock ) 
    const maxBlock = Math.ceil( maxPage / pagesPerBlock )

    const arrPages = []
    const initialPage = (currentBlock - 1 ) * pagesPerBlock + 1
    const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock
    for(let i = initialPage; i <= finalPage; i++){
        arrPages.push(i)
    }

    const handlePage = number =>{
        setPage(number)
    }
    const handlePreviousBlock = () =>{
        if(page -1 > 0 ){
            setPage(page - 1)
        }
    }
    
    const handleNextBlock = ()=>{
       
        if(page + 1 <= maxPage){
            setPage(page + 1)

        }
    }

  return (
    <div className='pagination'>
        <ul className='pagination__list'>
            <li className='pagination__item page__active' onClick={handlePreviousBlock}> &#60;</li>
            {
                arrPages.map(arrPage=>(
                    <li className={`pagination__item ${page ===arrPage && 'page__active'} `}  onClick={()=>handlePage(arrPage)} key={arrPage}>{arrPage}</li>
                ))
            }
            <li className='pagination__item page__active' onClick={handleNextBlock}>&#62;</li>
        </ul>
    </div>
  )
}

export default Pagination