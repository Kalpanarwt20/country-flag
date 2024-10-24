/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DataLoading from "./loading/DataLoading";
import { countryDetail } from "../redux/action";
function Detail({ text, bg, input }) {
  const navigate = useNavigate();

  const [showDetail, setShowDetail] = useState(null);

  const { data, details, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const goBackHandler = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const fetchData = async () => {
      let pathname = window.location.pathname;
      const i = pathname.indexOf("detail");
      pathname = pathname.substring(i + 6 + 1);
      const name = pathname.replace(/%20/g, " ");
      await countryDetail(dispatch, name);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (details) {
      setShowDetail(details);
    }
  }, [details]);

  const onBorderClick = (border) => {
    let newDetail;
    data.forEach((ele) => {
      if (ele["fifa"] === border) {
        newDetail = ele;
      }
    });

    if (newDetail) {
      navigate(`/detail/${newDetail.name.common}`);
      setShowDetail(newDetail);
    }
  };

  return (
    <div
      className={`detail-section w-full box-border px-[10%] sm:px-[5%] md:flex-row md:justify-center p-5 md:items-center md:space-x-8 ${
        bg + " " + text
      }`}>
      {loading ? (
        <DataLoading />
      ) : (
        <div className="grid grid-cols-12 gap-6">
          <div className="go-back col-span-full">
            <button
              onClick={goBackHandler}
              className={`flex ${input} px-5 rounded-md py-2 shadow-sm`}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
              Back
            </button>
          </div>
          <div className="flag sm:col-span-6 col-span-full">
            <img
              src={
                showDetail &&
                showDetail.flags &&
                (showDetail.flags.png || showDetail.flags.svg)
              }
              className="w-full min-[750px]:max-w-sm object-cover mx-auto"
              alt="flag"
            />
          </div>
          <div className="content font-semibold sm:col-span-6 col-span-full">
            <div className="font-bold text-xl mb-4">
              {showDetail && showDetail.name && showDetail.name.common}
            </div>
            <div>
              <div className="list flex w-full flex-col sm:flex-row space-y-6 sm:space-y-0">
                <div className="space-y-2 basis-1/2">
                  <p>
                    Native Name:{" "}
                    <span className="font-normal">
                      {showDetail &&
                      showDetail.name.nativeName &&
                      Object.keys(showDetail.name.nativeName)[0]
                        ? showDetail.name.nativeName[
                            Object.keys(showDetail.name.nativeName)[0]
                          ].common
                        : "---"}
                    </span>
                  </p>
                  <p>
                    Population:{" "}
                    <span className="font-normal">
                      {showDetail && showDetail.population
                        ? showDetail.population
                        : "---"}
                    </span>
                  </p>
                  <p>
                    Region:{" "}
                    <span className="font-normal">
                      {showDetail && showDetail.region
                        ? showDetail.region
                        : "---"}
                    </span>
                  </p>
                  <p>
                    Sub Region:{" "}
                    <span className="font-normal">
                      {showDetail && showDetail.subregion
                        ? showDetail.subregion
                        : "---"}
                    </span>
                  </p>
                  <p>
                    Capital:{" "}
                    <span className="font-normal">
                      {showDetail && showDetail.capital
                        ? showDetail.capital
                        : "---"}
                    </span>
                  </p>
                </div>
                <div className="space-y-2 basis-1/2">
                  <p>
                    Top Level Domain :{" "}
                    <span className="font-normal">
                      {showDetail && showDetail.tld ? showDetail.tld[0] : "---"}
                    </span>
                  </p>
                  <p>
                    Currencies :{" "}
                    <span className="font-normal">
                      {showDetail && showDetail.currencies
                        ? showDetail.currencies[
                            Object.keys(showDetail.currencies)[0]
                          ].name
                        : "---"}
                    </span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span className="font-normal space-x-2 space-y-2">
                      {showDetail && showDetail.languages
                        ? Object.keys(showDetail.languages).map((key) => (
                            <span key={key}>{showDetail.languages[key]}</span>
                          ))
                        : "---"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="country-border my-5 basis-full space-x-4 flex space-y-2 flex-wrap">
                <h1 className="mt-3">Border Countries:</h1>{" "}
                <div className="flex flex-wrap "></div>
                {showDetail && showDetail.borders
                  ? showDetail.borders.map((border, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            onBorderClick(border);
                          }}
                          className={`font-normal w-fit ${input} shadow-sm rounded-md px-3 py-1`}>
                          {border}
                        </button>
                      );
                    })
                  : "---"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
