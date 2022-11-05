import "./Container.css";

const Container = ({ children }) => {
  const redTitle = true;
  return (
    <div>
      {/* CSS COM CLASSE DINÂMICA */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este é o titulo do Container
      </h2>
      {children}
    </div>
  );
};

export default Container;
