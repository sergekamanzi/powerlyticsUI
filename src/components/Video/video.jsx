import  { useEffect, useRef } from "react";
import "./video.css";
export default function VideoSection({
  src = "/watt.mp4",
  poster = "",
  className = "",
  ariaLabel = "Background video",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // If autoplay is blocked, just leave it paused silently
      }
    };
    const id = setTimeout(tryPlay, 50);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onVis = () => (document.hidden ? v.pause() : v.play().catch(() => {}));
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <section className={`video-section ${className}`}>
      <video
        ref={ref}
        className="video-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster || undefined}
        aria-label={ariaLabel}
      >
        {/* If you have multiple encodes, add <source> tags */}
        <source src={src} type="video/mp4" />
        {/* <source src="/hero.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay slot: add children if you want content on top */}
      {/* <div className="video-overlay">Your content here</div> */}
    </section>
  );
}
