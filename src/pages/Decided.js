import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Decided = () => {
    return (
        <main>
            <div className="Container">
                <div className="Outline">
                    <div className="Inline">
                        <div className="DecidedWrap">
                            <Link to="/">
                                <div className="BackBtn" />
                            </Link>
                            <div iv className="BtnWrap">
                                <Link to="/decided-result">
                                    <Button variant="danger">밥</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">국 (탕)</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">면</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">일식</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">중식</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">분식</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">야식</Button>
                                </Link>
                                <Link to="/decided-result">
                                    <Button variant="danger">귀찮아..</Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Decided;