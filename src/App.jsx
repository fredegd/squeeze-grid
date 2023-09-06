import { useState, useEffect } from "react";
import "./App.css";

// Import your image
import sourceImage from "../src/assets/sonia-nadales-NCPlsNHBXqA-unsplash.jpeg";

function App() {
  // Define state to track whether the mouse is hovering
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = (e) => {
    // setTimeout(!isHovered && , 100);
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (e) => {
    // setTimeout(, 100);
    isHovered && setIsHovered(false);
  };

  const numRows = 11;
  const numCols = 13;
  const maxScale = 1.0;
  let mouseX = 4000;
  let mouseY = 0;

  useEffect(() => {
    const container = document.getElementById("container");

    container.style.setProperty("--num-rows", numRows);
    container.style.setProperty("--num-cols", numCols);
    container.style.setProperty(
      "grid-template-columns",
      `repeat(${numCols},1fr )`
    );
    container.style.setProperty(
      "grid-template-rows",
      `repeat(${numRows},1fr )`
    );

    // Create the squares
    const createSquare = () => {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
      return square;
    };

    const squares = Array.from({ length: numRows * numCols }, createSquare);

    // Load the image
    const image = new Image();
    image.src = sourceImage; // Set the source of your image

    // Once the image is loaded, set it as the background image for each square
    image.onload = () => {
      squares.forEach((square) => {
        square.style.backgroundImage = `url(${sourceImage})`;
      });
    };


    function handleMouseMove(e) {
      const containerRect = container.getBoundingClientRect();
      const tileWidth = containerRect.width / numCols;
      const tileHeight = containerRect.height / numRows;
      mouseX = e.clientX - containerRect.width * 0.5 - tileWidth * 0.5;
      mouseY = e.clientY - containerRect.height * 0.5 - tileHeight * 0.5;

      squares.forEach((square, index) => {
        const row = Math.floor(index / numCols);
        const col = index % numCols;
        const xt = map(
          col,
          0,
          numCols,
          -containerRect.width / 2,
          containerRect.width / 2
        );
        const yt = map(
          row,
          0,
          numRows,
          -containerRect.height / 2,
          containerRect.height / 2
        );
        const distance = Math.sqrt((mouseX - xt) ** 2 + (mouseY - yt) ** 2);
        const multiplier = Math.min(
          maxScale,
          maxScale *
            Math.abs(
              map(distance, 0, containerRect.width / 2, 3 / Math.sqrt(2), 0)
            )
        );

        square.style.width = `${tileWidth * multiplier}px`;
        square.style.height = `${tileHeight * multiplier}px`;
        square.style.opacity = `${map(
          distance,
          0,
          containerRect.width / 2,
          1.5,
          0.1
        )}`;

        // Calculate background position based on the square's position
        const bgX = containerRect.width / 2 - xt;
        const bgY = containerRect.height / 2 - yt;
        square.style.backgroundPosition = `${bgX}px ${bgY}px`;
        square.style.backgroundSize = `${containerRect.width * multiplier}px ${
          containerRect.height * multiplier
        }px`;
        square.style.transform = `translate(${
          (-tileWidth / 2) * multiplier + tileWidth / 2
        }px, ${(-tileHeight / 2) * multiplier + tileHeight / 2}px)`;
      });
    }

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.innerHTML = "";
    };
  }, []);

  function map(value, fromLow, fromHigh, toLow, toHigh) {
    return (
      ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow
    );
  }

const textStyle = { zIndex: "10", color: "#fff", backgroundColor:"#444", mixBlendMode: "difference" }
  return (
    <div className="big-container">
      <div className="intro">
        <h1 style={textStyle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat asperiores, sunt id architecto facilis dolorem aliquid ullam
          eligendi saepe quisquam maiores rem dolorum, magni omnis natus
          repudiandae. Dolorum, officiis!
        </h1>
        
          <quote style={textStyle}>paragraph</quote>
        
        <p style={textStyle}>
          This is a short text description above the grid. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, natus facilis perferendis
          incidunt sint quisquam vitae porro pariatur error cupiditate sunt
          culpa consequuntur numquam, earum quaerat ex impedit minus omnis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus
          facilis perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis!
        </p>
        <h1 style={textStyle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat asperiores, sunt id architecto facilis dolorem aliquid ullam
          eligendi saepe quisquam maiores rem dolorum, magni omnis natus
          repudiandae. Dolorum, officiis!
        </h1>
        <p style={textStyle}>
          This is a short text description above the grid. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, natus facilis perferendis
          incidunt sint quisquam vitae porro pariatur error cupiditate sunt
          culpa consequuntur numquam, earum quaerat ex impedit minus omnis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus
          facilis perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis!
        </p>
        <p style={textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus
          facilis perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos, natus facilis perferendis incidunt sint quisquam vitae porro
          pariatur error cupiditate sunt culpa consequuntur numquam, earum
          quaerat ex impedit minus omnis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, natus facilis perferendis incidunt sint
          quisquam vitae porro pariatur error cupiditate sunt culpa consequuntur
          numquam, earum quaerat ex impedit minus omnis! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, natus facilis perferendis
          incidunt sint quisquam vitae porro pariatur error cupiditate sunt
          culpa consequuntur numquam, earum quaerat ex impedit minus omnis!
          Lorem ipsum cupiditate sunt culpa consequuntur numquam, earum quaerat
          ex impedit minus omnis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, natus facilis perferendis incidunt sint
          quisquam vitae porro pariatur error cupiditate sunt culpa consequuntur
          numquam, earum quaerat ex impedit minus omnis! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, natus facilis perferendis
          incidunt sint quisquam vitae porro pariatur error cupiditate sunt
          culpa consequuntur numquam, earum quaerat ex impedit minus omnis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus
          facilis perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis! Lorem ipsum cupiditate sunt culpa consequuntur numquam,
          earum quaerat ex impedit minus omnis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos, natus facilis perferendis incidunt
          sint quisquam vitae porro pariatur error cupiditate sunt culpa
          consequuntur numquam, earum quaerat ex impedit minus omnis! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quos, natus facilis
          perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos, natus facilis perferendis incidunt sint quisquam vitae porro
          pariatur error cupiditate sunt culpa consequuntur numquam, earum
          quaerat ex impedit minus omnis! Lorem ipsum cupiditate sunt culpa
          consequuntur numquam, earum quaerat ex impedit minus omnis! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quos, natus facilis
          perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos, natus facilis perferendis incidunt sint quisquam vitae porro
          pariatur error cupiditate sunt culpa consequuntur numquam, earum
          quaerat ex impedit minus omnis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, natus facilis perferendis incidunt sint
          quisquam vitae porro pariatur error cupiditate sunt culpa consequuntur
          numquam, earum quaerat ex impedit minus omnis! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, natus facilis perferendis
          incidunt sint quisquam vitae porro pariatur error cupiditate sunt
          culpa consequuntur numquam, earum quaerat ex impedit minus omnis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus
          facilis perferendis incidunt sint quisquam vitae porro pariatur error
          cupiditate sunt culpa consequuntur numquam, earum quaerat ex impedit
          minus omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos, natus facilis perferendis incidunt sint quisquam vitae porro
          pariatur error cupiditate sunt culpa consequuntur numquam, earum
          quaerat ex impedit minus omnis!
        </p>
      </div>

      <div className="container" id="container"></div>
    </div>
  );
}

export default App;
