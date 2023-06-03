import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import dayjs from "dayjs";

import { mocksData } from "~/data";
import Gallery from "./Gallery";

const FULL_DATE_FORMAT = "DD/MM/YYYY";
const SHORT_DATE_FORMAT = "MMM DD";

export default function ListPlaces() {
  return (
    <div role="list" className="grid grid-cols-5 gap-x-6 gap-y-12">
      {mocksData.map((item, index) => (
        <div
          className="flex flex-col w-full gap-2"
          data-testid={`place-${index}`}
          key={index}
        >
          <Gallery data={item.gallery} id={item.id} />

          {/* Information */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col flex-1 w-full min-w-0 gap-0 text-sm">
              <p className="font-medium line-clamp-1">
                {item.location.address}
              </p>
              <p className="font-light text-gray-500">
                {item.distanceDescribe}
              </p>
              <p className="font-light text-gray-500">{`${dayjs(
                item.rentable.from,
                FULL_DATE_FORMAT
              ).format(SHORT_DATE_FORMAT)} - ${dayjs(
                item.rentable.to,
                FULL_DATE_FORMAT
              ).format(SHORT_DATE_FORMAT)}`}</p>

              {/* Price */}
              <div className="mt-2 text-base">
                <span className="font-medium">${item.price.adult} </span>
                <span className="font-light">night</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <AiFillStar className="w-3 h-3" />
              <p className="text-sm">{item.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
