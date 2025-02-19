import React from 'react';
import Modal from 'react-responsive-modal';
import FormComponent from './FormComponent';
import ImageUpload from './ImageUpload';
import Dropdown from 'react-dropdown';

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                show: false
        }
    }
    onOpenModal = () => {
        this.setState({show: true});
    };
  
    onCloseModal = () => {
        this.setState({show: false});
    };

	render(){
	   return (
        <div>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link
            href="css/bootstrap-responsive.css"
            rel="stylesheet"
            type="text/css"
        />
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="navbar-inner">
            <div className="container">
                <button
                type="button"
                className="btn btn-navbar"
                data-toggle="collapse"
                data-target=".nav-collapse"
                >
                {" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
                </button>
                <a className="brand" href>
                PPL
                </a>
                <div className="pro_info pull-right">
                <div className="pro_icn">
                    <img src="images/pic_small.png" />
                </div>
                <div className="pro_txt">
                    Me<b className="caret" />
                </div>
                <ul
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="dLabel"
                >
                    <li>
                    <a tabIndex={-1} href="#">
                        My Profile
                    </a>
                    </li>
                    <li>
                    <a tabIndex={-1} href="#">
                        Message Box
                    </a>
                    </li>
                    <li>
                    <a tabIndex={-1} href="#">
                        Change Language
                    </a>
                    </li>
                    <li className="divider" />
                    <li>
                    <a tabIndex={-1} href="#">
                        <input type="text" placeholder="search" />
                    </a>
                    </li>
                </ul>
                </div>
                <div className="nav-collapse collapse">
                <ul className="nav">
                    <li className="active">
                    {" "}
                    <a href>Home</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>E-Coupons</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>E-Brands</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>Resuse Market</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>Lost and Found</a>{" "}
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        
        <div className="container">
            <div className="content">
            <div className="content_rgt">
                <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                    <img src="images/btn_iconb.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href="#" onClick={this.onOpenModal}>Upload Post</a>{" "}
                </div>
                {this.state.show?<FormComponent />:''}
                <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                    <img src="images/btn_icona.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href="#">Invite Friends</a>{" "}
                </div>
                <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">
                    Categories
                </div>
                <div className="rght_list">
                    <ul>
                    <li>
                        <a href="#">
                        <span className="list_icon">
                            <img src="images/icon_01.png" alt="up" />
                        </span>{" "}
                        CATS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="list_icon">
                            <img src="images/icon_02.png" alt="up" />
                        </span>{" "}
                        Dogs
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="list_icon">
                            <img src="images/icon_03.png" alt="up" />
                        </span>{" "}
                        Birds
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="list_icon">
                            <img src="images/icon_04.png" alt="up" />
                        </span>{" "}
                        Rabbit
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="list_icon">
                            <img src="images/icon_05.png" alt="up" />
                        </span>{" "}
                        Others
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">
                    Featured
                </div>
                <div className="sub_dwn">
                    <div className="feat_sec">
                    <div className="feat_sec_img">
                        <img src="images/feat_img1.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                        <div className="btm_arc">Cats</div>
                    </div>
                    </div>
                    <div className="feat_sec">
                    <div className="feat_sec_img">
                        <img src="images/feat_img2.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                        <div className="btm_arc">Dogs</div>
                    </div>
                    </div>
                    <div className="feat_sec">
                    <div className="feat_sec_img">
                        <img src="images/feat_img3.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                        <div className="btm_arc">Rabbits</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="content_lft">
                <div className="contnt_1">
                <div className="list_1">
                    <ul>
                    <li>
                        <input type="checkbox" className="chk_bx" />
                        Friends
                    </li>
                    <li>
                        <input type="checkbox" className="chk_bx" />
                        Flaged
                    </li>
                    </ul>
                </div>
                <div className="post_div">
                    <div className="post_list">
                    <ul>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_1.png" />
                            </span>Latest First
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_2.png" />
                            </span>Oldest First
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_3.png" />
                            </span>Most Pet
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_4.png" />
                            </span>Most Clicks
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_5.png" />
                            </span>Most Commented
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="post_txt">4 New Post Updates</div>
                </div>
                </div>
                <div className="contnt_2">
                <div className="div_a">
                    <div className="div_title">
                    User Interface PSD Source files Web Designing for web
                    </div>
                    <div className="btm_rgt">
                    <div className="btm_arc">Cats</div>
                    </div>
                    <div className="div_top">
                    <div className="div_top_lft">
                        <img src="images/img_6.png" />Steave Waugh
                    </div>
                    <div className="div_top_rgt">
                        <span className="span_date">02 Jan 2014</span>
                        <span className="span_time">11:15am</span>
                    </div>
                    </div>
                    <div className="div_image">
                    <img src="images/lft_img.png" alt="pet" />
                    </div>
                    <div className="div_btm">
                    <div className="btm_list">
                        <ul>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_001.png" alt="share" />
                            </span>Share
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_002.png" alt="share" />
                            </span>Flag
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_004.png" alt="share" />
                            </span>4 Comments
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_003.png" alt="share" />
                            </span>Likes
                            </a>
                        </li>
                        <div
                            className="like_count"
                            style={{ marginRight: 10 }}
                        >
                            <span className="lft_cnt" />
                            <span className="mid_cnt">10</span>
                            <span className="rit_cnt" />
                        </div>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_003.png" alt="share" />
                            </span>Unlike
                            </a>
                        </li>
                        <div className="like_count">
                            <span className="lft_cnt" />
                            <span className="mid_cnt">4</span>
                            <span className="rit_cnt" />
                        </div>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="contnt_2">
                <div className="div_a">
                    <div className="div_title">
                    User Interface PSD Source files Web Designing for web
                    </div>
                    <div className="btm_rgt">
                    <div className="btm_arc">Dogs</div>
                    </div>
                    <div className="div_top">
                    <div className="div_top_lft">
                        <img src="images/img_6.png" />Steave Waugh
                    </div>
                    <div className="div_top_rgt">
                        <span className="span_date">02 Jan 2014</span>
                        <span className="span_time">11:15am</span>
                    </div>
                    </div>
                    <div className="div_image">
                    <img src="images/lft_img1.png" alt="pet" />
                    </div>
                    <div className="div_btm">
                    <div className="btm_list">
                        <ul>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_001.png" alt="share" />
                            </span>Share
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_002.png" alt="share" />
                            </span>Flag
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_004.png" alt="share" />
                            </span>4 Comments
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_003.png" alt="share" />
                            </span>Likes
                            </a>
                        </li>
                        <div
                            className="like_count"
                            style={{ marginRight: 10 }}
                        >
                            <span className="lft_cnt" />
                            <span className="mid_cnt">10</span>
                            <span className="rit_cnt" />
                        </div>
                        <li>
                            <a href="#">
                            <span className="btn_icon">
                                <img src="images/icon_003.png" alt="share" />
                            </span>Unlike
                            </a>
                        </li>
                        <div className="like_count">
                            <span className="lft_cnt" />
                            <span className="mid_cnt">4</span>
                            <span className="rit_cnt" />
                        </div>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="clear" />
        </div>
        
            <Modal open={this.state.show} onClose={this.onCloseModal} center>
                <div >
                    <ImageUpload />  
                </div>
        </Modal>    
        </div>
        
    );
    }
}
export default MainComponent;