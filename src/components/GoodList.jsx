import { GoodCard } from "./GoodCard"

export const GoodList = ({ goods }) => {

  return (
    <ul>
      <GoodCard goods={goods}/>
    </ul>
  )
}
