import React, { useEffect, useState } from "react";
import { api } from "../../api/Api";
import "./style.css";
import moment from "moment";
import Loader from "../../atoms/Loader/Loader";

function StoryList({ data, number }) {
  const [result, setResult] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function getData() {
      let info = await api.item(data);
      setResult(info);
      setLoader(false);
    }
    getData();
  }, [data]);
  return (
    <div>
      {!loader ? (
        <div className="List-Container">
          <div className={number < 10 ? "number-pad" : "number"}>{number}.</div>
          <div className="votearrow"></div>
          <div className="information">
            {result === null ? null : (
              <span className="title">
                <a href={result.url} className="storylink">
                  {result.title}
                </a>
              </span>
            )}

            {result === null ? null : (
              <span className="subtext">
                {result.score} points by {result.by}{" "}
                {moment.unix(result.time).fromNow()} | past
              </span>
            )}
          </div>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default StoryList;
