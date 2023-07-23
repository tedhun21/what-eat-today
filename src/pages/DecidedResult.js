import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const DecidedResult = () => {
    return (
        <main>
            <div className="Container">
                <div className="Outline">
                    <div className="Inline">
                        <div className="DecidedWrap">
                            <Link to="/decided">
                                <div className="BackBtn" />
                            </Link>
                            <div iv className="ResultWrap">
                                <Link to="/result">
                                    {/* <Button variant="danger">{result.index[0]}</Button> */}
                                    <Button variant="danger">제육덮밥</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">비빔밥</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">오므라이스</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">카레덮밥</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">야채 볶음밥</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">짜장밥 </Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">회덮밥</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">쌈밥</Button>
                                </Link>
                                <Link to="/result">
                                    <Button variant="danger">김치 볶음밥</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DecidedResult;