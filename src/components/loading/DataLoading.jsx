/* eslint-disable react/prop-types */
function DataLoading({ mode }) {
  return (
    <div
      className={` rounded-full p-5 ${
        mode === "light" ? "border-black" : "border-white"
      } border-4 w-5 h-5 animate-spin mx-auto border-t-transparent border-b-transparent duration-300 ease-linear`}></div>
  );
}

export default DataLoading;
