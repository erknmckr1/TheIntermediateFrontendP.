import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faLinkedin);
function Footer() {
  const basket = useSelector((state) => state.money.basket);
  console.log(basket)
  // aldıgımız urunlerı basket state'ine kaydetmıstık. Şimdi aldıgımız urunlerın toplam fıyatını bulalım.
  let total_price = 0;
  basket.map((product) => {
    return (total_price += product.price * product.count);
  });

  return (
    <div className="container receipt_div">
      <div className="row">
        <div className="col-xl-6  ">
          <h4 className="title">Your Receipt</h4>
          {basket.length > 0 ? <div className="product">
            {basket &&
              basket.map((product) => (
                <div className="basket_info row">
                  <p className="col-4">{product.name}</p>
                  <p className="col-4">x{product.count}</p>
                  <p className="col-4 price">
                    ${Number(product.price * product.count).toLocaleString()}
                  </p>
                </div>
              ))}
            <div className="total-price">
              <p>Total Price</p>
              <p className="price">${Number(total_price).toLocaleString()}</p>
            </div>
          </div> : ""}
        </div>
        <div className="col-xl-6 links">
          <p className="dev_name">
            Developed by{" "}
            <a
              rel="noreferrer" target="_blank"
              href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/"
            >
              Erkan Mustafa Çakır
            </a>
          </p>
          <div className="social">
            <p>
              <a rel="noreferrer" href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p>
              <a rel="noreferrer" target="_blank" href="https://github.com/erknmckr1">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            <p>
              <a  rel="noreferrer" target="_blank" href= "https://twitter.com/erknmckr">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
