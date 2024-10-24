/* eslint-disable react/prop-types */
import moon from "../assets/moon.svg";
export default function Header({ setModeHandler, text, input, mode }) {
  return (
    <div
      className={`px-[5%] py-5 font-bold flex justify-between ${
        text + " " + input
      }`}>
      <h1 className="title">Where in the world?</h1>
      <div className="mode flex space-x-2">
        <span className="icon" onClick={setModeHandler}>
          <img src={moon} className="w-5 hover:cursor-pointer" alt="moon" />
        </span>
        <span className="current-mode font-semibold capitalize">
          {mode} Mode
        </span>
      </div>
    </div>
  );
}
