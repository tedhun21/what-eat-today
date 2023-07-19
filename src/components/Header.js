import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css"

const Header = () => {
    return (
        <>
            <header>
                <Container fluid>
                    <Row>
                        <Col>
                            <span id="text-left">날씨 : 비</span></Col>
                        <Col sm={1} >
                            <img id='LogoImg' src="/images/HeaderLogo.png" alt="로고" />
                        </Col>
                        <Col sm="auto" >
                            <h1>오늘 뭐 먹지</h1>
                        </Col>
                        <Col>
                            <span id="text-right">현재시간 : 오후 2시 30분</span>
                        </Col>
                    </Row>
                </Container>
            </header >
        </>
    )
}

export default Header