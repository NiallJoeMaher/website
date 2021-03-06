import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="mt-10">
      <h1 className="mb-6 text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <CoverImage title={title} src={coverImage} height={400} width={800} />
    </div>
  );
}
