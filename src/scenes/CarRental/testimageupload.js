import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { FaCloudUploadAlt, FaPlus } from "react-icons/fa";

const ImageUploader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [imageSrcArray, setImageSrcArray] = useState([null, null, null]);

  const handleDrop = (index, acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const updatedArray = [...imageSrcArray];
      updatedArray[index] = event.target.result;
      setImageSrcArray(updatedArray);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const imageDivStyles = {
    width: "10rem",
    height: "10rem",
  };

  const renderImageUploader = (index, isBig) => {
    const divStyles = {
      ...imageDivStyles,
      backgroundImage: `url(${imageSrcArray[index]})`,
      width: isBig ? "20rem" : "10rem",
      height: isBig ? "20rem" : "10rem",
    };

    return (
      <div key={index} className={`mx-auto ${isBig ? "w-[20rem]" : "w-[10rem]"} aspect-square`}>
        <Dropzone onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="w-full h-full rounded-full relative bg-white text-center flex items-center"
              style={divStyles}
            >
              <input {...getInputProps()} />
              {imageSrcArray[index] ? null : (
                <p className="text-black text-center w-full grid grid-flow-row">
                  <FaCloudUploadAlt size={30} className="mx-auto" />
                  <span className="italic">Drop or Tap to upload</span>
                </p>
              )}
              <FaPlus size={25} className="absolute bottom-3 right-2 text-slate-500" />
            </div>
          )}
        </Dropzone>
      </div>
    );
  };

  return (
    <form className="p-2 md:w-4/5 w-full mx-auto">
      <div className="flex space-x-4">
        {renderImageUploader(0, true)} {/* Render the first image as big */}
        <div className="flex flex-col space-y-4">
          {renderImageUploader(1, false)} {/* Render the second image as half */}
          {renderImageUploader(2, false)} {/* Render the third image as half */}
        </div>
      </div>
    </form>
  );
};

export default ImageUploader;
