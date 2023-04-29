
const BurgerMain = (props) => {
  const {ingredients} = props;

  return (
    <div>
      <div>
        <img src={ingredients.image}/>
        <p></p>
      </div>   
    </div>
  )
}

export default BurgerMain;