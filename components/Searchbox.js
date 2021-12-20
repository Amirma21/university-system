import React, { Component, useState } from "react";
import styles from "../styles/searchbox.module.css";
import Resultbox from "./Resultbox";

export default function Searchbox() {
  const [lessonInputValue, setLessonInputvalue] = useState();
  const [bookInputValue, setBookInputvalue] = useState();
  const [seasonInputValue, setSeasonInputvalue] = useState();
  const [pageInputValue, setPageInputvalue] = useState();

  const clearInputHandler = () => {
    setLessonInputvalue(""); 
    setBookInputvalue("");
    setSeasonInputvalue("");
    setPageInputvalue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchbox}>
        <h6>
                                                                                                                                                                                                 
          <i class="bi bi-search"></i> جستجو
        </h6>

        <form className={styles.container}>
          <div className={styles.textField}>
            <input
              type="search"
              name="lesson"
              onChange={(e) => {
                setLessonInputvalue(e.target.value);
              }}
              value={lessonInputValue}
              required
            />
            <label>عنوان درس</label>
          </div>

          <div className={styles.textField}>
            <input
              type="search"
              name="book"
              onChange={(e) => {
                setBookInputvalue(e.target.value);
              }}
              value={bookInputValue}
              required
            />
            <label>عنوان کتاب </label>
          </div>

          <div className={styles.textField}>
            <input
              type="number"
              name="season"
              min="1"
              onChange={(e) => {
                setSeasonInputvalue(e.target.value);
              }}
              value={seasonInputValue}
              required
            />
            <label> شماره فصل </label>
          </div>

          <div className={styles.textField}>
            <input
              type="number"
              name="page"
              min="1"
              onChange={(e) => {
                setPageInputvalue(e.target.value);
              }}
              value={pageInputValue}
              required
            />
            <label> شماره صفحه </label>
          </div>
        </form>

        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>
            <i class="bi bi-funnel"></i> نمایش نتایج
          </button>
          <button
            onClick={clearInputHandler}
            type="submit"
            className={styles.submitButton}
          >
            <i class="bi bi-trash-fill"></i> حذف فیلتر
          </button>
        </div>
      </div>

      <Resultbox />
    </div>
  );
}
