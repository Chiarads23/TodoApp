import  { useState } from 'react';
import Calendar from 'react-calendar';
import styles from "../../styles/layout/MyCalendar.module.scss";

const MyCalendar = ()=> {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.calendBox}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalendar;