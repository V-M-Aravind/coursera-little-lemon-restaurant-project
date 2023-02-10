import React from 'react';
import styles from "./Banner.module.css";
import heroImage from "../../assets/hero-image.jpeg"
import Button from '../Button';

const Banner = () => {
  return (
    <section className={styles.banner}>
<div className={styles.banner__left}><h2>Little Lemon</h2>
<h4>Chicago</h4>
<p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
<Button>Reserve a Table</Button>
</div>
<img src={heroImage} alt="hero"className={styles.hero}/>
    </section>

  )
}

export default Banner
