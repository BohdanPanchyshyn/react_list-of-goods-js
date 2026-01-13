export const GoodCard = ({ goods }) => {

  return (
   goods.map(good => (<li data-cy="Good">{good}</li>)
  ))
}
