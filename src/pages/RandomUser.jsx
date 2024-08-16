import React from "react";
import ArrowIcon from "../components/icons/ArrowIcon.jsx";
import RefreshIcon from "../components/icons/RefreshIcon.jsx";
import Avatar from "../components/base/Avatar.jsx";
import { CHAI_CODE_BASE_URL, RANDOM_USER_API_URL } from "../constants/data.js";
import CircularIcon from "../components/base/CircularIcon.jsx";
import MapIcon from "../components/icons/MapIcon.jsx";
import PhoneIcon from "../components/icons/PhoneIcon.jsx";
import TextWithLabel from "../components/base/TextWithLabel.jsx";
import { formatDate, getMapURL } from "../utils/common.js";
import ChaiCodeLogo from "../../src/chai_code_logo.png";
import Footer from "../components/base/Footer.jsx";
import useFetch from "../hooks/useFetch.js";

export const CardHeader = ({
  children,
  onArrowClick,
  onRefreshClick,
  visibleRefreshIcon,
  containerStyle,
  arrowIconStyle,
}) => {
  return (
    <div className={`flex items-center ${containerStyle}`}>
      <div onClick={onArrowClick}>
        <ArrowIcon
          svgProps={{ width: "24", height: "24", cursor: "pointer" }}
          polyLineProps={{ stroke: "black", ...arrowIconStyle }}
        />
      </div>
      {children}
      {visibleRefreshIcon && (
        <div onClick={onRefreshClick}>
          <RefreshIcon
            svgProps={{ width: "24", height: "24", cursor: "pointer" }}
            pathProps={{ stroke: "black" }}
          />
        </div>
      )}
    </div>
  );
};

const RandomUser = () => {
  const { data, fetchData } = useFetch(RANDOM_USER_API_URL);

  const handleRefresh = () => {
    fetchData();
  };

  const handleMapClick = (latitude, longitude) => () =>
    window.open(getMapURL(latitude, longitude), "_blank");

  if (data) {
    const { name, login, location, dob, registered, picture, phone } = data;

    return (
      <div className="w-96 max-h-2/3 my-auto bg-violet-300 rounded-2xl border-8 border-solid border-white p-4 flex flex-col text-center gap-4">
        <CardHeader
          visibleRefreshIcon={true}
          onRefreshClick={handleRefresh}
          containerStyle="justify-between"
        >
          <h3>Profile Overview</h3>
        </CardHeader>

        <div className="flex justify-center items-center object-contain">
          <Avatar
            src={picture?.large}
            altText="User Avatar"
            containerStyle="w-24 h-24"
            imageStyle="rounded-full"
          />
        </div>
        <h1 className="text-2xl">{`${name?.first} ${name?.last}`}</h1>
        <p>{login?.username}</p>
        {/* Map and Call container */}
        <div className="flex justify-center items-center gap-4 border-y-[1px] py-2 border-gray-400">
          <div className="flex items-center gap-1">
            <CircularIcon
              onIconClick={handleMapClick(
                location?.coordinates?.latitude,
                location?.coordinates?.longitude
              )}
            >
              <MapIcon className="stroke-white" />
            </CircularIcon>
            <small>Location</small>
          </div>
          {/* Phone Call  */}
          <a
            href={`tel:${phone}`}
            target="_blank"
            className="flex items-center gap-1"
            rel="noreferrer"
          >
            <CircularIcon>
              <PhoneIcon
                pathProps={{ stroke: "white" }}
                svgProps={{ width: "24", height: "24", cursor: "pointer" }}
              />
            </CircularIcon>
            <small>Call me</small>
          </a>
        </div>

        <div className="flex">
          <TextWithLabel
            label="City"
            title={location?.city}
            containerStyle="pl-2"
          />
          <TextWithLabel
            label="Nationality"
            title={location?.country}
            containerStyle="pl-2"
          />
        </div>
        <div className="flex">
          <TextWithLabel
            label="Date Of Birth"
            title={formatDate(dob?.date)}
            containerStyle="pl-2"
          />
          <TextWithLabel
            label="Phone No."
            title={phone}
            containerStyle="pl-2"
          />
        </div>
        <div className="flex">
          <TextWithLabel
            label="Time Zone"
            title={`${location?.timezone?.offset} (${location?.state})`}
            containerStyle="pl-2"
          />
          <TextWithLabel
            label="Registered Since"
            title={formatDate(registered?.date)}
            containerStyle="pl-2"
          />
        </div>

        <div className="text-white">
          <a
            href={CHAI_CODE_BASE_URL}
            target="_blank"
            className="flex justify-end"
            rel="noreferrer"
          >
            <Avatar
              src={ChaiCodeLogo}
              altText="Chai Code Logo"
              containerStyle="w-12 h-12"
              imageStyle="rounded"
            />
          </a>
          <Footer footerStyle="text-white" />
        </div>
      </div>
    );
  }
};

export default RandomUser;
