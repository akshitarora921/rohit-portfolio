import Carousel from '../components/Carousel';
import Blogs from '../page/Blogs';
import contact from '../page/contact';
import Home from '../page/Home';
import portfolio from '../page/portfolio';
import Resume from '../page/Resume';

const routeConfig = {
  routes: [
    {
      component: Home,
      path: '/',
      exact: true,
    },
    {
      component: Resume,
      path: '/resume',
      exact: true,
    },
    {
      component: portfolio,
      path: '/portfolio',
      exact: true,
    },
    {
      component: Blogs,
      path: '/blog',
      exact: true,
    },
    {
      component: contact,
      path: '/contact',
      exact: true,
    },
    {
      component: Carousel,
      path: '/test',
      exact: true,
    },
  ],
};

export default routeConfig;
