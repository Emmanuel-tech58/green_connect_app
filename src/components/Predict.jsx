import React, {useState} from 'react';
import {HiOutlineExclamationCircle} from 'react-icons/hi';
import {GrImage} from 'react-icons/gr';
import { Modal, Button } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import {AiFillCamera} from 'react-icons/ai'

import { getPrediction } from '../features/predictionAction';

const WebcamComponent = () => <Webcam />

const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: 'user',
  }

const Predict = () => {

    const [fileImage, setFileImage] = useState('');
    const [imageAcquisitionMode, setImageAcquisitionMode] = useState('upload')
    const [modalvisible, setModalVisible] = useState(false);
    let dispatch = useDispatch();
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setFileImage(pictureSrc)
      })

    const selectedFileHandler = event => {
        setImageAcquisitionMode('upload')
        if(event.target.files && event.target.files[0]){
            if(event.target.files[0].type === "image/jpeg"){
                setFileImage(URL.createObjectURL(event.target.files[0]));
            }else{
                setModalVisible(true);
                setFileImage('');
            }
        }
    }

    const predictMoistureContent = () => {
        dispatch(getPrediction({image: fileImage}));
    }
    console.log(imageAcquisitionMode);
    return (
        <div className='mt-10'>
            <div>

            </div>
            <div>
                <div 
                    className={`px-10 flex flex-wrap w-full justify-center items-center`} 
                    style={{ minHeight: '40vh' }}

                >
                    {
                        fileImage === '' ? 
                        <div className='w-full h-full border-4 border-dashed bg-gray-100 flex flex-col justify-center items-center sm:mx-14' style={{ minHeight: '40vh' }}>
                            <p className='w-full flex justify-center'><GrImage size={50} color=""/></p>
                            <p className='text-gray-400 mt-5'>Click choose file to select and image from your local storage</p>
                        </div>:
                        <div className='w-full sm:w-3/4 justify-center'>
                            <img src={fileImage} className='w-3/4' alt=""/>
                        </div> 
                         
                    }
                        {
                            imageAcquisitionMode === 'capture' && fileImage === '' ? 
                            <Webcam
                                audio={false}
                                height={400}
                                ref={webcamRef}
                                width={400}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}
                            /> : null
                        }
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <input type="file" onChange={(e) => selectedFileHandler(e)}/>
                    {
                        imageAcquisitionMode === 'capture' ? 
                        <button
                        onClick={(e) => {
                        e.preventDefault()
                        capture()
                        }}
                        className="btn btn-danger sm:hidden mt-5"
                    >
                        capture
                    </button>
                    :
                    <button
                        onClick={(e) => {
                        setImageAcquisitionMode('capture');
                        setFileImage('');
                        }}
                        className="btn btn-danger sm:hidden mt-5"
                    >
                        <AiFillCamera size={30}/>
                    </button>
                    }
                    
                    <Modal
                        show={modalvisible}
                        size="md"
                        popup={true}
                        onClose={() => setModalVisible(false)}
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Please upload only images
                            </h3>
                            <div className="flex justify-center gap-4">
                            <Button
                                color="#232a38"
                                onClick={() => setModalVisible(false)}
                            >
                                Ok
                            </Button>
                            </div>
                        </div>
                        </Modal.Body>
                    </Modal>
                    <button 
                        className='bg-slate-800 text-white mt-10 py-2 px-3 -ml-32 w-2/5'
                        onClick={predictMoistureContent}
                    >
                        Predict
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default Predict;
