import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, DisplayDataPage, ProfilePage, DataTablePage, EQRankingPage } from './pages';

const routes = [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }
, 
{
    path: '/data-table',
    component: DataTablePage
  }, 
{
    path: '/eqranking',
    component: EQRankingPage
  }];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
