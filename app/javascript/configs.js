import dashboard from "./dashboard/dashboard.jsx";
import barCharts from "./barCharts/barCharts.jsx";
import donutCharts from "./donutCharts/donutCharts.jsx";
import misc from "./misc/miscellaneousCharts.jsx";


export const viewsConfig = [
  // Insert views and their path mappings
  {component: dashboard, path: '/'},
  {component: barCharts, path: '/barCharts'},
  {component: donutCharts, path: '/donutCharts'},
  {component: misc, path: '/misc'},
];

export const navbarConfig = {
  // The different tabs and the link to where they are routed to.
  categories: [
    {title: 'Dashboard', link: '/'},
    {title: 'Bar Charts', link: '/barCharts'},
    {title: 'Donut Charts', link: '/donutCharts'},
    {title: 'Misc Charts', link: '/misc'},

  ],
  // The title image placed at the top, above nav.
  titleSrc: {
    path: '../static/build/img/brand.svg',
    alt: 'Patternfly Demo App',
    useImage: true,
  }
};