import React from "react";
import "./Add.css";
import { Link } from "react-router-dom";
import { listItem } from "./main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






let newData = [];

function Add() {
  const navigate = useNavigate();
  const [data, setData] = useState(listItem);
  const [newProduct, setNewProduct] = useState(
    {

      id: data.length + 1,
      name: "",
      price: "",
      available: "",
      sale: "",
      prevSale: "",
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljdld7ik5wr0e7_tn",
      rate: "4.7",
      discountPercent: "52% Giảm",
      codeDiscount: "Giảm 100K",
      deal: "Mua kèm deal sốc",
      transport: "Vận chuyển miễn phí",
      quantity: "1",
      addCart: "Thêm vào giỏ hàng",
      typeName: "tai nghe",
      types: ["M10 PRO ĐEN", "M10 PRO XANH", "F9 PRO ĐEN", "F9 PRO TRẮNG", "S6 ĐEN", "M100 ĐEN"],
      buy: "Mua Ngay",
      detailName:
        "Tai Nghe Bluetooth M10 Pro Tai Nghe Không M10 Pro Phiên Bản Nâng Cấp Pin Trâu, Nút Cảm Ứng Tự Động Kết Nối - BINTECH",
      subBanner:
        "https://down-vn.img.susercontent.com/file/3707054f82e636c896458869737cc914",
      subBanner1:
        "https://down-vn.img.susercontent.com/file/258a70fcf19dfdda66305d3112b483fa",
      subBanner2:
        "https://down-vn.img.susercontent.com/file/b1d8436246725815b11d62f245af0250",
      subBanner3:
        "https://down-vn.img.susercontent.com/file/39732acae4f65eeb884464097dc86ff6",
        imgDetail:
        "https://down-vn.img.susercontent.com/file/7ad85bf6e3b20f1fe934b81445670140",
      priceDetail: "₫25.000 - ₫63.900"
    }
  );
  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value

    })
  }
  const handleAdd = () => {
     newData = [...data,newProduct];
    setData(newData);
    setNewProduct({
      id: newProduct.id + 1,
      name: "",
      price: "",
      available: "",
      sale: "",
      prevSale: "",
    })
    
    navigate('/')
    

  };


  return (
    <div className="main-add" >
      <div>
        <h1 className="h1">Thông tin cơ bản</h1>
      </div>
      <div className="firt">
        <p className="img-item">Hình ảnh sản phẩm</p>
        <p>
          <span className="star">*</span>Hình ảnh tỉ lệ 1:1
        </p>
      </div>
      <div className="file">
        <a href="https://down-vn.img.susercontent.com/file/7ad85bf6e3b20f1fe934b81445670140" className="choose-file">Link to image</a>
      </div>
      <div className="firt">
        <p className="img-item">Video sản phẩm</p>
        <div className="file1">
          <a href="https://down-vn.img.susercontent.com/file/7ad85bf6e3b20f1fe934b81445670140" className="choose-file">Link to video</a>
        </div>
      </div>
      <div className="name-authorW">
        <p className="img-item"><span className="star">*</span>Tên sản phẩm</p>
        <input type="text" className="add-text-name1" placeholder="Nhập vào" name="name" value={newProduct.name} onChange={handleInputChange} />
      </div>
      <div className="name-authorW">
        <p className="img-item"><span className="star">*</span>Giá</p>
        <input type="text" className="add-text-name1" placeholder="Nhập giá" name="price" value={newProduct.price} onChange={handleInputChange} />
      </div>
      <div className="name-authorW">
        <p className="img-item"><span className="star">*</span>Sản phẩm có sẵn</p>
        <input type="text" className="add-text-name1" placeholder="Nhập " name="available" value={newProduct.available} onChange={handleInputChange} />
      </div>
      <div className="name-authorW">
        <p className="img-item"><span className="star">*</span>Đã bán</p>
        <input type="text" className="add-text-name1" placeholder="Nhập" name="sale" value={newProduct.sale} onChange={handleInputChange} />
      </div>
      <div className="name-authorW">
        <p className="img-item"><span className="star">*</span>Giá trước đó</p>
        <input
          type="text"
          className="add-text-name1"
          placeholder="Nhập giá"
          name="prevSale"
          value={newProduct.prevSale}
          onChange={handleInputChange} />
      </div>


      <div className="add-to-cartW" >
        <button className="add-btn" onClick={handleAdd} >
          <p className="buy-t">Add</p>

        </button>

      </div>

    </div>

  );
}
export {newData};
export default Add;
