"use client";

export default function Page() {
  return (
    <div className="flex flex-row">
      <div className="w-96 h-[600px] bg-red-700 flex flex-row items-center justify-center overflow-hidden">
        <video
          src="waving.webm"
          autoPlay // Optional: To start playing automatically
          loop // Optional: To loop the video
          muted // Optional: To mute the video
          className="h-full max-w-none ml-[600px]"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-48 h-96 bg-red-700 flex flex-row items-center justify-center overflow-hidden">
        <video
          src="walking.webm"
          autoPlay // Optional: To start playing automatically
          loop // Optional: To loop the video
          muted // Optional: To mute the video
          className="h-full max-w-none "
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
