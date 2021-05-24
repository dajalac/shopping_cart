import './ProductScreen.css'

const ProductScree = () => {
    return (
        <div className='product-screen'>
            <div className='product-screen-left'>
                <div className='left-image'>
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                        alt='product name' />
                </div>
                <div className='left-info'>
                    <p className='left-name'>Product name</p>
                    <p className='left-price'>Price: $1.99</p>
                    <p className='left-description'>bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                </div>
            </div>
            <div className='product-screen-right'>
                <div className='right-info'>
                    <p>
                        Price : <span> $1.99</span>
                    </p>
                    <p>
                        Status : <span> in stock</span>
                    </p>
                    <p>
                        Qty: 
                        <select>
                            <option value ='1'>1</option>
                            <option value ='2'>2</option>
                            <option value ='3'>3</option>
                            <option value ='4'>4</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'> Add</button>
                    </p>

                </div>

            </div>
        </div>
    )
};

export default ProductScree;