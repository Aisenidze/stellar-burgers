import BurgerIngredient from "./elements/BurgerIngredient/BurgerIngredient";
import styles from './BurgerIngredients.module.css';

const BurgerIngredients = (props) => {
    const {items} = props;
    const buns = items.filter((item) => item.type === "bun");
    const sauces = items.filter((item) => item.type === "sauce");
    const mains = items.filter((item) => item.type === "main");
    console.log('buns', buns);
    console.log('sauces', sauces);
    return (
    <div className={styles.main}>
            <h1>Соберите бургер</h1>
            <nav className={styles.menu_ingredients}>
                <button className={styles.button_ingredient}>Булки</button>
                <button className={styles.button_ingredient}>Соусы</button>
                <button className={styles.button_ingredient}>Начинки</button>
            </nav>
            <div className={styles.scrollbar}>
                <h2>Булки</h2>
                <div className={styles.buns}>
                    {buns.map((bun) => (
                        <BurgerIngredient ingredient={bun} key={bun._id} />
                    ))}
                </div>
                <h2>Соусы</h2>
                <div className={styles.buns}>
                    {sauces.map((sauce) => (
                        <BurgerIngredient ingredient={sauce} key={sauce._id} />
                    ))}
                </div>
                <h2>Начинки</h2>
                <div className={styles.buns}>
                    {mains.map((main) => (
                        <BurgerIngredient ingredient={main} key={main._id} />
                    ))}
                </div>
            </div>
    </div>
    )
}
export default BurgerIngredients;