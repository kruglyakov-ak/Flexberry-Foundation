import dayjs from "dayjs";
import { Segment } from "../../../../../../../../../../types/ticket";
import {
  convertTransfer,
  humanizeDuration,
} from "../../../../../../../../../../utils";
import "./style.css";

type SegmentPrpos = {
  segment: Segment;
};

function SegmentComponent({ segment }: SegmentPrpos) {
  const takeoffTime = dayjs(segment.date).format("hh:mm");
  const landingTime = dayjs(segment.date)
    .add(segment.duration, "m")
    .format("hh:mm");

  return (
    <div className="segment">
      <div className="column">
        <div className="column__title">
          {segment.origin} – {segment.destination}
        </div>
        <div className="column__content">
          {takeoffTime} – {landingTime}
        </div>
      </div>

      <div className="column">
        <div className="column__title">В пути</div>
        <div className="column__content">
          {humanizeDuration(segment.duration)}
        </div>
      </div>

      <div className="column">
        <div className="column__title">
          {convertTransfer(segment.stops.length)}
        </div>
        <div className="column__content">{segment.stops.join(", ")}</div>
      </div>
    </div>
  );
}

export default SegmentComponent;
