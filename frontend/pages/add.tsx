import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
// import { BiPlus } from "react-icons/bi";
import CategorySelect from "@/components/UI/Category";
import { Accept } from "react-dropzone";
import { BiPlus } from "react-icons/bi";

interface Props {
  maxFiles: number;
}

const acceptedFileTypes: Accept = {
  "image/png": ["png"],
  "image/jpeg": ["jpeg", "jpg"],
  "image/gif": ["gif"],
};

const ImageWrapper = ({ file }: { file: File }) => {
  const imageUrl = URL.createObjectURL(file);
  return (
    <Box
      sx={{
        width: 125,
        height: 125,
        borderRadius: 3,
        overflow: "hidden",
        margin:0.5,
        boxShadow:3
      }}
    >
      <img
        src={imageUrl}
        alt={file.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

const Add: React.FC<Props> = ({ maxFiles = 10 }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles])
    }
    
  const onCancel = () => {
    setFiles([]);
    setUploading(false);
  };

  const onSubmit = async () => {
    setUploading(true);
    try {
      // отправляем файлы на сервер
      // await uploadFiles(files);
      // очищаем список файлов
      setFiles([]);
    } catch (error) {
      console.error(error);
    }
    setUploading(false);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
  useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'text/html': ['.html', '.htm'],
    },
  });

  return (
    <Box sx={{ maxWidth: 435, margin: "auto",p:2}}>
      <Typography variant="h6" color="black" sx={{ mb: 1 }}>
        Фотографии ({files.length}/{maxFiles})
      </Typography>
      <Box display='flex'>

      <Box
        {...getRootProps()}
        sx={{
          border: "1px solid lightgrey",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          color: "black",
          width:"270px",
          height: "270px",
          margin:"5px"
        }}
      >
        <input {...getInputProps()} />
        {isDragActive && !isDragReject ? 
        <>
        <p>Перетащите файл сюда</p><BiPlus className="block m-auto text-6xl"/>
        </>
          : 
          <><p>Перетащите изображение сюда или нажмите, чтобы выбрать файл </p><BiPlus className="block m-auto text-6xl"/></>
          }
        {isDragReject && <p>Возможно файл не является изображением</p>
         }
      </Box>
      {files.length &&
      <ImageWrapper key={files[0]?.name} file={files[0]} />
      }

      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2  }}>
        {files.filter((obj,id) => id > 0)
        .map((file) => <ImageWrapper key={file.name} file={file} />
          
        
          
        )}
      </Box>
      <Box sx={{  mt: 2}}>

        <CategorySelect 
        label="Выберите категорию"
        categories={[]} 
        selectedCategory={""} 
        onCategoryChange={function (category: string): void {
          throw new Error("Function not implemented.");
        } } />
        <CategorySelect 
        label="Выберите подкатегорию"
        categories={[]} 
        selectedCategory={""} 
        onCategoryChange={function (category: string): void {
          throw new Error("Function not implemented.");
        } } />

        <TextField
          label="Наименование"
          variant="outlined"
          fullWidth
          
        />
         <TextField
          name="description"
          label="Описание"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          // value={formData.description}
          // onChange={handleChange}
        />
        <TextField
          label="Цена"
          variant="outlined"
          fullWidth
          margin="dense"
          type="number"
        />

      </Box>
      <Box sx={{ mt: 2 }}>
        {uploading ? (
          <CircularProgress />
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-400"
              onClick={onSubmit}
              disabled={files.length === 0}
              sx={{ mr: 1 }}
            >
              Загрузить
            </Button>
            <Button variant="outlined" onClick={onCancel}>
              Отмена
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Add;


