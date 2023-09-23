import React from 'react';
import styles from '../Search/SearchBar.module.scss';

const SearchBar: React.FC = () => {
    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder="სახელით ძებნა"
            />
        </>

    );
};

export default SearchBar;