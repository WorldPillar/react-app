import React from 'react';

import { useState, useEffect } from 'react';

import { getImageFile } from '../services/ImageServise'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ModalBS from 'react-bootstrap/Modal';

const NewsCard = ({record}) => {
    const [show, setShow] = useState(false);

    const [screenShot, setScreenshot] = useState(undefined)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [message, setMessage] = useState('');
    const [mail, setMail] = useState('');

    const handleChange = (event) => {
        setMail(event.target.value);
      };

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    const validate = () => {
        if (!mail) {
            setMessage('Почта не введена!');
            return null;
        }
        if (!validateEmail(mail)) {
            setMessage('Некорректный адрес почты!');
            return null;
        }
        setMessage('Почта отправлена!');

        window.open(`http://localhost:8000/api/files/${record.downloadFileName}`, '_blank', 'noopener,noreferrer')
        return {}
    };

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const [response, error] = await getImageFile(record.imageFileName)
            if (error)
                console.log(error)
            else {
                console.log(`got response ${response}`)
            setScreenshot(response)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="card-news-al">
                <div className="card-news-img"><img src={screenShot} class="card_img" alt="card" /></div>
                <div className="card-news-text">
                    <div className="card-news-text-main">
                        <div className="card-news-text-main-h4">{record.header}
                        </div>
                        <div className="card-news-text-main-h5">{record.version}</div>
                    </div>
                    <div className="card-news-text-main-description">
                        {record.description}
                    </div>
                    <button className="card-news-text-download" onClick={handleShow}>Download</button>
                </div>
            </div>
            <ModalBS show={show} onHide={handleClose}>
                <ModalBS.Header closeButton>
                    <ModalBS.Title>Поделитесь своими данными!</ModalBS.Title>
                </ModalBS.Header>
                <ModalBS.Body>
                    <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                    <InputGroup onChange={handleChange}>
                        <Form.Control
                            placeholder="oleg@mail.ru"
                            aria-label="email"
                        />
                    </InputGroup>
                    <div id="emailHelp" className="form-text">Мы передадим вашу электронную почту.</div>
                </ModalBS.Body>
                <div className="mb-3 form-check text-center">
                    <label className="form-check-label" id="exampleCheck1">{message}</label>
                </div>
                <ModalBS.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={validate}>
                        Скачать
                    </Button>
                </ModalBS.Footer>
            </ModalBS>
        </div>
    );
}

export default NewsCard