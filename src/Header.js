import React from "react";
import "./general_style.css"
import white_search from "./white-search.svg"

import {useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const navigateToNews = () => {
      navigate('/');
    };

    const navigateToSearch = () => {
        navigate('/search');
      };

    return (
        <div class="header">
            <div class="header-bar">
                <div class="news-update">
                    <div class="news-header" onClick={navigateToNews}>Новости</div>
                    <div class="update-header">Обновление ПО</div>
                </div>
                <div class="search" onClick={navigateToSearch}><img src={white_search} alt="search"/></div>
            </div>
        </div>
    );
}