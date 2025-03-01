import React from 'react';
import { useDispatch } from 'react-redux';
import { createDir } from '../../../actions/file';
import { PopupWrapper, PopupContent, PopupHeader, PopupCreateBtn, PopupInput } from './style';

const Popup = ({ currentDir, activePopup, setActivePopup, popupRef }) => {
  const dispatch = useDispatch();
  const [dirName, setDirName] = React.useState('');

  const createHandler = () => {
    dispatch(createDir(currentDir, dirName));
    setActivePopup(false);
    setDirName('');
  };

  const closeOnClickOutside = (event) => {
    if (event.code == 'Enter') {
      createHandler();
    }
  };


  return (
    activePopup && (
      <PopupWrapper>
        <PopupContent ref={popupRef}>
          <PopupHeader>
            <h3 className='popup__title'>Создать новую папку</h3>
            <button onClick={() => setActivePopup(false)} className='popup__close'>
              X
            </button>
          </PopupHeader>
          <PopupInput
            setValue={setDirName}
            onKeyPress={closeOnClickOutside}
            onChange={(e) => setDirName(e.target.value)}
            value={dirName}
            type='text'
            text='Введите название папку'
            name='dirName'
          />
          <PopupCreateBtn onClick={createHandler}>Создать</PopupCreateBtn>
        </PopupContent>
      </PopupWrapper>
    )
  );
};

export default Popup;
