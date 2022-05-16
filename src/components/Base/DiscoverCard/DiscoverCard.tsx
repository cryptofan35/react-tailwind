import "./DiscoverCard.css";
import downArrowIcon from "./../../../assets/png/downArrow.svg";
import plusIcon from "./../../../assets/png/plus.svg";
import clsx from "clsx";

interface Props {
  className?: any;
}

export default function DiscoverCard({ className }: Props) {
  return (
    <>
      <div className={clsx("c-root", className)}>
        <div className="c-row">
          <span className="c-grayLetter">Connection</span>
          <img src={downArrowIcon} className="c-icon" />
        </div>
        <div className="c-row">
          <span className="c-blueLetter">Groups</span>
          <img src={downArrowIcon} className="c-icon" />
        </div>
        <div className="c-row">
          <span className="c-blueLetter">Events</span>
          <img src={plusIcon} className="c-icon" />
        </div>
        <div className="c-row">
          <span className="c-blueLetter">Pages</span>
          <img src={plusIcon} className="c-icon" />
        </div>
        <div className="c-discoverMore">Discover more</div>
      </div>
    </>
  );
}
