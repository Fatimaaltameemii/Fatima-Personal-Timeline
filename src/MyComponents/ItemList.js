import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import EndComp from "./EndComp";

const ItemList = (props) => {
  let filling = props.filling;
  return (
    <ul class="timeline">
      {filling.map((carrentValue, index) => {
        if (index % 2 === 0) {
          return <LeftSide item={carrentValue} />;
        } else return <RightSide item={carrentValue} />;
      })}
      <EndComp />
    </ul>
  );
};
export default ItemList;
