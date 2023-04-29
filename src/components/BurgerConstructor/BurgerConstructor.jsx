import BurgerMain from "./elements/BurgerMain";

const BurgerConstructor = (props) => {
    const {items} = props;

    return (
    <div>
        <div>
           <div>
                {items.map((main) => (
                    <BurgerMain ingredients={main} key={main._id}/>
                ))}
           </div>
        </div>
        BurgerConstructor
    </div>
    )
}
export default BurgerConstructor;