
const ProductItem = (props)=>{
    let tstyle = "black"

    if(!props.instock){
        tstyle = "red"
    }
    return(
        <>
            <tr style={{color:tstyle}}>
                <td className='item' >{props.name}</td>
                <td className='item'>{props.price}</td>
            </tr>
        </>
    )
}

export default ProductItem;