import {Button} from 'antd';
import React, {useEffect, useState} from 'react';
import api from '../../../apis/FileUpload/fileUpload';

const SIZE = 10 * 1024 * 1024; // 切片大小

// 文件切片上传，存放到数组里
const createFileChunkArray = (file: any, size: number = SIZE): Array<any> => {
  const fileChunkList: Array<any> = [];
  let index: number = 0;
  while (index < file.size) {
    // 记得添加类型
    let chunk: any = file.slice(index, index + size, file.type);
    fileChunkList.push({file: chunk});
    index += size;
  }
  return fileChunkList;
}

// 上传组件
function FileUpload (props: any): React.ReactElement {

  const [fileChunkList, setFileChunkList] = useState<Array<any>>([]);
  const [fileName, setFileName] = useState<string>('');

  const getFile = async (e: any) => {
    const [file] = e.target.files;
    console.log(file);
    await setFileName(file.name)
    const res = createFileChunkArray(file).map((item, index) => {
      return {
        chunk: item,
        hash: index
      }
    });

    await setFileChunkList(res);
  }

  useEffect(() => {
    // 创建表单数据，并发送请求
    let arr = fileChunkList.map(({chunk, hash}) => {
      console.log('chunk', chunk.file);
      var formData = new FormData();
      formData.append("file", chunk.file, `${fileName}-${hash}.zip`);
      // formData.append("hash", hash);
      // formData.append("fileName", `${fileName}-${hash}`);
      api.upload(formData).then(res => {
        console.log("RES", res);
      }).catch(err => {
        console.log(err);
      });
      // return {formData};
    })
    // .map(async ({ formData }) => {
    //   console.log(formData);
    //   return formData;
    // });
  }, [fileChunkList]);

  return (
    <>
      <input type="file" name='files' id="first" placeholder="Search" onChange={getFile}/>
      <Button onClick={() => {}}>上传</Button>
      <Button onClick={() => {}}>暂停</Button>
    </>
  );
}

export default FileUpload;