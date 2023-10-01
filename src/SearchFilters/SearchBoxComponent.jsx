
const SearchBoxComponent = (props)=>{

    return (
        <>
        <div>
            <input 
                type = "text" 
                placeholder="Search"
                onChange={(e) => props.pcall(e.target.value.toLowerCase())}
                /><br/>
            <input 
                type = "checkbox"
                onChange={(e) => props.incheck(e.target.checked)}/>Only show products in stock
        </div>
        </>
    )
}

export  default SearchBoxComponent;
