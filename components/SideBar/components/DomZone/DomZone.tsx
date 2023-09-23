"use client"
import React from 'react';
import styles from './Domzone.module.scss';

const Domzone = () => {
    // Dummy data for Domzone (change names as needed)
    const domzoneItems = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
    ];

    return (
        <div className={styles.domzone}>
            <p className={styles.domzoneLabel}>Domzone</p>
            <div className={styles.domzoneList}>
                {domzoneItems.map((item, index) => (
                    <div key={index} className={styles.domzoneItem}>
                        <input
                            type="checkbox"
                            id={`domzone-item-${index}`} // Add a unique ID
                            className={styles.checkbox}
                        />
                        <label htmlFor={`domzone-item-${index}`} className={styles.itemName}>
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Domzone;
