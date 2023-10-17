import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiCandlestickPhone } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import Logo from "/public/main-logo.png";
// import ZoomIt from "/public/others/Zoom-IT.png";

const FooterItem = ({ icon, textOne, textTwo }) => {
  return (
    <>
      <div className="d-flex justify-content-center gap-4 align-items-center p-1 ">
        <div>{icon} </div>
        <div>
          <p className="fs-6 m-0">{textOne} </p>
          <p className="fs-6 m-0">{textTwo} </p>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="footer">
      <div className="container border-bottom border-secondary  pt-1">
        <Row className="justify-content-center my-5 mx-2">
          <Col md={3} sm={12}>
            <div className="footer-item">
              <FooterItem
                icon={<BsFillTelephoneFill size={22} />}
                textOne="Given Us A Call"
                textTwo="(+880)32-883-9382"
              />
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="border-start border-end border-secondary footer-item">
              {" "}
              <FooterItem
                icon={<FaEnvelope size={22} />}
                textOne="Send Us A Message"
                textTwo="hasan@trustca.com.au"
              />
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="footer-item">
              {" "}
              <FooterItem
                icon={<MdLocationPin size={24} />}
                textOne="Office Location"
                textTwo="Bl. Geen Road No.04"
              />
            </div>
          </Col>
        </Row>
      </div>
      <Container fluid className="p-4 ">
        <Row>
          <Col md={3} sm={12}>
            {/* <Row className='justify-center w-50'> */}
            {/* <Image className="w-50" src="main-logo.png" alt="logo" /> */}
            {/* </Row> */}
            {/* <Row className="my-3"> */}
            <p className="  mt-4 mb-3 w-75">
              Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
              is simply dummy text of the .
            </p>
            {/* </Row> */}
            <div className="d-flex gap-4  ">
              {/* <Col sm={3} md={3}  > */}
              <a
                href="https://www.facebook.com/SultanTeaBangladesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>
              {/* </Col> */}
              {/* <Col sm={3} md={3}  > */}
              <a href="#">
                <FaTwitter size={25} />
              </a>
              {/* </Col> */}
              {/* <Col sm={3} md={3}  > */}
              <a href="#">
                <FaInstagram size={25} />
              </a>
              {/* </Col> */}

              <a href="#">
                <AiFillLinkedin size={25} />
              </a>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <h1 className="fs-5 fw-bold cus-color-primary">Quick Link</h1>
            <ul className="demo ">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/business">Business</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>

              <li>
                <a href="/case">Case</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={3}>
            <h1 className="fs-5 fw-bold cus-color-primary">Useful Links</h1>
            <ul className="demo ">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>

              <li>
                <a href="#">Term and condition</a>
              </li>

              <li>
                <a href="#">Disclaimer</a>
              </li>

              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <h1 className="fs-5 fw-bold mb-3 cus-color-primary text-center">
              Promotional Video
            </h1>
            <div className={isMobile ? "" : "mx-5"}>
            <div className="ele-center">
              <iframe
                src="https://streamable.com/e/wpdk6h?autoplay=1"
                frameBorder={0}
                width="302px"
                height="170px"
                allow="autoplay"
              />
            </div>
            </div>
          </Col>
        </Row>
        {/* <Row className="border-top border-secondary pt-3 mt-2">
          <Col md={6} sm={12}>
            <div className="d-flex gap-2 align-items-center justify-content-sm-center">
              <p className="text-sm ">Design & Development By </p>
              <div>
                <Image className="" src="/others/Zoom-IT.png" alt="logo" />
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <p className="d-flex justify-content-md-end  justify-content-sm-center">
              {" "}
              Copyright &copy; 2023 All rights reserved.
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Footer;
