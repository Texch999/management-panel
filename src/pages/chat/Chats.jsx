import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { PiClockClockwiseBold } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { HiVideoCamera } from "react-icons/hi";
import { BiSolidCamera } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { MdMicNone } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RiCheckDoubleLine } from "react-icons/ri";
import { Images } from "../../images";
import { GET_USER_MESSAGE } from "../../config/endpoints";
import { call } from "../../config/axios";
import { open, send } from "../utils/WebSocket";

function Chats() {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  const [supportData, setSupportData] = useState([]);

  const [messages, setMessages] = useState([
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "user",
      img: Images.DhoniImage02,
    },
    {
      content: "We need to know it,Because it's about our community",
      sender: "computer",
      img: Images.ViratImage02,
    },
  ]);
  const date = new Date().toLocaleDateString();
  const [userInput, setUserInput] = useState("");
  // const inputFile = useRef(null);

  const videoRef = useRef(null);

  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
  };

  const handleUserInput = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: reply,
          sender: "computer",
          img: Images.ViratImage02,
        },
      ]);
      const reply = generateReply(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,

        { content: userInput, sender: "user", img: Images.DhoniImage02 },
      ]);
      setUserInput("");
    }
  };
  const generateReply = (message) => {
    return message;
  };
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const inputHandler = async () => {
    // addMessage(userInput, 1);
    setUserInput("");
    await send(userInput);
    // await getAllUserMessages();
  };

  const addMessage = (message, msg_c = 0) => {
    // console.log("new message : ", message);
    let temp = { message, ts: new Date().getTime(), msg_c };
    setSupportData((prev) => [...prev, temp]);
    // console.log(supportData)
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const hanldeKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftyKey) {
      event.preventDefault();
      inputHandler();
    }
  };

  const getAllUserMessages = async () => {
    await call("", {
      register_id,
      creator_id,
    })
      .then((res) => {
        console.log(res.data.data);
        setSupportData(res?.data?.data);
        // scroll();
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };

  const onMessageRecieve = (event) => {
    console.log("onMessageRecieve : ", event);
    if (!event.data) {
      return;
    }
    const msg = JSON.parse(event.data);
    // if (msg.from_user_id === register_id) {
    //   return;
    // }
    addMessage(msg.message);
  };
  const scroll = () => {
    var objDiv = document.getElementById("chat");
    if (objDiv) {
      objDiv.scrollTop = objDiv?.scrollHeight;
    }
  };
  useEffect(() => {
    getAllUserMessages();
    open({ onmessage: onMessageRecieve });
  }, []);
  const [webcamVisible, setWebcamVisible] = useState(false);
  const webcamRef = useRef(null);
  const toggleWebCam = () => {
    setWebcamVisible((prevVisible) => !prevVisible);
  };
  const captureSnapshot = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    console.log(imgSrc);
    setWebcamVisible(false);
  };
  const handleFileUpload = (event) => {
    console.log(event);
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  return (
    <div class="container">
      <h3 class=" text-center">Messaging</h3>
      <div class="messaging">
        <div class="inbox_msg">
          <div class="inbox_people">
            <div class="headind_srch d-flex flex-column mb-2">
              <div class="recent_heading d-flex flex-start my-2">
                <h4>Support</h4>
              </div>
              <div class="srch_bar d-flex justify-content-center w-100">
                <div class="stylish-input-group w-80">
                  <input
                    type="text"
                    class="search-bar px-4 py-2 rounded"
                    placeholder="Search"
                  />
                  <span class="input-group-addon">
                    <button type="button">
                      <i class="fa fa-search" aria-hidden="true"></i>{" "}
                    </button>
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center w-100 my-2">
                <div>
                  <PiClockClockwiseBold className="upload-icon" />
                </div>
                <div className="medium-font ms-1 clr-cornflower">Recent</div>
              </div>
            </div>

            <div class="inbox_chat">
              <div class="chat_list active_chat">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    {" "}
                    <img
                      className="rounded-circle"
                      src={Images.sachin_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.raina_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <p className="clr-green">Typing............ </p>
                      <div className="rounded-circle clr-red-bg clr-white text-center px-1 small-font">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    {" "}
                    <img
                      className="rounded-circle"
                      src={Images.rohit_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="headind_srch d-flex flex-row align-items-center mb-2">
              <LuUsers className="upload-icon mx-2" />
              <span className="clr-cornflower large-font mx-2">Contacts</span>
            </div>
            <div className="inbox-chat-contacts">
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.rohit_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    {" "}
                    <img
                      className="rounded-circle"
                      src={Images.raina_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>{" "}
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    {" "}
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.raina_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    {" "}
                    <img
                      className="rounded-circle"
                      src={Images.raina_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>{" "}
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    <img
                      className="rounded-circle"
                      src={Images.dhawan_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people d-flex justify-content-between align-items-center">
                  <div class="chat_img">
                    {" "}
                    <img
                      className="rounded-circle"
                      src={Images.sachin_image}
                      // src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div class="chat_ib">
                    <h5>
                      Sunil Rajput <span class="chat_date">Dec 25</span>
                    </h5>
                    <p>Available </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mesgs">
            <div class="headind_srch d-flex flex-column h-8vh mb-2">
              <div class="recent_heading d-flex flex-start my-2 align-items-center justify-content-between w-100">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <img
                      className="rounded-circle h-30px mx-2"
                      src={Images.dhoni_image}
                      alt="sunil"
                    />{" "}
                  </div>
                  <div className="large-font clr-white mx-2">
                    Mahendra Singh Dhoni
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <IoCall className="upload-icon clr-grey mx-2" />
                  <HiVideoCamera className="upload-icon clr-grey mx-2" />
                </div>
              </div>
            </div>

            <div class="msg_history px-4 py-3">
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  {" "}
                  <img
                    className="rounded-circle"
                    src={Images.dhoni_image}
                    alt="sunil"
                  />{" "}
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span class="time_date"> 11:01 AM | June 9</span>
                  </div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Test which is a new approach to have all solutions</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span class="time_date"> 11:01 AM | June 9</span>{" "}
                    <RiCheckDoubleLine
                      style={{ fontSize: "20px", color: "#70dc37" }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center my-4">
                <div className="small-font input-btn-bg px-2 py-2 clr-grey rounded ">
                  Yesterday
                </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  {" "}
                  <img
                    className="rounded-circle"
                    src={Images.kohli_image}
                    alt="sunil"
                  />{" "}
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span class="time_date"> 11:01 AM | Yesterday</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="small-font input-btn-bg px-2 py-2 clr-grey rounded">
                  today
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Apollo University, Delhi, India Test</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span class="time_date"> 11:01 AM | June 9</span>{" "}
                    <RiCheckDoubleLine
                      style={{ fontSize: "20px", color: "#70dc37" }}
                    />
                  </div>{" "}
                </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  {" "}
                  <img
                    className="rounded-circle"
                    src={Images.dhoni_image}
                    alt="sunil"
                  />{" "}
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>
                      We work directly with our designers and suppliers, and
                      sell direct to you, which means quality, exclusive
                      products, at a price anyone can afford.
                    </p>
                    <span class="time_date"> 11:01 AM | Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center px-4 py-2 chat-container-box">
              <div class="type_msg w-75 mx-2 rounded">
                <div class="input_msg_write">
                  <input
                    type="text"
                    class="write_msg px-4"
                    placeholder="Type a message"
                  />
                  <button class="msg_send_btn me-3" type="button">
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="d-flex w-25 flex-row justify-content-around align-items-center">
                <div className="bg-clr-chat px-2 py-2 rounded mx-2">
                  <label htmlFor="camera-button">
                    <BiSolidCamera className="upload-icon" />
                  </label>
                  <input
                    type="file"
                    id="camera-button"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="bg-clr-chat px-2 py-2 rounded mx-2">
                  <label htmlFor="upload-button">
                    <ImAttachment className="upload-icon" />
                  </label>
                  <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="bg-clr-chat px-2 py-2 rounded mx-2">
                  <MdMicNone className="upload-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <div className="chat-blow-button d-flex justify-content-between align-items-center">
          <BiSolidMessageSquareDetail style={{ fontSize: "30px" }} />
          <span className="clr-corn-flower ms-1">Chat With Us</span>
        </div>
      </div>
    </div>
  );
}

export default Chats;
