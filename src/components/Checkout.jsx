import React, { useContext } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { StateContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartPackage = useContext(StateContext);

  let cartItemsAre = cartPackage.cartItems.map((items) => {
    return (
        <div className="cart">
          <ul className="cartWrap">
            <li className="items odd">
              <div className="infoWrap">
                <div className="cartSection">
                  <img src={items.img} alt="" className="itemImg" />
                  <p className="itemNumber">#QUE-007544-002</p>
                  <h3>{items.title}</h3>

                  <p>
                    {" "}
                    <input type="text" className="qty" placeholder="1" /> x
                    $5.00
                  </p>

                  <p className="stockStatus"> In Stock</p>
                </div>

                <div className="prodTotal cartSection">
                  <p>$5.00</p>
                </div>
                <div className="cartSection removeWrap">
                  <a href="#remove" className="remove">
                    x
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
    );
  });

  return (
    <>
      <Header />
      <Hero />
          <div class="wrap cf">
      <div className="heading cf">
        <h1>My Cart</h1>
        <Link to="/" className="continue">
          Continue Shopping
        </Link>
      </div>

      <div className="checkout">{cartItemsAre}</div>

      <div className="promoCode">
        <label for="promo">Have A Promo Code?</label>
        <input type="text" name="promo" placholder="Enter Code" />
        <Link to="/checkout" className="btn"></Link>
      </div>

      <div className="subtotal cf">
        <ul>
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">$5.00</span>
          </li>

          <li className="totalRow">
            <span className="label">Shipping</span>
            <span className="value">$1.00</span>
          </li>

          <li className="totalRow">
            <span className="label">Tax</span>
            <span className="value">$0.02</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">$06.02</span>
          </li>
          <li className="totalRow">
            <Link to="/" className="btn continue">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
      </div>
      </>
  );
};

export default Checkout;
