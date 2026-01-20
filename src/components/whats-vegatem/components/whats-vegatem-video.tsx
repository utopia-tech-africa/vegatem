export function WhatsVegatemVideo() {
  return (
    <div className="flex items-center justify-center h-119.5 rounded-xl overflow-hidden bg-amber-300">
      <video
        src="/videos/vegatem-video.mp4"
        className="size-full object-cover"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </div>
  );
}
