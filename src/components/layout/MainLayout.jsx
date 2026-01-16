function MainLayout({ children, id }) {
  return (
    <>
      <section id={id} className="bg-gray-700">
        {children}
      </section>
    </>
  );
}

export default MainLayout;
