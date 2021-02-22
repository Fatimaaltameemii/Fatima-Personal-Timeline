const RightSide = (props) => {
  let obj = props.item;
  return (
    <li class="timeline-inverted">
      <div class="timeline-image">
        <img class="rounded-circle img-fluid" src={obj.image} alt="" />
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>{obj.timeZone}</h4>
          <h4 class="subheading">{obj.subHeading}</h4>
        </div>
        <div class="timeline-body">
          <p class="text-muted">{obj.text}</p>
        </div>
      </div>
    </li>
  );
};
export default RightSide;
