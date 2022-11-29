import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component
{

    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy = (id) => {
        this.props.onDestroy(id)
    }

    render() {
        let filterText = this.props.filterText;
        let products = this.props.products;
        var rows = [];

        Object.keys(products)
            .filter(
                key => products[key].name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            )
            .map (
                key=> {
                    const product = products[key];
                    rows.push(
                        <ProductRow
                        key = {product.id}
                        product = {product}
                        onDestroy={this.handleDestroy}
                        ></ProductRow>
                    )
                }
            );
        return(
            <div>
                <table className ="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> {rows} </tbody>
                </table>
            </div>
        )
    }
}
export default ProductTable;