import React, { Component } from 'react';
class VirtualDom extends Component {
  render() {
    return (
      <div>
            <h1>Product Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone</td>
                        <td>10000000</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  }
}

export default VirtualDom;
