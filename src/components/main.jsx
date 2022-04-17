import React from "react";
import Todo from "./todo";
import items from "./items";

const Main = () => {
  return (
    <div className="main">
      <div className="bg-overlay">
        <div className="lorem">
          <h1>Lorem Ipsum is simply dummy text</h1>
          <p>
            Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took a gallery of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
      <br />
      <div className="bg-overlay">
        <div className="lorem1">
          <h1>Lorem Ipsum is simply dummy text</h1>
          <p>
            Lorem Ipsum is simply dummy text of printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took a gallery of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
      <br />
      <div className="cart_heading">
        <h1>Shop Home Bars</h1>
        <p>Choose from a variety of different styles to suit to your home</p>
      </div>
      <div className="carts">
        {items.map((item) => {
          return (
            <div className="oneitem">
              <div>
                <img src={item.image} alt="" className="img1" />
              </div>
              <div className="cart_details">
                <p>
                  <del>{item.actualPrice}</del>
                </p>
                <p style={{ color: "#0072bc", fontSize: "30px" }}>
                  <b>{item.discountedPrice}</b>
                </p>
                <p>
                  <b>{item.name}</b>
                </p>
                <button type="button" className="button1">
                  BUY NOW {">"}{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />
      <div className="eyes">
        <div className="eye">
          <img
            src="https://www.teahub.io/photos/full/8-82904_awesome-wallpapers-hd-1080p-black-blue-wallpaper-hd.jpg"
            alt=""
            width={"100%"}
            height={"60%"}
          />
          <h2>Lorem Ipsum is simply dummy text</h2>
          <p>
            <b>
              Lorem Ipsum is simply dummy text of printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s,when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book
            </b>
          </p>
        </div>
        <div className="eye">
          <img
            src="https://www.teahub.io/photos/full/8-82904_awesome-wallpapers-hd-1080p-black-blue-wallpaper-hd.jpg"
            alt=""
            width={"100%"}
            height={"60%"}
          />
          <h2>Lorem Ipsum is simply dummy text</h2>
          <p>
            <b>
              Lorem Ipsum is simply dummy text of printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s,when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book
            </b>
          </p>
        </div>
      </div>
      <hr />
      <br />
      <div>
        <div className="image_text">
          <div className="image1">
            <img
              src="https://i.pinimg.com/originals/bb/79/b3/bb79b3bcb09df61f84514849715e1a02.jpg"
              alt=""
              width={"100%"}
              height={"80%"}
            />
          </div>
          <div className="text1">
            <h1>Lorem Ipsum is simply dummy text</h1>
            <p>
              <b>
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text
              </b>
            </p>
          </div>
        </div>
        <div className="image_text">
          <div className="text2">
            <h1>Lorem Ipsum is simply dummy text</h1>
            <p>
              <b>
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text
              </b>
            </p>
          </div>
          <div className="image2">
            <img
              src="https://i.pinimg.com/originals/bb/79/b3/bb79b3bcb09df61f84514849715e1a02.jpg"
              alt=""
              width={"100%"}
              height={"80%"}
            />
          </div>
        </div>
        <div className="image_text">
          <div className="image1">
            <img
              src="https://i.pinimg.com/originals/bb/79/b3/bb79b3bcb09df61f84514849715e1a02.jpg"
              alt=""
              width={"100%"}
              height={"80%"}
            />
          </div>
          <div className="text1">
            <h1>Lorem Ipsum is simply dummy text</h1>
            <p>
              <b>
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text
              </b>
            </p>
          </div>
        </div>
        <div className="image_text">
          <div className="text2">
            <h1>Lorem Ipsum is simply dummy text</h1>
            <p>
              <b>
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text
              </b>
            </p>
          </div>
          <div className="image2">
            <img
              src="https://i.pinimg.com/originals/bb/79/b3/bb79b3bcb09df61f84514849715e1a02.jpg"
              alt=""
              width={"100%"}
              height={"80%"}
            />
          </div>
        </div>
      </div>
      <hr />
      <br />
      <br />
      <br />
      <Todo />
    </div>
  );
};

export default Main;
