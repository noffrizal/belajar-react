import React from 'react'

class Produk extends React.Component {
    render(){
        return <div className='box-stock'>
            <h2>Nama Produk</h2>
            <img src="" alt="" />
            <p>Harga</p>
            <p>Stok</p>
            <button className='btn-click'>Beli</button>
            <p>Status</p>
        </div>
    }
}

export default Produk