import React, { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import StoryList from "./StoryList";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import QueryString from "query-string";

function StoryDetail({ apiFunc }) {
  const [storyInfo, setStoryInfo] = useState([]);
  const [loader, setLoader] = useState(true);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(30);
  const [dataPerPage, setDataPerPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [more, setMore] = useState(false);

  const location = useLocation();
  const pathName = location.pathname;
  const history = useHistory();
  const queryParams = location.search
    ? QueryString.parse(location.search)
    : null;

  useEffect(() => {
    apiFunc
      .then((res) => {
        setStoryInfo(res);

        if (queryParams && queryParams.p) {
          if (res.length > perPage * (+queryParams.p - 1)) {
            let newOffset = perPage * (+queryParams.p - 1);
            setOffset(newOffset);
            setNextPage(+queryParams.p + 1);
            setDataPerPage(res.slice(newOffset, newOffset + perPage));
            moreButton(+queryParams.p);
          } else {
            history.push(pathName);
            setDataPerPage(res.slice(offset, offset + perPage));
            if (res.length > perPage) {
              setMore(true);
            }
          }
        } else {
          setDataPerPage(res.slice(offset, offset + perPage));
          if (res.length > perPage) {
            setMore(true);
          }
        }

        setLoader(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoader(false);
      });
  }, [pageCount, offset]);

  useEffect(() => {
    if (queryParams === null) {
      setNextPage(2);

      setDataPerPage(storyInfo.slice(0, perPage));
    } else {
      setNextPage(queryParams.p + 1);

      setDataPerPage(
        storyInfo.slice(
          (queryParams.p - 1) * perPage,
          (queryParams.p - 1) * perPage + perPage
        )
      );
    }
  }, [location]);

  const moreButton = (pageNum) => {
    if (storyInfo.length <= pageNum * perPage) {
      setMore(false);
    } else {
      setMore(true);
    }
  };

  const paginate = () => {
    setOffset(pageCount * perPage);

    setPageCount(pageCount + 1);
  };

  return (
    <React.Fragment>
      {loader ? (
        <Loader></Loader>
      ) : (
        <>
          {dataPerPage.map((data, index) => {
            return (
              <StoryList
                key={index}
                data={data}
                number={
                  queryParams === null
                    ? index + 1
                    : (queryParams.p - 1) * perPage + index + 1
                }
              ></StoryList>
            );
          })}
        </>
      )}

      <div className="morelink">
        {more ? (
          <Link
            to={`${pathName}?p=${+nextPage}`}
            onClick={paginate}
            className="morelink"
          >
            More
          </Link>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default StoryDetail;
