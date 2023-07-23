import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Start = () => {
    return (
        <main>
            <div className="Container" >
                <div className="Outline">
                    <div className="Inline">
                        <div className="StartWrap">
                            <div className="TitleWrap">
                                <h1>오늘 뭐 먹지?</h1>
                                <h2>스터디_참숯가마</h2>
                            </div>
                            <div className="TitleText">
                                <span>메뉴 추천 받으러 가기</span>
                            </div>
                            <Link to="/decided">
                                <Button variant="danger">START</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Start;
