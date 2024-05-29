import { Section } from "../../components/ui/Section";

const para = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, ratione repudiandae. Libero atque nam esse excepturi? Totam  dolorem consectetur assumenda dolorum eaque iure deserunt sunt, incidunt  similique, recusandae error facere libero.",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur aspernatur qui dolores harum quasi deserunt! Numquam ex magni necessitatibus dicta error, aspernatur optio provident, perspiciatis, exercitationem earum natus. Praesentium autem nam minima voluptatem itaque labore repellendus accusamus quod sint.",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem maiores inventore et explicabo, nostrum reprehenderit, quis ducimus omnis labore quia voluptate delectus odit pariatur. Harum aliquid repellendus totam, rem magnam sit a nulla id voluptas consequatur eos nesciunt. Enim illo totam ea corrupti id?",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem maiores inventore et explicabo, nostrum reprehenderit, quis ducimus omnis labore quia voluptate delectus odit pariatur. Harum aliquid repellendus totam, rem magnam sit a nulla id voluptas consequatur eos nesciunt. Enim illo totam ea corrupti id?",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem maiores inventore et explicabo, nostrum reprehenderit, quis ducimus omnis labore quia voluptate delectus odit pariatur. Harum aliquid repellendus totam, rem magnam sit a nulla id voluptas consequatur eos nesciunt. Enim illo totam ea corrupti id?",
];

export const BlogPage = () => {
  return (
    <Section label="BlogPage Section.">
      <div className="flex flex-col gap-4">
        <div className="blog-image">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="blog-image"
            className="w-screen h-60 object-cover rounded-lg shadow-md "
          />
        </div>
        <div className="blog-heading">
          <h1 className="text-2xl md:text-4xl mb-2 heading">
            This is a blog heading, and it is a blog page.
          </h1>
          <p className="sub-heading para text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            est doloremque optio exercitationem mollitia incidunt corporis sequi
            totam maxime!
          </p>
          <span className="text-sm sub-para">
            By Vaibhav Kumar on 12th August 2021
          </span>
        </div>
        <div className="blog-content flex flex-col gap-3">
          {para.map((p, index) => (
            <p className="para" key={index}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};
