import AnimatedText from "@/components/animatedText";
import { userMetaData } from "@/components/constants";
import FeaturedProject from "@/components/featuredProject";

const Projects = () => {
  return (
    <section>
      <AnimatedText className="mb-8 sm:mb-16 lg:!text-7xl md:!text-6xl !text-4xl">
        Necessity is the mother of invention
      </AnimatedText>
      <div className="grid grid-cols-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 sm:gap-x-8 md:gap-x-16">
        <div className="col-span-12">
          <FeaturedProject
            title={userMetaData?.projects?.[0].title || ""}
            type={userMetaData?.projects?.[0].type || ""}
            summary={userMetaData?.projects?.[0].summary || [""]}
            img={userMetaData?.projects?.[0].img || ""}
            link={userMetaData?.projects?.[0].link || ""}
            github={userMetaData?.projects?.[0].github}
            loading="eager"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <FeaturedProject
            title={userMetaData?.projects?.[1].title || ""}
            type={userMetaData?.projects?.[1].type || ""}
            summary={userMetaData?.projects?.[1].summary || [""]}
            img={userMetaData?.projects?.[1].img || ""}
            link={userMetaData?.projects?.[1].link || ""}
            github={userMetaData?.projects?.[1].github}
            orierntation="portrait"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <FeaturedProject
            title={userMetaData?.projects?.[4].title || ""}
            type={userMetaData?.projects?.[4].type || ""}
            summary={userMetaData?.projects?.[4].summary || [""]}
            img={userMetaData?.projects?.[4].img || ""}
            link={userMetaData?.projects?.[4].link || ""}
            github={userMetaData?.projects?.[4].github}
            orierntation="portrait"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title={userMetaData?.projects?.[3].title || ""}
            type={userMetaData?.projects?.[3].type || ""}
            summary={userMetaData?.projects?.[3].summary || [""]}
            img={userMetaData?.projects?.[3].img || ""}
            link={userMetaData?.projects?.[3].link || ""}
            github={userMetaData?.projects?.[3].github}
            orierntation="landscape"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title={userMetaData?.projects?.[2].title || ""}
            type={userMetaData?.projects?.[2].type || ""}
            summary={userMetaData?.projects?.[2].summary || [""]}
            img={userMetaData?.projects?.[2].img || ""}
            link={userMetaData?.projects?.[2].link || ""}
            github={userMetaData?.projects?.[2].github}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
