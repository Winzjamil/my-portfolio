import Introduction from './Introduction';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';

export const sections = [
  { id: 'introduction', Component: Introduction },
  { id: 'about', Component: About },
  { id: 'projects', Component: Projects },
  { id: 'contacts', Component: Contacts },
];
export const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
