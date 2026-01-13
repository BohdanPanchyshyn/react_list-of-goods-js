export const GoodCard = ({ goods }) => {
  return goods.map(good => <li key={good} data-cy="Good">{good}</li>);
};
