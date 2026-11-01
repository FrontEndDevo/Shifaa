"use client";

// Next Components:
import Image from "next/image";

// React Dropzone Package:
import { useDropzone } from "react-dropzone";

// Next Intl:
import { useTranslations } from "next-intl";

// Utilitis:
import { convertFileToUrl } from "@/lib/utils";

interface IFileUploaderProps {
  files?: File[] | null;
  onChange: (files: File[]) => void;
}

const FileUploader = ({ files, onChange }: IFileUploaderProps) => {
  const t = useTranslations("FileUploader");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt={t("uploadedAlt")}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image src="/assets/icons/upload.svg" width={40} height={40} alt="" />
          <div className="file-upload_label">
            <p className="text-14-regular">
              {t.rich("prompt", {
                link: (chunks) => (
                  <span className="text-green-500">{chunks}</span>
                ),
              })}
            </p>
            <p className="text-12-regular">{t("hint")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
