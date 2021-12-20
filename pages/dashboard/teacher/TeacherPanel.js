import Description from "../../../components/Description";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import style from "../../../styles/TeacherPanel.module.css";

export default function Teacher() {
  return (
    <>
      <Navbar />
      <div className={style.panel}>
        <Sidebar /> 
        <Description />
      </div>
    </>
  );
}
