import { FcApproval } from "react-icons/fc";
export function Facility({ facility,recommend=false,lang }) {
  return (
    <div className="flex flex-col flex-wrap items-start justify-start gap-2 py-2  "

    style={{ backgroundColor: recommend ? "blue" : "none",color: recommend ? "yellow" : "black" }}
    >
      {facility?.map((el) => {
        return (

          <div
            className="flex items-center w-full gap-4 px-2 text-blue-gray-50 "
            key={el.id}
          >
            <FcApproval />
            <p>{el.title}</p>
          </div>

        );
      })}
    </div>
  );
}
