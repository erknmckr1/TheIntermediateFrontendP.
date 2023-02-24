import React from "react";
import styles from "./Section.module.css";
import Card from "../ProductCards/Card";
import { useSelector } from "react-redux";
function Section() {
  const wallet = useSelector((state) => state.money.wallet);
  const editMoney = Number(wallet).toLocaleString()
  const products = useSelector((state)=>state.money.item)

  return (
    <div className="container">
      <div className={`${styles.initial_money} col-12`}>{editMoney} $</div>
      <div className={`${styles.product_div} row col col-xl-12`}>
        {products.products.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-l-4 col-xl-3">
                <Card item={item} id={item.id} />
            </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
