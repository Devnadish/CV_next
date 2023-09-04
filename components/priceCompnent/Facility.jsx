import { FcApproval } from "react-icons/fc";
export function Facility({ facility }) {
  return (
    <div className="flex flex-col flex-wrap items-start justify-start gap-2 px-1 mt-3 mb-6">
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
