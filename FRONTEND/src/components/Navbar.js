import React, { useState } from "react";
import background from '../assets/Images/home/Background.jpg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiLocationOn, CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import logo1 from "../assets/Images/Icon/logo1.svg";
import logo2 from "../assets/Images/Icon/logo2.svg";




let Navbar = () => {
    let slides = ["Miễn phí giao hàng tiêu chuẩn các đơn hàng từ 2.500.000đ", "Khuyến mãi Chào Hè-Giảm 10% cho hóa đơn từ 3 triệu - 15% cho hóa đơn từ 15 triệu"];
    let [cur, setCur] = useState(0);

    let prev = () => {
        setCur((cur) => (cur === 0 ? slides.length - 1 : cur - 1))
    }

    let next = () => {
        setCur((cur) => (cur === slides.length - 1 ? 0 : cur + 1))
    }

    let [isHover, setHover] = useState(false);
    
    let handleMouseEnter = () => {
        setHover(true);
    }

    let handleMouseLeave = () => {
        setHover(false);
    }

    return (
        <div className="uk-container uk-container-1510">
            <div className="navbar-header">
                <ul className="uk-flex uk-flex-between uk-flex-center">
                    <button onClick={prev}>
                        <FiChevronLeft className="uk-positon-absolute" />
                    </button>
                    <li>
                        {slides[cur]}
                    </li>
                    <button onClick={next}>
                        <FiChevronRight className="" />
                    </button>
                </ul>
            </div>
            <div className={`navbar-body ${isHover ? 'hover' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ul className={`navbar-body-content ${isHover ? 'color' : ''}`} >
                    <li>
                        <img src={logo1} style={{height:'19px'}}></img>
                        <img src={logo2} style={{height:'25px', padding:'0 15px'}}></img>
                    </li>
                    <li>
                        <div className="navbar-input-sum">
                            <button>
                                <CiSearch />
                            </button>
                            <input className={`navbar-input ${isHover ? 'color' : ''}`}
                                type="text"
                                placeholder="Tìm kiếm sản phẩm" />
                        </div>

                    </li>
                    <li>
                        <div className="navbar-icon">
                            <li>VN</li>
                            <li><CiLocationOn /></li>
                            <li><CiUser /></li>
                            <li><CiHeart /></li>
                            <li><IoBagOutline /></li>
                        </div>
                    </li>
                </ul>
            </div>
            <img className="navbar-background img-scaledown" src={background} alt="background"></img>

        </div>
    )
}
export default Navbar;
