import { sections } from '.';

function NavColumn({ activeSec }) {
  return (
    <nav className="fixed top-0  w-full flex justify-between px-6 flex-wrap border-b border-b-stone-500 py-4 bg-blue-400 text-white  shadow z-10">
      {sections.map(({ id }) => (
        <a
          key={id}
          href={`#${id}`}
          className={` text-xs font-extralight ${
            activeSec === id ? ' border-b border-b-stone-300' : null
          } transition-all duration-300`}
        >
          {id.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export default NavColumn;
