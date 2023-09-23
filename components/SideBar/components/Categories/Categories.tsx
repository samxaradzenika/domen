import styles from './Categories.module.scss'

const CategoriesFilter = () => {
    const categories = [
        'Home',
        'Car',
        'Electronics',
        'Clothing',
        'Books',
        'Sports',
        'Garden',
        'Toys',
        'Furniture',
        'Health',
        'Beauty',
        'Other',
    ];

    return (
        <div className={styles.categoriesFilter}>
            <p className={styles.categoriesLabel}>Categories</p>
            <div className={styles.categoryList}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.categoryItem}>
                        <input
                            type="checkbox"
                            id={`category-${index}`} // Add a unique ID
                            className={styles.checkbox}
                        />
                        <label htmlFor={`category-${index}`} className={styles.categoryName}>
                            {category}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesFilter;
