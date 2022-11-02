import React from "react";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books_main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--topp">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="" className="cart__book--img" alt="" />
                    <div className="cart__book--info">
                      <span className="cart__book--title">
                        Crack the Coding
                      </span>
                      <span className="cart__book--price">
                        10$
                      </span>
                      <button className="cart__book--remove">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} className="cart__input"/>
                  </div>
                  <div className="cart__total">
                    $10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
