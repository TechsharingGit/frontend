import React,{useEffect} from 'react'

const Pagination = ({showPerPage, onPaginationChange,total}) => {
    
    const [counter,setcounter] = React.useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value-showPerPage,value);
    },[counter])

    const onButtonClick = (type) => {
        if(type === 'prev')
        {
            if(counter === 1){

                setcounter(1);
            }
            else {
                setcounter(counter -1)
            }

        } else if(type === 'next')
        {   
            if(Math.ceil(total / showPerPage) === counter) {
                setcounter(counter);
            } 
            else {
                setcounter(counter + 1);
            }
        }

        
    }

    return (
        <div className="d-flex justify-content-between">

{/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="/spartners" 
    onClick={() => onButtonClick("prev")}>Previous</a></li>
    <li class="page-item"><a class="page-link" href="/spartners!#">1</a></li>
    <li class="page-item"><a class="page-link" href="/spartners!#">2</a></li>
    <li class="page-item"><a class="page-link" href="!#">3</a></li>
    <li class="page-item"><a class="page-link" href="!#"
                                               onClick={() => onButtonClick("next")}>Next</a></li>
  </ul>
</nav> */}
            <button className="btn btn-primary" 
                    // onClick={() => setcounter(counter - 1)}>Previous</button>
                    onClick={() => onButtonClick("prev")}
                    >Previous</button>
            <button className="btn btn-primary" 
                    onClick={() => onButtonClick("next")}
                    >Next</button>
        </div>
    )
}

export default Pagination
