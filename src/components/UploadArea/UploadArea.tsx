import React, { ChangeEvent, useRef, useState } from "react";
import classNames from "classnames";
import Loader from "./Loader/Loader";
import { delay } from "./UploadFunction";

import classes from "./UploadArea.module.scss";

interface IUploadAreaProps {
  acceptTypes: string[];
  maxSizeOfFileInBytes: number;
}

function UploadArea({ acceptTypes, maxSizeOfFileInBytes }: IUploadAreaProps) {
  const triggeredInput = useRef<HTMLInputElement>(null);
  const [onDrag, setOnDrag] = useState(false);
  const [size, setSize] = useState(false);
  const [download, setDownload] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);

  const options = {
    multiple: false,
    accept: acceptTypes.join(","),
  };

  // function typeCheck(elem: string) {
  //   const types = acceptTypes
  //   types.forEach((el) => {
  //     return elem === el
  //   })
  //   //   return valid
  //   // проверяем соответствует ли текущий элемент значению 30
  // }

  // acceptTypes.some(typeCheck)

  const typeCheck = (fileName: string) => {
    const types = acceptTypes;
    let valid = false;
    types.forEach((elem) => {
      if (valid) return valid;
      valid = fileName.includes(elem);
    });
    return valid;
  };

  async function fetchFiles() {
    console.log("Start uploading...");

    await delay(4000);
    setDownload(true);

    console.log("Done! File uploaded");
  }

  const clearState = () => {
    setOnDrag(false);
    setSize(false);
    setDownload(false);
    setUploading(false);
    setFileName("");
    setFileSize(0);
  };
  // ф-я триггер для кастомной кнопки, при клике на нее срабатывает ф-я у input
  const openTrigger = () => triggeredInput.current?.click();

  // пользователь через input выбирает файл, срабатывает данная функция
  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target?.files?.length) {
      if (target.files[0].size < maxSizeOfFileInBytes) {
        setUploading(true);
        setFileName(target.files[0].name);
        setFileSize(Math.round(target.files[0].size / 1048576));
        setSize(false);
        fetchFiles();
      } else {
        setSize(true);
      }
    }
  };

  // Две функции, которые обрабатывают события наведения на область загрузки и выхода из нее
  // onDrag отвечает за поведение фона при drag and drop, затемняя его при наведении

  const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDrag(true);
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDrag(false);
  };

  // Обработка drag & drop после того, как пользователь отпустил файл области
  // setSize - отвечает за отрисовку области загрузки при проверке файла на его размер
  // setDownload - перерисовка компонента при удачной загрузке файла
  // setFileName - состояние, в котором хранится имя текущего файла, отображается при загрузке и успешном добавлении файла
  // setFileSize - состоние, в котором хранится размер текущего файла, отображается при загрузке и успешном добавлении файла
  // UploadFunction() - обособленная функция, которая делает запрос на сервер и отвечает за отрисовку компонента в момент загрузки файла

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    let files = [...e.dataTransfer.files];
    if (
      files[0].size < maxSizeOfFileInBytes &&
      typeCheck(files[0].name) &&
      files.length === 1
    ) {
      setSize(false);
      setUploading(true);
      setFileSize(Math.round(files[0].size / 1048576));
      setFileName(files[0].name);

      fetchFiles();

      const formData = new FormData();
      formData.append("file", files[0]);
    } else {
      setSize(true);
    }

    setOnDrag(false);
  };

  return (
    <>
      {download ? (
        <div className={classes.container}>
          <div className={classes.file_info}>
            <div>
              <p className={classes.file_name}>{fileName}</p>
              <p className={classes.file_size}>{fileSize} Мб</p>
            </div>
            <button
              className={classes.deleteFile}
              onClick={clearState}
            ></button>
          </div>
          <div className={classes.status}>
            <p className={classes.status_text}>Файл успешно загружен</p>
          </div>
        </div>
      ) : uploading ? (
        <div className={classes.container}>
          <div className={classes.uploading_file_info}>
            <div className={classes.uploading_file_container}>
              <Loader />
              <div>
                <p className={classes.file_name}>{fileName}</p>
                <p className={classes.file_size}>{fileSize} Мб</p>
              </div>
            </div>

            <button
              className={classes.deleteFile}
              onClick={clearState}
            ></button>
          </div>
          <div className={classes.uploading_status}>
            <p className={classes.status_text}>Файл загружается...</p>
          </div>
        </div>
      ) : (
        <div
          className={classNames(
            size ? classes.sizeProblems : null,
            onDrag ? classes.onDrag : null,
            classes.UploadArea
          )}
          onDragStart={(e) => onDragStartHandler(e)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragOver={(e) => onDragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          <p className={classes.text}>
            Загрузите файл простым переносом или нажмите для выбора файла
          </p>
          <input
            className={classes.input}
            type="file"
            ref={triggeredInput}
            onChange={changeHandler}
            {...options}
          ></input>
          <button className={classes.btn} onClick={openTrigger}>
            Выбрать файл
          </button>
          {size ? (
            <p className={classes.sizeWarning}>
              Размер файла не должен превышать{" "}
              {`${maxSizeOfFileInBytes / 1048576} `}
              Мб, а доступные расширения -{` ${options.accept}`}. Выберите
              другой файл и повторите загрузку
            </p>
          ) : null}
        </div>
      )}
    </>
  );
}

export default UploadArea;
