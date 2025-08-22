import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Navbar from '@/components/ui/navbar';
import Home from '@/page/home';
import Footer from '@/components/ui/footer';
 
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}