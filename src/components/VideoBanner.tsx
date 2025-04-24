
import React, { useRef, useEffect } from "react";

interface VideoBannerProps {
  videoUrl: string;
  posterUrl?: string;
  overlayColor?: string;
  children: React.ReactNode;
  className?: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  videoUrl,
  posterUrl,
  overlayColor = "rgba(0, 45, 98, 0.6)",
  children,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(error => {
        console.log("Auto-play was prevented:", error);
        // We can add a play button or other fallback here if needed
      });
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VideoBanner;
