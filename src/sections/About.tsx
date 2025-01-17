import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";

const toolboxItems =[
  {
    title: "JavaScript",
    icon: '',

  },
  {
    title: "JavaScript",
    icon: '',

  },
  {
    title: "JavaScript",
    icon: '',

  },
  {
    title: "JavaScript",
    icon: '',

  },
]


export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimse into My World"
        description="Learn more about Who i am, What i do, and What inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perpectives.</p>
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools i use to create my digital experiences.</p>
          </div>
          <div>

          </div>
        </Card>
      </div>
    </div>
  );
};
