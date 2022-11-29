import React, { Component } from 'react'



class ProductRow extends Component
{
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy = () => {
        this.props.onDestroy(this.props.product.id);
    }
    render() {
        let name = this.props.product.name;
        let price = this.props.product.price;
        let category = this.props.product.category;
        return(
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td> <button type="button"  className="btn btn-info" onClick ={this.destroy}> Delete</button></td>
            </tr>
        )
    }
}
export default ProductRow
