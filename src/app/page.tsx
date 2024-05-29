import { SearchFilterBar } from "../components/";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className="search-filter-bar">
        <SearchFilterBar />
      </div>
    </div>
  );
};

export default Home;
