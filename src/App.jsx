import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LazyImage, { init, destroy } from "./LazyImage";
import { generateImage } from "./data";
const imageStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "10px",
};
let defaultLogo =
  "https://images.unsplash.com/photo-1506184515391-333e5afa6927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";
function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function asyncData() {
      const data = await generateImage();
      setImages(data);
    }
    asyncData();
    init();
    return () => destroy();
  }, []);

  return (
    <div className="App">
      {images.map((item, index) => (
        <LazyImage
          key={index}
          src={item.image}
          alt="images"
          style={imageStyle}
          defaultSrc={defaultLogo}
        />
      ))}
    </div>
  );
}

export default App;
