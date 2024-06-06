import dynamic from "next/dynamic";
import styles from "./page.module.css";
import { Loader } from "@/components";

const ServerCountryFetcher = dynamic(
  () => import("../components/ServerCountryFetcher"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

export const metadata = {
  title: "Where in the world",
  description: "Test project",
};

const Home = () => {
  return (
    <div className={styles.homePage}>
      <ServerCountryFetcher />
    </div>
  );
};

export default Home;
