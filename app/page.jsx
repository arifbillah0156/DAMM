import HomeBanners from "@/components/Home/HomeBanners";
// import HomeSection10 from "@/components/Home/HomeSection10";
import SmallBanners from "@/components/Home/SmallBanners";
// import HomeSection3 from "@/components/Home/HomeSection3";
import HomeSection4 from "@/components/Home/HomeSection4";
import HomeSection5 from "@/components/Home/HomeSection5";
import HomeSection6 from "@/components/Home/HomeSection6";
import HomeSection7 from "@/components/Home/HomeSection7";
import HomeSection8 from "@/components/Home/HomeSection8";
// import HomeSection9 from "@/components/Home/HomeSection9";

export default function Home() {
  return (
    <div>
      <HomeBanners />
      <SmallBanners />
      {/* <HomeSection3 /> */}
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      {/* <HomeSection9 /> */}
      {/* <HomeSection10 /> */}
    </div>
  );
}
