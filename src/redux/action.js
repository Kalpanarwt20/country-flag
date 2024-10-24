import oldData from "../assets/data.json";
export async function fetchData(dispatch) {
  const api = "https://restcountries.com/v3.1/all";
  try {
    dispatch({
      type: "fetchDataRequest",
    });
    let response = await fetch(api);
    response = await response.json();

    const uniqueRegions = [...new Set(response.map((obj) => obj.region))];

    dispatch({
      type: "fetchDataSuccess",
      payload: { data: response, regions: uniqueRegions },
    });
  } catch (error) {
    const uniqueRegions = [...new Set(oldData.map((obj) => obj.region))];
    dispatch({
      type: "fetchDataError",
      payload: { data: oldData, regions: uniqueRegions },
    });
  }
}

export const countryDetail = async (dispatch, name) => {
  let api = `https://restcountries.com/v3.1/name/${name}`;

  try {
    dispatch({
      type: "selectedCountryDetailRequest",
    });
    let detail = await fetch(api);
    detail = await detail.json();

    dispatch({
      type: "selectedCountryDetailSuccess",
      payload: detail[0],
    });
  } catch (error) {
    console.log("Country Detail : Error : " + error);
    dispatch({
      type: "selectedCountryDetailError",
    });
  }
};
