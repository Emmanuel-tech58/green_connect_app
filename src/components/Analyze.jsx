import React, {useState} from 'react';
import {HiOutlineExclamationCircle} from 'react-icons/hi';
import {ImFileExcel} from 'react-icons/im';
import { Modal, Button } from 'flowbite-react';

const Analyze = () => {
    const [fileImage, setFileImage] = useState('');
    const [modalvisible, setModalVisible] = useState(false);

    const selectedFileHandler = event => {
        if(event.target.files && event.target.files[0]){
            if(event.target.files[0].type === "image/jpeg"){
                setFileImage(URL.createObjectURL(event.target.files[0]));
            }else{
                setModalVisible(true);
                setFileImage('');
            }
        }
    }
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
                        <div className='w-full h-full border-4 border-dashed bg-gray-100 flex flex-col justify-center items-center mx-14' style={{ minHeight: '40vh' }}>
                            <p className='w-full flex justify-center'><ImFileExcel size={50} color=""/></p>
                            <p className='text-gray-400 mt-5'>Click choose file to select and excel file from your local storage</p>
                        </div>:
                        <div className='w-3/4 justify-center'>
                            <img src={fileImage} className='w-3/4' alt=""/>
                        </div> 
                            
                    }
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <input type="file" onChange={(e) => selectedFileHandler(e)}/>
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
                    <button className='bg-slate-800 text-white mt-10 py-2 px-3 -ml-32 w-2/5'>
                        Upload
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default Analyze;
