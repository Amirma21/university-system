import React, { Component } from "react";
import styles from "../styles/description.module.css";

class Description extends Component {
  render() {
    return (
      <div className={styles.description}>
        <h3> به بانک سوالات خوش آمدید </h3>
        <span>
          بانک سوالات شامل مجموعه‌ای از سوالات با سطوح مختلف و دسته های مختلف می
          باشد که به شما امکان استفاده ، بررسی ، و ایجاد سوالات جدید را میدهد
        </span>
      </div>
    );
  }
}

export default Description;
