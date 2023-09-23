import React from 'react';
import styles from '../SideBar/SideBar.module.scss';
import SearchBar from '../Search/SearchBar';

const Price: React.FC = () => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.input}
                placeholder="სახელით ძებნა"
            />
            <input
                type="text"
                className={styles.input}
                placeholder="სახელით ძებნა"
            />

        </div>
    );
};

export default Price;