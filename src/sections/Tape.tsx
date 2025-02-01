import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Perfomant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Responsive",
  "Search Optimised",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:60s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex pr-4 gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 animate-spin [animation-duration:120s]"  />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
