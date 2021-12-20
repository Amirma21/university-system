import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import style from "../styles/Create.module.css";
import Description from "../components/Description";
import QuestionDetail from "../components/QuestionDetail";

const Create = () => {
  return (
    <div >
      <Navbar />
      <div className={style.panel}>
        <Sidebar />
      <QuestionDetail />
      </div>
    </div>
  );
};

export default Create;
