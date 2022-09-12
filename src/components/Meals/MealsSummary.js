import styles from "./MealsSummary.module.css";
import React from "react";
const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered by Motorcycle</h2>
      <p>Enjoy the weekly specials at the market at Soi Sukhumvit 33</p>
      <p>All meals are made fresh the same day from local ingredients</p>
    </section>
  );
};

export default MealsSummary;
