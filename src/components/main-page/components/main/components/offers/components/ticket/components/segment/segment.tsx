import { Segment } from "../../../../../../../../../../types/ticket";
import "./style.css";

type SegmentPrpos = {
  segment: Segment;
}

function SegmentComponent({segment}: SegmentPrpos) {
  return (
    <div className="segment">
      <div className="column">
        <div className="column__title">{segment.origin} – {segment.destination}</div>
        <div className="column__content">10:45 – 08:00</div>
      </div>

      <div className="column">
        <div className="column__title">В пути</div>
        <div className="column__content">{segment.duration}</div>
      </div>

      <div className="column">
        <div className="column__title">2 пересадки</div>
        <div className="column__content">{segment.stops.join(', ')}</div>
      </div>
    </div>
  );
}

export default SegmentComponent;
