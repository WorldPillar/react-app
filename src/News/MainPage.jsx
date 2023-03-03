import React from 'react'
import "../static/styles.css"

import { useState, useEffect } from 'react';

import Carousel from './Carousel'

import { getRecords } from '../services/RecordService'
import { getCounter } from '../services/RecordsCount'
import NewsCard from './NewsCard'

import Pagination from './Pagination'


const MainPage = () => {

    const [records, setRecords] = useState([]);
    const [counts, setCounts] = useState([]);

    // tasks 
    const getAllRecords = () => {
        getRecords()
        .then(response => {
        console.log(response);
        setRecords(response);
        });
    }

    const getDownloadCount = () => {
        getCounter()
        .then(response => {
        console.log(response);
        setCounts(response);
        });
    }

    useEffect(() => {
        getAllRecords()
        getDownloadCount()
    }, []);

    return (
        <div className="main-page">
            <div className="news">
                <Carousel />
                <div className="all-news">
                    <div className="last-news">
                        <div className="last-news-text">
                            Общее количество скачиваний: {counts.counter}
                        </div>
                        <div className="last-news-text">
                            Последние новости
                        </div>
                        <div className="last-news-list">
                            {records.map((record, i) =>
                                <span className="busterCards" key={i}>
                                    <NewsCard
                                        record={record}
                                    />
                                </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    );
}

export default MainPage