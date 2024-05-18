/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first city from map" />;
  return (
    <ul className={styles.cityList}>
      {cities?.map((city, i) => (
        <CityItem city={city} key={i} />
      ))}
    </ul>
  );
}

export default CityList;
