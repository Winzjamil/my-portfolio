function MainLayout({ children, id }) {
  return (
    <>
      <section id={id} className="  bg-sky-200  ">
        {children}
      </section>
    </>
  );
}

export default MainLayout;
