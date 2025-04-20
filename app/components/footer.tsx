import Image from "next/image";
import Link from "next/link";

export function Footer({ date }: { date?: string | Date }) {
  // Format date similar to Jekyll's date filter
  const formattedTime = date
    ? new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "";

  return (
    <div className={"mt-4 flex flex-row flex-wrap items-start border-t border-dotted pt-4"}>
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
      <div className={"text-[14px]"}>
        To get notified when I publish a new essay,{" "}
        <Link
          href={"https://jonluca.substack.com/"}
          target={"_blank"}
          className={"text-[#244ebc] hover:text-blue-800"}
          title={"JonLuca's Substack"}
        >
          please subscribe here
        </Link>
        .
      </div>
    </div>
  );
}
