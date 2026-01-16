import { useState, useEffect, use } from 'react';
import MainLayout from '../layout/MainLayout';
import { sections } from '..';
import NavColumn from '../NavColumn';

function MainPage() {
  const [activeSec, setActiveSec] = useState('introduction');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSec(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <NavColumn activeSec={activeSec} />

      {sections.map(({ id, Component }) => (
        <MainLayout key={id} id={id}>
          <Component />
        </MainLayout>
      ))}
    </>
  );
}

export default MainPage;
