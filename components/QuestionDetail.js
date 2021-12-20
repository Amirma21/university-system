import styles from "../styles/QuestionDetail.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";



const initialValues = { book: "", name: "", lesson: "" };
const validationSchema = Yup.object({
  book: Yup.string().required("*  این فیلد نباید خالی باشد "),
  lesson: Yup.string().required("*  این فیلد نباید خالی باشد "),
});

const QuestionDetail = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
  return (
    <div className={styles.description}>
      <div className={styles.title}>
      <i class="bi bi-question-circle"></i>
        <h6 className={styles.titleText}>ایجاد سوال</h6>
      </div>
      <form className={styles.form} noValidate>
 
        <div className={styles.textField}>
          <input
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="search"
            name="lesson"
          />
          {formik.errors.lesson && formik.touched.lesson && (
            <div className={styles.ereor}>{formik.errors.lesson}</div>
          )}
          <label>عنوان درس</label>
        </div>
        <div className={styles.textField}>
          <input
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="search"
            name="book"
          />
          {formik.errors.book && formik.touched.book && (
            <div className={styles.ereor}>{formik.errors.book}</div>
          )}

          <label>عنوان منبع </label>
        </div>
        <div className={styles.textField}>
          <input type="number" name="season" min="1" required />
          <label> شماره فصل </label>
        </div>
        <div className={styles.textField}>
          <input type="number" name="page" min="1" required />
          <label> شماره صفحه </label>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.submitButton}> ثبت </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionDetail;
