import { Logo, BurgerIcon, ProfileIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles['header_left-content']}>
                    <button>
                        <div className={styles.box_items}>
                            <BurgerIcon type="primary" />
                            <p>Конструктор</p>
                        </div>
                    </button>
                    <button>
                    <div className={styles.box_items}>
                        <ListIcon type="secondary"/>
                        <p>Лента заказов</p>
                    </div>
                    </button>
                </div>
                <button>
                    <Logo />
                </button>
                <div className={styles['header_right-content']}>
                <button>
                    <div className={styles.box_items}>
                        <ProfileIcon type="primary"/>
                        <p>Личный кабинет</p>
                    </div>
                </button>
                </div>
            </div>
        </header>
    ) 
}
export default AppHeader;