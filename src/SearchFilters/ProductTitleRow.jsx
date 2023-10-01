
const ProductTitleRow = (props)=>{
    return(
        <>
            <tr className='title'>
               <td colSpan={2}>{props.title}</td> 
            </tr>
        </>
    )
}

export default ProductTitleRow;