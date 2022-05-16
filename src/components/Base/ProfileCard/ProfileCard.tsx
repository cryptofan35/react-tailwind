import "./ProfileCard.css";
import ProfileBanner from "./../../../assets/png/ProfileBanner.png";
import userAvatar from "./../../../assets/png/admin.png";
import premiumIcon from "./../../../assets/png/premium.svg";
import clsx from "clsx";

interface Props {
  className?: any;
  connectionCnt?: number;
  followerCnt?: number;
}

export default function ProfileCard({
  className,
  connectionCnt,
  followerCnt,
}: Props) {
  return (
    <>
      <div className={clsx("c-root1", className)}>
        <img src={ProfileBanner} />
        <img src={userAvatar} className="c-userAvatar" />
        <div className="c-userInfo">
          <span className="c-userNameLetter">Adam Johns</span>
          <span className="c-roleLetter">Front end developer</span>
        </div>
        <div className="c-fan">
          <div className="c-connectionsContainer">
            <span className="c-collectionLetter">Connections</span>
            <span className="c-numberLetter">{connectionCnt}</span>
          </div>
          <div className="c-growLetter">Grow your network</div>
          <div className="c-connectionsContainer">
            <span className="c-collectionLetter">Followers</span>
            <span className="c-numberLetter">{followerCnt}</span>
          </div>
        </div>
        <div className="c-fan">
          <span className="c-collectionLetter">Access exclusive tools &</span>
          <span className="c-collectionLetter">insights</span>
          <div className="c-premiumContainer">
            <img src={premiumIcon} />
            <span className="c-premiumLetter">Try premium for free</span>
          </div>
        </div>
        <div className="c-fan" style={{ borderBottom: "none" }}>
          <span className="c-growLetter" style={{ marginBottom: "2px" }}>
            My items
          </span>
        </div>
      </div>
    </>
  );
}
