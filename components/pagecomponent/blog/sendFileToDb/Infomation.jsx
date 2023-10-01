import { countLanguage } from "./helper";

function Infomation(props) {
  return (
    <div className="flex items-center w-full h-8 mx-auto justify-evenly">
      <p className="flex-grow px-4 text-white bg-blue-600 text-md">
        Blogs : {props.posts.length}
      </p>
      <p className="flex-grow px-4 text-white bg-blue-600 text-md">
        English Blogs : {countLanguage(props.posts, "en")}
      </p>
      <p className="flex-grow px-4 text-white bg-blue-600 text-md">
        Arabic Blogs : {countLanguage(props.posts, "ar")}
      </p>
    </div>
  );
}
export default Infomation;
