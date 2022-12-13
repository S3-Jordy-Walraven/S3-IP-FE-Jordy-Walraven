import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Canvas from '../../components/EffectComponents/Canvas';
import EffectService from '../../services/EffectService';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EffectDetailPage = (props) => {
    const { id } = useParams();
    const service = new EffectService();
    const [effect, setEffect] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== undefined) {
            service.getEffectById(id).then((data) => {
                console.log(data);
                setEffect(data.data);
            })
        } else if (props.effect !== undefined) {
            setEffect(props.effect);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function backButtonCallback() {
        navigate("/")
    }

    async function downloadButtonCallback() {
        var anchor = document.createElement("a");
        console.log(effect.effectContent)
        anchor.href = 'data:attachment/text,' + await encodeURIComponent(effect.effectContent);
        anchor.target = '_blank';
        anchor.download = `${effect.effectName}.html`;
        anchor.click();
    }

    function oneclickCallback() {
        var anchor = document.createElement("a");
        anchor.href = `Signify://${effect.effectName}`;
        anchor.click();
    }




    return (
        <div data-testid="effectDetailPage-1" style={{ color: "white" }} >
            <button data-testid="backButton-1" onClick={backButtonCallback} className="btn btn-danger m-5 pt-3 pb-3" >Back to home</button>
            {
                effect !== null ?
                    <div>
                        <div style={{ textAlign: "center", marginTop: "2%", marginBottom: "-2%" }}>
                            <h1 style={{marginBottom:"-3%"}}>{effect.effectName.toUpperCase()}</h1>
                            <Canvas finalString={effect != null ? effect.effectContent : null} />
                            <h2>By {effect.creatorName}</h2>
                        </div>
                        <div className='d-flex justify-content-center' style={{ marginTop: "3%" }}>
                            <button className='btn btn-primary m-2 p-3' data-testid="viewCodeButton-1" onClick={handleShow}>View code</button>
                            <button className='btn m-2 p-3' style={{ "color": "white", backgroundColor:"#212D3A" }} data-testid="onClick-1" onClick={oneclickCallback}>oneClick install</button>
                            <button className='btn btn-success m-2 p-3' data-testid="downloadButton-1" onClick={downloadButtonCallback}>Download</button>
                        </div>

                        <Modal show={show} onHide={handleClose} style={{ color: "white" }} size="xl">
                            <Modal.Header style={{ color: "white", backgroundColor: "#212D3A" }} closeButton>
                                <Modal.Title>Effect Code</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ color: "white", backgroundColor: "#212D3A" }} scrollable="true">{<pre><code data-testid="codeViewer-1">{effect.effectContent}</code></pre>}</Modal.Body>
                            <Modal.Footer style={{ color: "white", backgroundColor: "#212D3A" }}>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    : <>No effect with this id</>
            }
        </div>
    )
}

export default EffectDetailPage