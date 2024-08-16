import { CardHeader } from "./RandomUser";
import Avatar from "../components/base/Avatar";
import Footer from "../components/base/Footer";
import TextWithLabel from "../components/base/TextWithLabel";
import HeartIcon from "../components/icons/HeartIcon";
import CommentIcon from "../components/icons/CommentIcon";
import ReTweetIcon from "../components/icons/ReTweetIcon";
import UploadIcon from "../components/icons/UploadIcon";
import SaveIcon from "../components/icons/SaveIcon";
import useFetch from "../hooks/useFetch";
import { ELON_MUSK_AVATAR, RANDOM_JOKE_API_URL } from "../constants/data";

const RandomTweet = () => {
  const { data } = useFetch(RANDOM_JOKE_API_URL);

  if (data) {
    const { content } = data;
    return (
      <div className="w-96 max-h-1/3 my-auto bg-black text-white rounded-2xl  p-4 flex flex-col text-center gap-4">
        <CardHeader
          arrowIconStyle={{ stroke: "white" }}
          containerStyle="justify-start gap-2"
        >
          <h1>Post</h1>
        </CardHeader>

        <div className="flex justify-between items-center">
          <div className="flex items-center ml-2">
            <Avatar
              src={ELON_MUSK_AVATAR}
              altText="twitter user avatar"
              imageStyle="rounded-full"
              containerStyle="w-12 h-12"
            />

            <TextWithLabel
              title="@elonmusk"
              label="Elon Musk"
              containerStyle="ml-2 w-auto"
              labelStyle="text-lg text-white"
              titleStyle="text-sm text-gray-500"
            />
          </div>
          <div>...</div>
        </div>
        <p className="text-left">{content}</p>

        <p className="text-left text-sm text-gray-500">
          {`11:18 PM . June 30,2024.`} <span className="text-white">20M </span>
          Views
        </p>

        {/* Like Share items */}
        <div className="flex justify-around items-center gap-4 border-y-[1px] py-2 border-gray-400">
          <div className="flex gap-1 text-gray-500">
            <CommentIcon
              svgProps={{ width: "24", height: "24", stroke: "gray" }}
            />
            <small>4.9k</small>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <HeartIcon
              svgProps={{ width: "24", height: "24", stroke: "gray" }}
            />
            <small>5.3k</small>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <ReTweetIcon
              svgProps={{ width: "24", height: "24", stroke: "gray" }}
            />
            <small>59k</small>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <SaveIcon
              svgProps={{ width: "24", height: "24", stroke: "gray" }}
            />
            <small>1.1k</small>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <UploadIcon
              svgProps={{
                width: "24",
                height: "24",
                stroke: "gray",
              }}
            />
          </div>
        </div>
        <Footer footerStyle="text-gray-500" />
      </div>
    );
  } else return null;
};

export default RandomTweet;
