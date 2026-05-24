import Image from "next/image";
import { POST_TIME_ZONE } from "app/posts/utils";

export function Footer({ date }: { date?: string | Date }) {
  // Format date similar to Jekyll's date filter
  const formattedTime = date
    ? new Date(date).toLocaleTimeString("en-US", {
        timeZone: POST_TIME_ZONE,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "";

  return (
    <footer className={"mt-4 flex flex-row flex-wrap items-start border-t border-dotted pt-4"}>
      <div className={"mr-4 mb-4"}>
        <div className={"max-w-[145px] overflow-hidden rounded"}>
          <Image
            src={"https://assets.jonlu.ca/mini-profile.png"}
            alt={"JonLuca"}
            width={145}
            height={145}
            className={"mx-auto block max-w-full"}
          />
        </div>
        <p className={"m-0 my-2"}>
          JonLuca <span className={"text-gray-400"}>at {formattedTime}</span>
        </p>
      </div>
    </footer>
  );
}
