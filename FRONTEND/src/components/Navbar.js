import React from "react";
import logo from '../assets/Images/home/Background.jpg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

let Navbar = () => {
    return (
        <div className="container">
            <div className="navbar-header">
                <ul>
                    <button>
                    <FiChevronLeft className="h-20 w-20"/>
                    </button>
                    <li>Miễn phí giao hàng tiêu chuẩn các đơn hàng từ 2.500.000đ</li>
                    <li>Khuyến mãi Chào Hè-Giảm 10% cho hóa đơn từ 3 triệu - 15% cho hóa đơn từ 15 triệu</li>
                    <button>
                    <FiChevronRight className="h-20 w-20"/>
                    </button>
                </ul>

                <img src={logo}></img>
            </div>
        </div>
    )
}
export default Navbar;