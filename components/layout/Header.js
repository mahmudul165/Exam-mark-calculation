// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { FaShoppingCart } from "react-icons/fa";
// import { useCart } from "react-use-cart";
// import CartItemsModal from "../common/CartItemsModal";
// import Logo from "/public/clientcompany/s-2.jpg";
// import { useRouter } from "next/router";
// import { Col, Row } from "react-bootstrap";
// function Header() {
//   // start header
//   const [scroll, setScroll] = useState(false);
//   const [modalShow, setModalShow] = useState(false);
//   const router = useRouter();
//   const handleClick = () => {
//     const sidebar = document.querySelector(".offcanvas");
//     const body = document.querySelector("body");

//     console.log({ sidebar });

//     const isCollapse = sidebar.classList.contains("show");
//     const offcanvasDiv = document.querySelector(".offcanvas-backdrop");
//     const isShow = offcanvasDiv.classList.contains("show");

//     if (isCollapse) {
//       sidebar.classList.remove("show");
//       offcanvasDiv.classList.remove("show");
//       body.click();
//     } else if (!isCollapse && !isShow) {
//       sidebar.classList.add("show");
//       offcanvasDiv.classList.add("show");
//       sidebar.classList.add("offcanvas-toggling");
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScroll = () => {
//     if (window.pageYOffset > 0) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };
//   // end header
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     totalItems,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   return (
//     <>
//     <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
//       <Navbar.Brand href="/">
//         <img
//           src={Logo}
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="MGA Booking Logo"
//         />
//         {' MGA Booking'}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Row>
//             <Col xs={12} md={4}>
//               <Nav.Link href="/booking">MGA Booking</Nav.Link>
//             </Col>
//             <Col xs={12} md={4}>
//               <Nav.Link href="/about">About Us</Nav.Link>
//             </Col>
//             <Col xs={12} md={4}>
//               <Nav.Link href="/contact">Contact Us</Nav.Link>
//             </Col>
//           </Row>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </>
//   );
// }

// export default Header;
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { FaShoppingCart } from "react-icons/fa";
// import { useCart } from "react-use-cart";
// import CartItemsModal from "../common/CartItemsModal";
// import Logo from "/public/clientcompany/s-2.jpg";
// import { useRouter } from "next/router";
// import { Col, Row } from "react-bootstrap";
// function Header() {
//   // start header
//   const [scroll, setScroll] = useState(false);
//   const [modalShow, setModalShow] = useState(false);
//   const router = useRouter();
//   const handleClick = () => {
//     const sidebar = document.querySelector(".offcanvas");
//     const body = document.querySelector("body");

//     console.log({ sidebar });

//     const isCollapse = sidebar.classList.contains("show");
//     const offcanvasDiv = document.querySelector(".offcanvas-backdrop");
//     const isShow = offcanvasDiv.classList.contains("show");

//     if (isCollapse) {
//       sidebar.classList.remove("show");
//       offcanvasDiv.classList.remove("show");
//       body.click();
//     } else if (!isCollapse && !isShow) {
//       sidebar.classList.add("show");
//       offcanvasDiv.classList.add("show");
//       sidebar.classList.add("offcanvas-toggling");
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScroll = () => {
//     if (window.pageYOffset > 0) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };
//   // end header
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     totalItems,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   return (
//     <>
//     <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
//       <Navbar.Brand href="/">
//         <img
//           src={Logo}
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="MGA Booking Logo"
//         />
//         {' MGA Booking'}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Row>
//             <Col xs={12} md={4}>
//               <Nav.Link href="/booking">MGA Booking</Nav.Link>
//             </Col>
//             <Col xs={12} md={4}>
//               <Nav.Link href="/about">About Us</Nav.Link>
//             </Col>
//             <Col xs={12} md={4}>
//               <Nav.Link href="/contact">Contact Us</Nav.Link>
//             </Col>
//           </Row>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </>
//   );
// }

// export default Header;
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { MyButton } from "../common/Buttons";
import CartItemsModal from "../common/CartItemsModal";
import Logo from "/public/clientcompany/s-2.jpg";
import { useRouter } from "next/router";
import { BsFillTelephoneFill } from "react-icons/bs";
function Header() {
  // start header
  const [scroll, setScroll] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const router = useRouter();

  const navLink = [
    // {
    //   name: "Home",
    //   link: "/",
    // },
    // {
    //   name: "About Us",
    //   link: "/about",
    // },
    // {
    //   name: "MGA Booking",
    //   link: "/booking",
    // },
    // {
    //   name: "services",
    //   link: "/services",
    // },
    // {
    //   name: "cases",
    //   link: "/cases",
    // },
    // {
    //   name: "Our business ",
    //   link: "/our-business",
    // },
    // {
    //   name: "contact",
    //   link: "/contact",
    // },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // end header
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      <CartItemsModal show={modalShow} onHide={() => setModalShow(false)} />
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          sticky="top"
          // bg="light"
          expand={expand}
          style={{ backgroundColor: "#081736" }}
          // className="  fs-6 fw-bold text-danger  navPosition"
          className={`row align-items-center container-fluid   m-auto   navPosition py-3 px-5 ${
            scroll ? "  bg-light border-bottom shadow-sm add-transition " : "  "
          }`}
        >
          <div className="col-lg-6  d-md-none d-lg-block   d-none   ">
           
          </div>

          <div className=" d-md-none col-sm-3  col-3">
            <Nav
              className="m-auto align-items-center  justify-content-center "
              as="ul"
            >
              {/* {" "} */}
              <Nav.Link as="span" className="text-nowrap">
                <Link
                  href={"/book"}
                  className="cus-bg-primary  text-white px-3 py-3  rounded-lg cus-b-r-5 cus-btn"
                >
                  BOOK NOW
                </Link>
              </Nav.Link>
            </Nav>
          </div>

          <div className="col-lg-5  col-sm-2  offset-1 col-3">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Hasan Islam
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" justify-content-center ">
                  {/* <Nav.Link as="span">
                    <Link href={"/gellary"}>Gallery</Link>
                  </Nav.Link> */}
                  <div className="  d-block  d-lg-none d-md-block  d-xs-block ">
                    <Nav as="ul">
                      {navLink.map(({ link, name }) => (
                        <Nav.Link
                          as="span"
                          key={name}
                          className={`${
                            router?.pathname === link
                              ? "border-start border-3 border-warning  "
                              : ""
                          } mx-2 `}
                        >
                          <Link href={link} className=" text-uppercase ">
                            {name}
                          </Link>
                        </Nav.Link>
                      ))}
                    </Nav>
                  </div>
 
                  {/* <Nav.Link as="span" className="text-nowrap ">
                    <Link
                       href={"/about"}
                      className=" px-4 py-2  rounded-lg cus-b-r-5 cus-btn"
                    >
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="span" className="text-nowrap ">
                    <Link
                      href={"/gallery"}
                      className=" px-4 py-2  rounded-lg cus-b-r-5 cus-btn"
                    >
                      Gallery
                    </Link>
                  </Nav.Link>

                  <Nav.Link as="span" className="text-nowrap ">
                    <Link
                      href={"/contact"}
                      className="  px-4 py-2  rounded-lg cus-b-r-5 cus-btn"
                    >
                      Contact Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="span" className="text-nowrap ">
                    <Link
                      href={"/booking"}
                      className="cus-bg-primary  text-white px-4 py-2  rounded-lg cus-b-r-5 cus-btn"
                    >
                      MGA Booking
                    </Link>
                  </Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
