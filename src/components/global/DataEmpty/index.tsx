import styles from "./index.module.scss";

const DataEmpty = () => {
  return (
    <div
      className={`w-full flex items-center justify-center py-12 ${styles.image}`}
    >
      <div className="text-center">
        <img
          src="/assets/images/data-empty.png"
          className="w-full"
          alt="data empty"
        />
        <span className="text-2xl block mt-6 tracking-wider">Empty Result</span>
      </div>
    </div>
  );
};

export default DataEmpty;
