"use client";

import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import dayjs from "dayjs";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { mocksData } from "~/data";
import PlaceGallery from "~/components/PlaceGallery";

const FULL_DATE_FORMAT = "DD/MM/YYYY";
const SHORT_DATE_FORMAT = "MMM DD";

export default function Content() {
  return (
    // 83px is AppBar component height, 82px is CategorySlider component height
    <div className="py-4 mx-auto mt-[calc(83px+82px)] lg:max-w-screen-2xl md:py-6 md:px-3.5 px-0">
      <div
        role="list"
        className="grid min-h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12"
      >
        {/* <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List
            className="List"
            height={height}
            itemCount={1000}
            itemSize={35}
            width={width}
          >
            {({ index, style }) => <div style={style}>Row {index + 1}</div>}
          </List>
        )}
      </AutoSizer> */}

        {mocksData.map((item, index) => (
          <div
            className="flex flex-col w-full gap-2"
            data-testid={`place-${index}`}
            key={index}
          >
            <PlaceGallery data={item.gallery} id={item.id} />

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
    </div>
  );
}
