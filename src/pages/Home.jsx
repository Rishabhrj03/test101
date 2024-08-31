import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Home.module.css";
import CompanyList from "../components/CompanyList";

const Home = () => {

  return (
    <div className={styles.home}>
      <FrameComponent />
      <main className={styles.homeInner}>
        <section className={styles.frameParent}>
          <FrameComponent2 />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.resultFound1Parent}>
                <div className={styles.resultFound1}>Result Found: 1</div>
                {[1,2,3,4,5].map(element => <CompanyList/>)}
              </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
