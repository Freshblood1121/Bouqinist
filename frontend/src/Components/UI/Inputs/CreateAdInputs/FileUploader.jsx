import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
  styled,
  Button,
} from "@mui/material";
import { palette } from "../../../../Utils/Constants";
import { useDropzone } from "react-dropzone";
import { Trash, Camera } from "@phosphor-icons/react";

const theme = createTheme({
  components: {
    MuiIconButton: {
      defaultProps: {
        // disableElevation: true,
        // disableRipple: true,
        // disableTouchRipple: true,
        // disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          boxShadow: "none",
          borderRadius: "0",
          [`&:hover`]: {
            boxShadow: "none",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          [`& .active`]: {
            boxShadow: "none",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          [`&:focused`]: {
            boxShadow: "none",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
});

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  marginTop: "20px",
  display: "inline-flex",
  borderRadius: 10,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 150,
  padding: 4,
  boxSizing: "border-box",
  position: "relative",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  // overflow: "hidden",
};

const img = {
  display: "block",
  width: "100%",
  height: "100%",
};

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  borderWidth: 2,
  borderRadius: "10px",
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: `${palette.gray300}`,
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const requiredWidth = 400;
const requiredHeight = 600;

function validateDimensions(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const { width, height } = img;

      if (width <= requiredWidth && height <= requiredHeight) {
        resolve();
      } else {
        reject(
          `Разрешение изображения должно быть не более ${requiredWidth}x${requiredHeight}px.`
        );
      }
    };

    img.onerror = () => {
      reject("Некорректный файл изображения");
    };
  });
}

const FileUploader = ({ ...props }) => {
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [".webp"],
    },
    multiple: true,
    // maxFiles: 5,
    onDrop: (acceptedFiles) => {
      Promise.all(acceptedFiles.map(validateDimensions))
        .then(() => {
          console.log(acceptedFiles);
          handleDrop(acceptedFiles, []);
        })
        .catch((errors) => {
          console.log(errors);
          props.formik.setFieldError("images", errors);
        });
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const [files, setFiles] = useState([]);

  console.log(files);

  function handleDrop(acceptedFiles) {
    console.log(acceptedFiles);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    props.formik.setFieldValue("images", acceptedFiles);
    // Добавить обработку отклоненных файлов
  }

  const thumbs = files.map((file, index) => {
    return (
      <div style={thumb} key={index}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            // Revoke data uri after image is loaded
            // onLoad={() => {
            //   URL.revokeObjectURL(file.preview);
            // }}
          />
          <IconButton
            aria-label="delete-image"
            size="small"
            sx={{
              height: "max-content",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onClick={() => handleClearUpload(index)}
          >
            <Trash color={palette.warning} />
          </IconButton>
        </div>
      </div>
    );
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const handleClearUpload = (index) => {
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
    props.formik.setFieldValue("images", [
      ...files.slice(0, index),
      ...files.slice(index + 1),
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <label
        htmlFor="upload"
        style={{ color: `${palette.active}`, cursor: "pointer" }}
      >
        {props.text}
      </label>
      <Box
        className="container"
        sx={{ position: "relative", marginTop: "20px" }}
      >
        <div {...getRootProps({ style })}>
          <input
            {...getInputProps()}
            id={props.id}
            name={props.name}
            onBlur={props.handleBlur}
          />
          <Button
            size="small"
            onClick={open}
            id="upload"
            sx={{
              width: "0.1px",
              height: "0.1px",
              opacity: "0",
              position: "absolute",
              zIndex: "-10",
            }}
          />
          <Camera size={48} color="#676767" />
        </div>
        {files.length > 0 && <Box display={"flex"}>{thumbs}</Box>}
      </Box>
    </ThemeProvider>
  );
};

export default FileUploader;
