import React from 'react';
import data from './data';

const App = () => {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">VeggiesShop</a>
            </div>
            <div className="btn">
                <a href="/cart"><i className="fa fa-user-o" aria-hidden="true"></i></a>
                <a href="/signin"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.vegetables.map(vegetable => (
                  <div key={vegetable._id} className="card">
                    <a href={`/vegetable/${vegetable._id}`}>
                        <img src={vegetable.image} alt="onions" className="medium"/>
                    </a>
                    <div className="card-body">
                        <a href={`/vegetable/${vegetable._id}`}>
                            <h2>{vegetable.name}</h2>
                        </a>
                        <div className="quantity">{vegetable.unit}</div>
                        <div className="price-cart">
                            <div className="price">&#8377;{vegetable.price}</div>
                            <button className="cartbtn">Add to Cart</button>
                        </div>
                    </div>
                </div>
                ))
              }
                
            </div>
        </main>
        <footer className="row center">
            Copyright &copy; 2021 VeggiesShop
        </footer>
    </div>
  );
}

export default App;