import ProductTable from "./ProductTable";
import SearchBoxComponent from "./SearchBoxComponent"
import { useState } from "react";

const FilterableProductTable = () => {
    let [search, setSearch] = useState("");
    let [inStock, setInStock] = useState(false);

    // console.log(inStock);
    const hancelCallback = (data)=>{
        setSearch(search = data);
    }
    const handleInStock = (data)=>{
        setInStock(inStock = data);
    }
    return (
        <>
            <SearchBoxComponent pcall = {hancelCallback} incheck = {handleInStock}/>
            <br />
            <ProductTable search = {search} ischeck = {inStock}/>
        </>
    )
}

export default FilterableProductTable;