import userAvatar from "./../../assets/png/admin.png";
import photoIcon from "./../../assets/png/photo.png";
import videoIcon from "./../../assets/png/video.png";
import eventIcon from "./../../assets/png/event.png";
import blackMessageIcon from "./../../assets/png/blackMessage.svg";
import noteIcon from "./../../assets/png/note.svg";
import writeArticleIcon from "./../../assets/png/article.png";

import { ReactComponent as DropDownIcon } from "./../../assets/png/dropdown.svg";
import "./MainBody.css";

import {
  tabLinkData,
  MicrsoftData,
  GitHubData,
  GoogleData,
} from "./../../config/constant";
import clsx from "clsx";
import { useState } from "react";
import Card from "../Base/Card/Card";
import ProfileCard from "../Base/ProfileCard/ProfileCard";
import DiscoverCard from "../Base/DiscoverCard/DiscoverCard";

export default function MainBody() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="c-mainBodyRoot">
        <div className="c-headerAndsort">
          <div className="c-mainBodyHeaderContainer">
            <div className="c-startPostContainer">
              <img src={userAvatar} className="c-userImgContainer" />
              <input
                type="text"
                className="
              c-postInputConatainer
                form-control
                block
                w-full
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                id="exampleFormControlInput1"
                placeholder="Start a post"
              />
            </div>
            <ul
              className="c-tabsContainer nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
              id="tabs-tabFill"
              role="tablist"
            >
              <li
                className={clsx("c-normalTab nav-item flex-auto text-center", {
                  ["c-activeTab"]: activeTab === tabLinkData.photo,
                })}
                role="presentation"
                onClick={() => handleTab(tabLinkData.photo)}
              >
                <img src={photoIcon} />
                <a
                  href="#tabs-homeFill"
                  className="
                c-TabLetter
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
               
                "
                  id="tabs-home-tabFill"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-homeFill"
                  role="tab"
                  aria-controls="tabs-homeFill"
                  aria-selected="true"
                >
                  Photo
                </a>
              </li>
              <li
                className={clsx("c-normalTab nav-item flex-auto text-center", {
                  ["c-activeTab"]: activeTab === tabLinkData.video,
                })}
                role="presentation"
                onClick={() => handleTab(tabLinkData.video)}
              >
                <img src={videoIcon} />
                <a
                  href="#tabs-homeFill"
                  className="
                c-TabLetter
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
               
                "
                  id="tabs-home-tabFill"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-homeFill"
                  role="tab"
                  aria-controls="tabs-homeFill"
                  aria-selected="true"
                >
                  Video
                </a>
              </li>
              <li
                className={clsx("c-normalTab nav-item flex-auto text-center", {
                  ["c-activeTab"]: activeTab === tabLinkData.event,
                })}
                role="presentation"
                onClick={() => handleTab(tabLinkData.event)}
              >
                <img src={eventIcon} />
                <a
                  href="#tabs-homeFill"
                  className="
                c-TabLetter
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
               
                "
                  id="tabs-home-tabFill"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-homeFill"
                  role="tab"
                  aria-controls="tabs-homeFill"
                  aria-selected="true"
                >
                  Event
                </a>
              </li>
              <li
                className={clsx("c-normalTab nav-item flex-auto text-center", {
                  ["c-activeTab"]: activeTab === tabLinkData.write_article,
                })}
                role="presentation"
                onClick={() => handleTab(tabLinkData.write_article)}
              >
                <img src={writeArticleIcon} />
                <a
                  href="#tabs-homeFill"
                  className="
                c-TabLetter
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
               
                "
                  id="tabs-home-tabFill"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-homeFill"
                  role="tab"
                  aria-controls="tabs-homeFill"
                  aria-selected="true"
                >
                  Write Article
                </a>
              </li>
            </ul>
          </div>
          <div className="c-mainBodySortPartContainer">
            <div className="c-divideLine"></div>
            <div className="c-sortByContainer">
              <span className="c-sortByLetter">Sort By:</span>
              <div className="c-sortByContent">
                <span className="c-sortByConten">Top</span>
                <DropDownIcon className="c-dropDownIcon" />
              </div>
            </div>
          </div>
        </div>

        <div className="c-cardsContainer">
          <Card
            comName={MicrsoftData.comName}
            followers={MicrsoftData.followers}
            version={MicrsoftData.version}
            comDesc={MicrsoftData.comDesc}
            comLink={MicrsoftData.comLink}
            className="c-card"
          />
          <Card
            comName={GitHubData.comName}
            followers={GitHubData.followers}
            version={GitHubData.version}
            comDesc={GitHubData.comDesc}
            comLink={GitHubData.comLink}
            className="c-card"
          />
          <Card
            comName={GoogleData.comName}
            followers={GoogleData.followers}
            version={GoogleData.version}
            comDesc={GoogleData.comDesc}
            comLink={GoogleData.comLink}
            className="c-card"
          />
        </div>
      </div>
    </>
  );
}
