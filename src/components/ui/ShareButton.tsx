import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

type ShareButtonProps = {
  url: string;
  title: string;
};

export const ShareButton = ({ url, title }: ShareButtonProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className="flex gap-3 items-center">
      <p>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
      </p>
      <p>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </p>
    </div>
  );
};
