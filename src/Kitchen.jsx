import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <div>
      <h2>Kitchen</h2>
      <Oven key='Oven' />
      <Sink key='Sink' />
    </div>
  )
}

export default Kitchen;