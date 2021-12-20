import React, { Component } from 'react';
import styles from '../styles/resultbox.module.css';
import { Table } from 'react-bootstrap'

class Resultbox extends Component {
    render() {
        return (
            <div className={styles.box}>
                <Table responsive='sm' striped bordered hover className={styles.table}>
                    
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>عنوان درس</th>
                            <th>عنوان کتاب</th>
                            <th>سازنده</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ریاضی</td>
                            <td>انتگرال</td>
                            <td>استاد مرتضوی</td>
                            <td>
                                <button className={styles.downloadButton} type='button'>دسترسی به فایل</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>گسسته</td>
                            <td>گراف</td>
                            <td>استاد ملکی</td>
                            <td>
                                <button className={styles.downloadButton}>دسترسی به فایل</button>
                            </td>
                        </tr>
                       
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Resultbox;