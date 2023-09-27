"use client"
import React from 'react';
import styles from './SideBar.module.scss';
import SliderComponent from '../SideBar/Slider';
import CategoriesFilter from '../Categories/Categories';
import Domzone from '../DomZone/DomZone';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.priceFilter}>
                <label className={styles.priceLabel}>Price</label>
                <div className={styles.inputContainer}>
                    <span className={styles.dollarSign}>$</span>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Min Price"
                    />
                    <span className={styles.dollarSign}>$</span>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Max Price"
                    />
                </div>
            </div>
            <SliderComponent />
            <div className={styles.priceFilter}>
                <label className={styles.priceLabel}>Search with symbols</label>
                <div className={styles.inputContainer} style={{ gap: '10px' }}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="0"
                    />
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="26"
                    />
                </div>
            </div>
            <SliderComponent />
           
        </div>
    );
};

export default Sidebar;
