import ProductTitleRow from "./ProductTitleRow";
import ProductItem from "./ProductItem";



const ProductTable = (props) => {
    var items = [
        { category: 'Fruits', name: "Apple", price: "$1", instock: true },
        { category: 'Fruits', name: "Dragon Fruit", price: "$1", instock: false },
        { category: 'Fruits', name: "PasssionFruit", price: "$2", instock: true },
        { category: 'Vegetables', name: "Spinach", price: "$2", instock: true },
        { category: 'Vegetables', name: "Pumpkin", price: "$4", instock: false },
        { category: 'Vegetables', name: "Peas", price: "$1", instock: true }
    ]
    const search = props.search;
    const ischeck = props.ischeck;
    let rows = [];
    let lastcategory = null;
    const row = () => {
        items.forEach((item,i) => {
            if (!item.instock && ischeck) return
            if (item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) === -1) return
            if (lastcategory !== item.category) {
                lastcategory = item.category
                rows.push(<ProductTitleRow title={item.category} key ={`${i}-${item.category}`} />)
            }
            return rows.push(<ProductItem name={item.name} price={item.price} instock={item.instock} key = {`${i}-${item.name}`} />)
        })
        return rows;
    };
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                {row()}
                </tbody>
            </table>
        </>

    )




    // {objects.map((object, i) => <ObjectRow obj={object} key={i} />)}
    // var items = {
    //     fruits: [
    //         { name: "Apple", price: "$1", instock: true },
    //         { name: "Dragon Fruit", price: "$1", instock: false },
    //         { name: "PasssionFruit", price: "$2", instock: true }
    //     ]
    //     , vegetables: [
    //         { name: "Spinach", price: "$2", instock: true },
    //         { name: "Pumpkin", price: "$4", instock: false },
    //         { name: "Peas", price: "$1", instock: true }]
    // };
    // return (
    //     <>
    //         <table >
    //             <thead>
    //                 <tr>
    //                     <th>
    //                         Name
    //                     </th>
    //                     <th>
    //                         Price
    //                     </th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <ProductTitleRow title="Fruits" />
    //                 {items.fruits
    //                     .filter(item => item.name.toLowerCase().includes(props.search))
    //                     .filter(item => props.ischeck ? item.instock : true)
    //                     .map((item,i) => <ProductItem name={item.name} price={item.price} instock={item.instock} key = {i}/>)
    //                 }
    //                 <ProductTitleRow title="Vegetable" />
    //                 {items.vegetables
    //                     .filter(item => item.name.toLowerCase().includes(props.search))
    //                     .filter(item => props.ischeck ? item.instock : true)
    //                     .map((item,i) => <ProductItem name={item.name} price={item.price} instock={item.instock} key = {i} />)
    //                 }
    //             </tbody>

    //         </table>
    //     </>

    // )

}

export default ProductTable; 