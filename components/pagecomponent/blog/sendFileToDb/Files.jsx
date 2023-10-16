import { getLanguage } from "./helper";
import { checkFileIsExistAction } from "./_action";

export function Files(props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3 place-items-center">
        {props.posts.map(async (post) => {
          const isExist = await checkFileIsExistAction(post.slug);
          let clsName;
          let dbExist = "Yes";
          isExist === undefined ? (dbExist = "No") : (dbExist = "Yes");
          isExist === undefined
            ? (clsName = "bg-orange-200")
            : (clsName = "bg-gray-200");
          return (
            <div
              key={post.slug}
              className={`text-sm text-black rounded-lg ${clsName}`}
            >
              <FileCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                subtitle={post.subtitle}
                description={post.description}
                crDate={post.date}
                lang={getLanguage(post.slug)}
                isAvlibal={dbExist}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

const FileCard = ({
  slug,
  title,
  lang,
  isAvlibal,
  description,
  crDate,
  subtitle,
}) => {
  return (
    <>
      <div className="flex flex-col items-start justify-center p-4 border rounded-lg min-w-[250px] gap-1">
        <p className="font-normal">File : {slug}</p>
        <p className="font-normal">Title : {title}</p>
        <p className="font-normal">subTitle : {subtitle}</p>
        <p className="font-normal">description : {description}</p>
        <p className="font-normal">Creation Date : {crDate}</p>

        <p className="font-normal">Lang : {lang}</p>
        <p className="flex mt-1 font-normal">
          Exsit :
          <span className="flex items-center justify-center p-1 px-2 text-xs text-white bg-green-600 rounded-lg">
            {isAvlibal}
          </span>
        </p>
      </div>
    </>
  );
};
