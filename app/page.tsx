import { Hero, OnlineServiceBanner, Products, Reviews } from '@/components';


export default function Home() {
  return (
    <div>
        <Hero />
        <Products/>
        <OnlineServiceBanner />
        <Reviews/>
    </div>
  );
}
