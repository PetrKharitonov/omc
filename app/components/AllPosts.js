"use client";

import { useState } from "react";
import { sortPosts } from "@/app/lib/sortPosts";
import "./AllPosts.css";
import Calendar from "react-calendar";
import "./AllPostsCalendar.css";
import { differenceInCalendarDays } from "date-fns";
import AllCard from "./cards/AllCard";
import { useWindowWidth } from "../hooks/useWindowWidth";

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

const AllPosts = ({ posts }) => {
  const [value, onChange] = useState(new Date());
  const [filter, setFilter] = useState(false);
  const [filterMobileToggle, setFilterMobileToggle] = useState(false);

  const onClickHandler = () => {
    setFilter(true);
  };

  const sortedPosts = sortPosts([
    ...posts.postEvents.nodes,
    ...posts.postNews.nodes,
  ]);

  const highlightedDates = [];

  sortedPosts.map((el) => {
    let post = Object.values(el)[0];
    let date = new Date(post.customdate);
    highlightedDates.push(date);
  });

  function tileClassName({ date, view }) {
    if (
      view === "month" &&
      highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
      return "highlight";
    }
  }

  const windowWidth = useWindowWidth();

  return (
    <div className="allPosts">
      {windowWidth < 940 && (
        <div className="filter-toggle-container">
          <button
            className="filter-toggle-btn"
            onClick={() => setFilterMobileToggle(!filterMobileToggle)}
          >
            Фильтровать по дате
          </button>
          {filterMobileToggle && (
            <div>
              <Calendar
                onChange={onChange}
                onClickDay={onClickHandler}
                tileClassName={tileClassName}
                value={value}
                locale={"ru-RU"}
              />
              <button
                className="filter-btn"
                onClick={() => {
                  setFilter(false);
                  onChange(new Date());
                }}
              >
                {" "}
                сбросить фильтры
              </button>
            </div>
          )}
        </div>
      )}
      <div className="allPosts-container">
        {sortedPosts.map((el) => {
          let post = Object.values(el)[0];
          let date = new Date(post.customdate);
          let id = Object.values(el)[1];
          date.setHours(value.getHours());
          date.setMinutes(value.getMinutes());
          date.setSeconds(value.getSeconds());
          date.setMilliseconds(value.getMilliseconds());

          if (!filter) {
            return <AllCard post={post} type={Object.keys(el)[0]} id={id} />;
          } else if (value.getTime() === date.getTime()) {
            return <AllCard post={post} type={Object.keys(el)[0]} id={id} />;
          }
        })}
      </div>
      {windowWidth > 940 && (
        <div>
          <Calendar
            onChange={onChange}
            onClickDay={onClickHandler}
            tileClassName={tileClassName}
            value={value}
            locale={"ru-RU"}
          />
          <button
            className="filter-btn"
            onClick={() => {
              setFilter(false);
              onChange(new Date());
            }}
          >
            {" "}
            сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
};
export default AllPosts;
