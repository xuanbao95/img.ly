import React from "react"
import { UIEvent, PhotoEditorSDKUI } from "photoeditorsdk";
import MyProvider from "./Libary"

export default class DemoPhotoSDK extends React.Component {
  componentDidMount() {
    this.initEditor();
  }
  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: "#editor",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/SirmioneCastle.jpg", // Image url or Image path relative to assets folder
      license: "",
      assetBaseUrl: 'assets',
      assetResolver: {
        item: () => null,
        path: () => null,
      },
      library: {
        provider: MyProvider,
        enableUpload: true,
        flattenCategories: true,
      },
      sticker: {
        categories: [
         

        ],
        flattenCategories: true,
        
      },
      frame: {
        colors: [
          {
            // color is represented as a number array which encodes
            // as a RGBA tuple of floating point values where
            // each channel is defined in the range of `[0, 1]
            color: [1.00, 1.00, 1.00, 1],
            // name must be unique
            name: "white",
          },
          { color: [0.49, 0.49, 0.49, 1], name: "gray" },
          { color: [0.00, 0.00, 0.00, 1], name: "black" },
          { color: [0.40, 0.80, 1.00, 1], name: "light blue" },
          { color: [0.40, 0.53, 1.00, 1], name: "blue" },
          { color: [0.53, 0.40, 1.00, 1], name: "purple" },
          { color: [0.87, 0.40, 1.00, 1], name: "orchid" },
          { color: [1.00, 0.40, 0.80, 1], name: "pink" },
          { color: [0.90, 0.31, 0.31, 1], name: "red" },
          { color: [0.95, 0.53, 0.33, 1], name: "orange" },
          { color: [1.00, 0.80, 0.40, 1], name: "gold" },
          { color: [1.00, 0.97, 0.39, 1], name: "yellow" },
          { color: [0.80, 1.00, 0.40, 1], name: "olive" },
          { color: [0.33, 1.00, 0.53, 1], name: "green" },
          { color: [0.33, 1.00, 0.92, 1], name: "aquamarin" },
        ]
      },
    });
    console.log("PhotoEditorSDK for Web is ready!");
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log("Exported ", imageSrc);
    });
  }


  render() {
    return (
      <div
        id="editor"
        style={{width: "100vw", height: "100vh" }}
      />
    );
  }
}
