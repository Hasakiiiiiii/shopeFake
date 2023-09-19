import React from "react";
import "./Detail.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
  useParams,
  
} from "react-router-dom";
import { listItem } from "./main";
function Detail() {
  let { productId } = useParams();
  let detailItem = {};
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].id == productId) {
      detailItem = listItem[i];
    }
  }
  if (!detailItem) {
    
    return null;
  }

 
  return (
    <div id="wrap">
      <div className="main">
        <div id="item">
          <div id="img">
            <img className="banner" src={detailItem.imgDetail} />
            <div className="subBannerW">
              <img className="sub-banner" src={detailItem.subBanner} />
              <img className="sub-banner" src={detailItem.subBanner1} />
              <img className="sub-banner" src={detailItem.subBanner2} />
              <img className="sub-banner" src={detailItem.subBanner3} />
            </div>
          </div>
          <div className="detail">
            <div className="nameW">
              <p className="detail-name">{detailItem.detailName}</p>
            </div>
            <div className="rate">
              <span className="rate1">
                {detailItem.rate}
                <span className="ti-star"></span>
                <span className="ti-star"></span>
                <span className="ti-star"></span>
                <span className="ti-star"></span>
                <span className="ti-star"></span>
              </span>
              <span className="rate2">{detailItem.evalue}</span>
              <span className="rate3">{detailItem.sale}</span>
            </div>
            <div className="priceW">
              <p className="old-price">{detailItem.prevSale} </p>
              <p className="current-price">{detailItem.priceDetail}</p>
            </div>
            <div className="transferW">
              <div className="npm">
                <p className="trans">Vận chuyển</p>
              </div>
              <div className="abc">
                <div className="textWd">
                  <img
                    className="freeship"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                  />
                  <p className="deli"> Miễn phí vận chyển</p>
                </div>
                <div className="bcd">
                  <span className="ti-truck"></span>
                  <p className="deli">Vận chuyển tới</p>
                  <p className="">Huyện Ba Vì</p>
                  <span className="ti-angle-down"></span>
                </div>
                <div className="nvm">
                  <p className="deli">Phí vận chuyển</p>
                  <p className="">đ 0</p>
                  <span className="ti-angle-down"></span>
                </div>
              </div>
            </div>
            <div className="npm1">
              <div className="npm">
                <p className="trans">{detailItem.typeName}</p>
              </div>
              <div className="abc1">
                {detailItem.types.map(item => (
                  <button className="btn-select"><p>{item}</p></button>
                ))}
                
              </div>
            </div>
            <div className="npm2">
              <div className="npm">
                <p className="trans">Số lượng</p>
              </div>
              <div className="upW">
                <button className="up">-</button>
                <input type="text" className="input" value={1} />
                <button className="up">+</button>
              </div>
              <div>
                <p className="deli">{detailItem.available}</p>
              </div>
            </div>
            <div className="npm3">
              <div className="add-cartW">
                <Link to="/add" className="link-to-add">
                  <button className="add-cart">
                    <span className="ti-shopping-cart"></span>
                    <p className="add-t">Thêm vào giỏ hàng</p>
                  </button>
                </Link>
              </div>
              <div className="buyW">
                <button className="buy">
                  <p className="buy-t">Mua Ngay</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export {listItem};

export default Detail;
