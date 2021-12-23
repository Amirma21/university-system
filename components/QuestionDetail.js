import styles from "../styles/QuestionDetail.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";


const validationSchema = Yup.object({
  book: Yup.string()
    .required("*  این فیلد نباید خالی باشد ")
    .min(4, "حداقل 4 حرف"),
  lesson: Yup.string()
    .required("*  این فیلد نباید خالی باشد ")
    .min(4, "حداقل 4 حرف "),
});

const QuestionDetail = () => {
  let initialValues  = { book: "", lesson: "", season: "", page: "" };
  const [error , setError] = useState(" ") ; 


  const submitHanlder = async (values) => {
   try {
     await  axios
     .post("http://localhost:3001/question", { ...values })
     toast.success("مشخصات سوال ثبت گردید ")
   } catch (error){
     setError("b")

   }
  
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: submitHanlder,
  });

if(error === "a") return <p></p>
if(error === "b" )return <p style={{position:"absolute" , left:"48%", top : "53%"}}></p>
  return (
    <div className={styles.description}>
      <div className={styles.title}>
        <i class="bi bi-question-circle"></i>
        <h6 className={styles.titleText}> </h6>
      </div>
      <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
        <div className={styles.textField}>
          <input
            value={formik.values.lesson}
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
            value={formik.values.book}
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
          <input
            type="number"
            name="season"
            pattern="[0-9\-]+"
            min="1"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.season}
          />
          <label> شماره فصل </label>
        </div>

        {
          <div className={styles.textField}>
            <input
              type="text"
              name="page"
              min="1"
              required
              
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.page}
            />
            <label> شماره صفحه </label>
          </div>
        }

        <div className={styles.btnContainer}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!formik.isValid}
          >
            ثبت
          </button>
        </div>
        <ToastContainer rtl={true} position="top-center" />
      </form>
    </div>
  );
};

export default QuestionDetail;
