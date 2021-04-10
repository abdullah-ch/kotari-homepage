import React from "react";

const StackOverflow = () => {
  const res = {
    chartData: [
      {
        date: 0,
        amount: 0,
        count: 0,
      },
    ],
    topSupporters: [
      {
        name: "string",
        amount: 0,
      },
    ],
    imagesData: [
      {
        publicId: "9",
        url:
          "https://i.picsum.photos/id/398/200/300.jpg?hmac=Hfi27DwRf-atKwN-O57cBXGhlUtMCe6rozr2rWH8xH8",
        isThumbnail: true,
      },
      {
        publicId: "67",
        url:
          "https://i.picsum.photos/id/220/200/300.jpg?hmac=XQWeukbBSi6WSlgZllfOJjG8AQQXS9dYI8IqvKpE1ss",
        isThumbnail: true,
      },
      {
        publicId: "23",
        url:
          "https://i.picsum.photos/id/273/200/300.jpg?hmac=C0IK2DPqr03oiShSklDGIHBzHorcmVrky7A_uvBEzIM",
        isThumbnail: true,
      },
      {
        publicId: "12",
        url:
          "https://i.picsum.photos/id/825/200/300.jpg?hmac=02AaqBOvx8gwrGt7a3HWzJHnZXrMzYoXbAYwjJWH40E",
        isThumbnail: true,
      },
    ],
  };

  return (
    <div className="App">
      {!!res &&
        res.imagesData.map((data) => {
          return <ImageComponent key={data.publicId} {...data} />;
        })}
    </div>
  );
};

const ImageComponent = ({ url }) => {
  return (
    <div>
      <img src={url} alt="pic" />
    </div>
  );
};

export default StackOverflow;
