// components/MainHeroSection.tsx

import AppButton from '../../global/app-button';

interface MainHeroSectionProps {
  detailData: {
    title: string;
    description: string;
    leftbuttonlabel: string;
    leftbuttonlink: string;
    rightbuttonlabel: string;
    rightbuttonlink: string;
  };
}

const MainHeroSection: React.FC<MainHeroSectionProps> = ({ detailData }) => {
  return (
    <section className="main-hero-bg py-10 md:pt-[160px] md:pb-[104px]">
      <div className="container flex flex-wrap justify-center text-center max-w-4xl">
        <h1 className="block font-aeonik font-medium text-3xl md:text-6xl md:leading-tight mb-6">
          {detailData?.title}
        </h1>
        <div className="w-full" />
        <p className="block text-sm md:text-xl text-gray-600 font-normal mb-8">
          {detailData?.description}
        </p>
        <div className="flex justify-center w-full mb-10 lg:mb-16">
          <AppButton label={detailData?.leftbuttonlabel} className="mr-1" href={detailData?.leftbuttonlink} />
          <AppButton type="ghost" label={detailData?.rightbuttonlabel} className="ml-1" href={detailData?.rightbuttonlink} />
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
