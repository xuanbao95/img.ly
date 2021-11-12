import React, { useEffect, useRef } from "react"
import CreativeEditorSDK from '@cesdk/cesdk-js';

function DemoComponent(props) {
  const cesdk_container = useRef(null);
  let config = {
    baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.1.1/assets',
    locale: 'en', // 'de'
    theme: 'dark', // 'light'
    role: 'Creator', // 'Adopter' 'Viewer'
    initialScene: '',// A scene string,
    callbacks: {
      log: (message, logLevel) => {
        switch (logLevel) {
          case "Info":
            console.info(message)
            break
          case "Warning":
            console.warn(message)
            break
          case "Error":
            console.error(message)
            break
          default:
            console.log(message);
        }
      },
      onUnsupportedBrowser: () => {
        window.alert('Browser is not supported!');
      },
      onBack: () => {
        window.alert('Back callback!');
      },
      onClose: () => {
        window.alert('Close callback!');
      },
      onSave: (scene) => {
        window.alert('Save callback!');
        console.info(scene);
        // const savedSceneString = await cesdk.save();
        // return Promise.resolve(savedSceneString)

      },
      onLoad: () => {
        window.alert('Load callback!');
        let scene = '...'; // Fill with sene
        return Promise.resolve(scene);
      },
      onExport: (blobs, options) => {
        window.alert('Export callback!');
        console.info(options.mimeType)
        console.info(options.quality)
        console.info(options.pages)
        return Promise.resolve();
      },
      onUpload: (file, onProgress) => {
        window.alert('Upload callback!');
        let newImage = {
          id: 'exampleImageIdentifier',
          uri: 'https://YOURSERVER/images/file.jpg',
          thumbUri: 'https://YOURSERVER/images/thumb.jpg',
        }
        return Promise.resolve(newImage);
      }
    },
    ui: {
      elements: {
        navigation: {
          action: {
            close: true,
            back: true,
            save: true,
            load: true,
            export: true,
          }
        }
      }
    },
    layout: 'advanced',
  }
  useEffect(() => {
    if (cesdk_container.current) {
      CreativeEditorSDK.init(cesdk_container.current, config).then(
        (instance) => {
          /** do something with the instance of CreativeEditor SDK **/
        }
      );
    }
  }, [props, cesdk_container]);
  return (
    <div
      ref={cesdk_container}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  )
}
export default DemoComponent;