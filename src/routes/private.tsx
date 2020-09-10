import Profile from '../pages/Admin/Profile';
import { RouteProperties } from './interfaces';
import Translation from 'pages/Translation';
import Tag from 'pages/Tag';
import { TagUpdate, TagAdd } from 'pages/Tag/Form';

const routes: RouteProperties[] = [
  {
    component: Profile,
    exact: true,
    path: '/admin/profile',
  },
  {
    component: Translation,
    exact: true,
    path: '/admin/translation',
  },
  {
    component: Tag,
    exact: true,
    path: '/admin/tag',
  },
  {
    // breadcrumb: 'generic.addNew',
    component: TagAdd,
    exact: true,
    path: '/admin/tag/add',
  },
  {
    // breadcrumb: (route) => route.match.params.tag_id,
    component: TagUpdate,
    exact: true,
    path: '/admin/tag/:tagID',
  },
];

export default routes;
