import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Price from "./components/Price/Price";
import List from "../List/List";

const SideBarHero = () => {
  return (
    <>
      <SideBar />
      <List />
    </>
  );
};

export default SideBarHero;

{
  /* <p className={styles.price}>price</p>
<div className={styles.flexbox}>
    <div>
        <input
            type="text"
            className={styles.priceInput}
            placeholder="სახელით ძებნა"
        />
    </div>
    <div>
        <input
            type="text"
            className={styles.priceInput2}
            placeholder="სახელით ძებნა"
        />
    </div>
</div> */
}
