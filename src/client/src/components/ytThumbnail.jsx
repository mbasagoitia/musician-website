const YouTubeThumbnail = ({ videoId }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Video Thumbnail"
      className="thumbnail"
    ></iframe>
  );
};

export default YouTubeThumbnail;
