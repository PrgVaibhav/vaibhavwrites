import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { ShareButton } from "../../ui/ShareButton";
import { FcReading } from "react-icons/fc";

export const BlogsCard = () => {
  return (
    <div className="w-full md:w-[350px] bg-gray-500  card p-4 rounded-md shadow-lg  transition duration-300 ease-in-out transform hover:scale-105 relative">
      <div className="card-image w-full">
        <img
          src="https://images.unsplash.com/photo-1716436329478-e4261139e1ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-auto object-cover rounded-md"
        />
      </div>
      <div className="new-tag">
        <span
          className="text-sm bg-[#ff4d4d] text-white p-1 rounded-md absolute top-0 
        right-0 mt-2 mr-2 z-10"
        >
          New
        </span>
      </div>
      <div className="card-content bg-[#1f1f1f] mt-3">
        <div className="mb-3">
          <h1 className="text-xl md:text-2xl ">
            Lorem ipsum dolor sit, amet consectetur!
          </h1>
          <span className="para text-sm flex gap-2 items-center">
            <FcReading /> 4 Min Read
          </span>
        </div>
        <p className="text-md para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum ex
          a quod ratione natus necessitatibus veritatis laborum fuga autem.
        </p>
      </div>

      <div className="control flex justify-between mt-3 items-center">
        <ShareButton url="https://x.com" title="Lorem ipsum dolor sit amet" />
        <Link
          className="btn flex gap-2 items-center hover:underline"
          to={"blog/1"}
        >
          Read More <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
};
