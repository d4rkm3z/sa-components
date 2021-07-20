/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import UploadArea from "./UploadArea";

export default {
  title: "Upload Area/Upload Area",
  component: UploadArea,
};

const Template = (args) => <UploadArea {...args} />;

export const ExcelCSV300Mb = Template.bind({});
ExcelCSV300Mb.args = {
  acceptTypes: [".csv", ".xls"],
  maxSizeOfFileInBytes: 314572800,
};

export const WordPng100Mb = Template.bind({});
WordPng100Mb.args = {
  acceptTypes: [".doc", ".png"],
  maxSizeOfFileInBytes: 104857600,
};
