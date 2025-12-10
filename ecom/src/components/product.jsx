import {products} from "../utils/api"

export default function Products(){
    return(
        <div>
            <h2>All Products</h2>
            {products.map(p => (
                <div key={p._id}>
                <img src={p.image} alt={p.name} width ="150"/>
                <h3>{p.name}</h3>
                <p>${p.price}</p>
                <Link to ={`product/${p._id}`}></Link>
                </div>
            ))}
        </div>
    )
}