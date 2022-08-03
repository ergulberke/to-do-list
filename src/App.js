import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Arabayi Yika", tamamlandi: false }
]
function App() {


  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState('');
  return (
    <div className="App">




      <br></br>

      <Container>

        <Row>
          <Col><b><font size="6">To Do List</font></b></Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col>

            {[
              'Primary'
            ].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ widht: '18rem' }}
                className="mb-2"
              >
                <Card.Header><b><font size="4">Ekle</font></b></Card.Header>
                <Card.Body> <Card.Title></Card.Title>
                  <Card.Text>
                    <div className="ekleme_formu">
                      <input value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value)} placeholer="listeye ekle" />



                      <button class="btn btn-success" onClick={() => {
                        setListe([...liste, { id: Date.now(), baslik: yeniBaslik, tamamlandi: false }])
                        setYeniBaslik("");
                      }}

                      >
                        Ekle </button>

                      <button class="btn btn-danger" onClick={() => setListe(liste.filter(item => !item.tamamlandi))}  >Tamamlananlari Sil</button>
                    </div>
                  </Card.Text>
                </Card.Body>

              </Card>
            ))
            }

            <br></br>
          </Col><Col>
            <b><font size="4"> </font></b>
            <div className="liste">

              {[
                'Info'
              ].map((variant) => (
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ widht: '18rem' }}
                  className="mb-2"
                >
                  <Card.Header><b><font size="4">Son Eklenenler</font></b></Card.Header>
                  <Card.Body> <Card.Title> </Card.Title>
                    <Card.Text>
                      {
                        liste.map((item, index) => (
                          <div key={index}
                            ClassName={item.tamamlandi ? 'yapildi' : ''}>
                            <Form>
                              {['checkbox'].map((type) => (
                                <div key={`{type}`} onClick={() => {
                                  setListe(liste.map(el => el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el))
                                }
                                } className="mb-2">
                                  <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={item.baslik}
                                  />
                                </div>
                              ))}
                            </Form>
                          </div>))
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;
