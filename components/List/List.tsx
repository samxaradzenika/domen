"use client"
import React, { useState } from "react";
import styles from "./List.module.scss";
import btnSend from "../../public/images/Btn_send.svg";
import btnSend2 from "../../public/images/Btn_send-1.svg";
import CartSvg2 from "../../public/images/cart-white.svg";
import CartSvg from "../../public/images/cart-gray.svg";
import Image from "next/image";
import { useStore } from '../Masthead/Masthead.store'


const List = () => {
  const { inc } = useStore()
  const [inBasket, setInBasket] = useState<string[]>([]);


  const domainData = [
    {
      id: "item-1",
      name: "gijashvili1.com.ge",
      priceLari: 320,
      priceDollar: "14,285.7",
      category: "business",
    },
    {
      id: "item-2",
      name: "gijashvili2.com.ge",
      priceLari: 432,
      priceDollar: "17,857.1",
      category: "auto",
    },
    {
      id: "item-3",
      name: "gijashvili3.com.ge",
      priceLari: 1200,
      priceDollar: "21,428.6",
      category: "medic",
    },
    {
      id: "item-4",
      name: "gijashvili3.com.ge",
      priceLari: 1200,
      priceDollar: "21,428.6",
      category: "electronics",
    },
    {
      id: "item-5",
      name: "gijashvili3.com.ge",
      priceLari: 1200,
      priceDollar: "21,428.6",
      category: "cars",
    },
    {
      id: "item-6",
      name: "gijashvili3.com.ge",
      priceLari: 1200,
      priceDollar: "21,428.6",
      category: "motorcycles",
    },
  ];

  return (
    <div className={styles["domenebi-mtavari-container"]}>
      {domainData.map((domain) => (
        <>
          <div key={domain.id} className={styles["gijashvili-domeins-container"]}>
            <Image className={styles["btn-send-img"]} src={btnSend} alt="sendbtn" />
            <Image className={styles["btn-send-green"]} src={btnSend2} alt="sendbtngreen" />
            <p className={styles["gijashvili-domein"]}>{domain.name}</p>
            <div className={styles["domein-prices"]}>
              <h1 className={styles["domein-price-lari"]}>
                {domain.priceLari} <i className="fa-solid fa-lari-sign"></i>
              </h1>
              <h1 className={styles["domein-price-dolar"]}>{domain.priceDollar} $</h1>
            </div>
            <div className={styles["damatebulia"]}>
              <div className={styles["domein-basket"]} data-hover="დამატება" onClick={inc}>
                <Image className={styles["domein-basket-img"]} src={CartSvg} alt="basket" />
              </div>
              {inBasket.includes(domain.id) && (
                <div className={styles["domein-is-in-basket"]}>
                  <Image className={styles["domein-is-in-basket-img"]} src={CartSvg2} alt="inthebasket" />
                  <p className={styles["kalatshia-text"]}>კალათშია</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.line}></div>
        </>
      ))}
    </div>
  );
};

export default List;
