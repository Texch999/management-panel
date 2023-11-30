import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { PiClockClockwiseBold } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { HiVideoCamera } from "react-icons/hi";
import { BiSolidCamera } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { MdMicNone } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import moment from "moment";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RiCheckDoubleLine } from "react-icons/ri";
import { Images } from "../../images";
import { GET_ALL_USERS } from "../../config/endpoints";
import { GENERATE_SIGNED_URL } from "../../config/endpoints";
import { GET_USER_MESSAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { open, send } from "../utils/WebSocket";

function Chats() {
  const ImageBaseUrl = "https://we2-call-images.s3.us-east-2.amazonaws.com";
  const [clientsData, setClientsData] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [supportData, setSupportData] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");

  const handleUserClick = async (registerId, index) => {
    setSelectedUser(registerId);
    await getAllUserMessages(registerId);
    setSelectedChat(index);
  };
  const getAllUserData = async () => {
    await call(GET_ALL_USERS, {
      register_id: "reg-20231111083458442",
    })
      .then((res) => {
        console.log("res====>", res);
        setClientsData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUserData();
  }, []);
  // console.log("clientsData", clientsData);

  // const search = (value) => {
  //   setSearchText(value);
  //   const filteredSearch = clientsData && clientsData?.length > 0 && clientsData?.filter((res) =>
  //     res?.user_name?.includes(searchText)
  //   );
  //   setFilteredClients(filteredSearch);
  // };
  // const chatsDetails =
  // // searchText.length?.filteredClients?.filter((item) =>
  // //   item?.user_name?.includes(searchText)
  // // );
  // clientsData?.map((item) => ({
  //   image: Images.RohitImage,
  //   name: item?.user_name,
  //   message: "What a Knock That Was !!! Virat Kohli !!",
  //   time: item?.ts,
  //   icon: "",
  // }));
  // Assuming clientsData contains information about clients

  // const chatsDetails = clientsData?.map((client) => {
  //   const clientSupportData = supportData && supportData?.length> 0 && supportData?.filter(
  //     (item) => item.from_user_id === client.register_id
  //   );
  //   return {
  //     name: client.user_name,
  //     messages: clientSupportData && clientSupportData?.length > 0 && clientSupportData?.map((item) => ({
  //       message: item.message,
  //       time: item.ts,
  //       senderId: item.from_user_id,
  //     })),
  //   };
  // });

  let register_id = "reg-20230920132711772";
  let creator_id = localStorage?.getItem("creator_id");
  const [uploadImage, setuploadImage] = useState([]);
  const [singedUrl, setSignedUrl] = useState("");
  const [Id, setId] = useState("");
  const [profileImage, setProfileImage] = useState("");

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

  const videoRef = useRef(null);
  const [file, setFile] = useState([]);
  const handleChange = (e) => {
    setFile([file, e.target.files[0]]);
  };
  // const handleUserInput = () => {
  //   if (userInput.trim() !== "") {
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       {
  //         content: reply,
  //         sender: "reg-20230920132711772",
  //         img: Images.ViratImage02,
  //       },
  //     ]);
  //     const reply = generateReply(userInput);
  //     setMessages((prevMessages) => [
  //       ...prevMessages,

  //       { content: userInput, sender: "user", img: Images.DhoniImage02 },
  //     ]);
  //     setUserInput("");
  //   }
  // };
  // const generateReply = (message) => {
  //   return message;
  // };
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
    setUserInput("");
    await send(userInput, selectedUser);
  };

  const addMessage = (message, msg_c = 0) => {
    let temp = { message, ts: new Date().getTime(), msg_c };
    // setSupportData((prev) => [...prev, temp]);
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

  const getAllUserMessages = async (registerId) => {
    await call(GET_USER_MESSAGES, {
      from_user_id: registerId, //reg-20231121132839869 // dynamic user id
      to_user_id: "reg-20231111083458442", // localStorage.getItem('') -> Login user id
      upload_image: `${ImageBaseUrl}/${"chat-images"}/${Id}.png`,
    })
      .then(async (res) => {
        console.log("support data", res.data.data);
        setSupportData(res?.data?.data);
        // singedUrl &&
        //   profileImage &&
        //   (await fetch(singedUrl, {
        //     method: "PUT",
        //     body: profileImage,
        //     headers: {
        //       "Content-Type": "image/jpeg",
        //       "cache-control": "public, max-age=0",
        //     },
        //   })
        //     .then((res) => {})
        //     .catch((err) => {
        //       console.log("err: ", err);
        //     }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onMessageRecieve = (event) => {
    console.log("onMessageRecieve : ", event);
    if (!event.data) {
      return;
    }
    const msg = JSON.parse(event.data);
    addMessage(msg.message);
  };
  const scroll = () => {
    var objDiv = document.getElementById("chat");
    if (objDiv) {
      objDiv.scrollTop = objDiv?.scrollHeight;
    }
  };
  useEffect(() => {
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
    setProfileImage(file);
    generateSignedUrl();
  };

  const generateSignedUrl = async () => {
    setuploadImage(true);
    const NewId = new Date().getTime();
    await call(GENERATE_SIGNED_URL, {
      register_id: `${NewId}`,
      event_type: "user_profile_image",
      folder_name: "chat-images",
    })
      .then(async (res) => {
        setuploadImage(false);
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setId(NewId);
      })
      .catch((err) => {
        setuploadImage(false);
        console.log("generating signed url error", err);
      });
  };
  useEffect(() => {
    setSupportData();
  }, []);

  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  return (
    <div className="container">
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <div className="headind_srch d-flex flex-column mb-2">
              <div className="recent_heading d-flex flex-start my-2">
                <h4>Support</h4>
              </div>
              <div className="srch_bar d-flex justify-content-center w-100">
                <div className="stylish-input-group w-80">
                  <input
                    type="text"
                    className="search-bar px-4 py-2 rounded"
                    placeholder="Search"
                    // onChange={(e) => search(e.target.value)}
                  />
                  <span className="input-group-addon">
                    <button type="button">
                      <i className="fa fa-search" aria-hidden="true"></i>{" "}
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

            <div className="inbox_chat">
              <div className="chat_list active_chat">
                <div className="chat_people d-flex justify-content-between align-items-center">
                  <div className="chat_img">
                    {" "}
                    <img
                      className="rounded-circle chat-contact-image"
                      src={Images.sachin_image}
                      alt="sunil"
                    />{" "}
                  </div>
                  <div className="chat_ib font-10">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>

              <div className="chat_list">
                <div className="chat_people d-flex justify-content-between align-items-center">
                  <div className="chat_img">
                    {" "}
                    <img
                      className="rounded-circle chat-contact-image"
                      src={Images.rohit_image}
                      alt="sunil"
                    />{" "}
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>I will purchase it for sure............ </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="headind_srch d-flex flex-row align-items-center mb-2">
              <LuUsers className="upload-icon mx-2 font-12" />
              <span className="clr-cornflower large-font mx-2 font-12">
                Contacts
              </span>
            </div>
            <div className="inbox-chat-contacts">
              <div className="chat_list">
                <div className="chat_people d-flex justify-content-between  flex-column">
                  {clientsData &&
                    clientsData?.length > 0 &&
                    clientsData?.map((user, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          handleUserClick(user?.register_id, index)
                        }
                      >
                        <div className="chat_list">
                          <div className="chat_people d-flex justify-content-between align-items-center">
                            <div className="chat_img">
                              <img
                                className="rounded-circle chat-contact-image"
                                src={Images.dhawan_image}
                                alt="sunil"
                              />{" "}
                            </div>
                            <div className="chat_ib">
                              <h5>
                                {user?.first_name} {user?.last_name}
                                {/* {selectedChat === index &&
                                items?.messages?.map((msg, Index) => (
                                  <div key={Index}>
                                    <p>{msg.message}</p>
                                    <span>
                                      {moment(msg?.time).format("hh:mm a")}
                                    </span>
                                  </div>
                                ))} */}
                                <span className="chat_date">{user?.time}</span>
                              </h5>
                              <p>{user?.messages} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {/* {chatsDetails?.map((items, index) => (
                    <div key={index}>
                      <div className="chat_list">
                        <div className="chat_people d-flex justify-content-between align-items-center">
                          <div className="chat_img">
                            <img
                              className="rounded-circle chat-contact-image"
                              src={Images.dhawan_image}
                              alt="sunil"
                            />{" "}
                          </div>
                          <div className="chat_ib">
                            <h5>
                              {items?.name}{" "}
                              <span className="chat_date">{items?.time}</span>
                            </h5>
                            <p>{items?.messages} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
          <div className="mesgs">
            <div className="msg_history px-2 py-2">
              <div className="incoming_msg mt-4">
                <div className="incoming_msg_img">
                  {" "}
                  <img
                    className="rounded-circle chat-contact-image"
                    src={Images.dhoni_image}
                    alt="sunil"
                  />{" "}
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span className="time_date"> 11:01 AM | June 9</span>
                  </div>
                </div>
              </div>
              {supportData &&
                supportData?.length > 0 &&
                supportData?.map((item, index) => {
                  let senderId =
                    item.from_user_id === register_id ? true : false;
                  return (
                    <div key={index}>
                      {!senderId && (
                        <div className="date-text mt-10">
                          {moment(item.ts).format("hh:mm a")}
                        </div>
                      )}
                      <div className="outgoing_msg">
                        <div key={index} className="sent_msg">
                          <p>{item?.message}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="time_date">
                              {moment(item.ts).format("hh:mm a")}
                            </span>{" "}
                            {senderId && (
                              <RiCheckDoubleLine
                                style={{ fontSize: "20px", color: "#70dc37" }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center chat-container-box">
              <div className="type_msg w-75 mx-2 rounded">
                <div className="input_msg_write">
                  <input
                    type="text"
                    className="write_msg px-4 font-white none-outline rounded"
                    value={userInput}
                    placeholder="Type a message"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    onKeyDown={(e) => userInput && hanldeKeyDown(e)}
                  />
                  <button
                    className="msg_send_btn me-3"
                    onClick={() => inputHandler()}
                  >
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="d-flex w-25 flex-row justify-content-around align-items-center">
                <div className="bg-clr-chat px-2 py-1 rounded mx-2">
                  <label htmlFor="camera-button">
                    <BiSolidCamera className="upload-icon" />
                  </label>
                  <input
                    type="file"
                    // id="camera-button"
                    style={{ display: "none" }}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="bg-clr-chat px-2 py-1 rounded mx-2">
                  {/* onClick={handleUploadButtonClick}
                disabled={uploadImage} */}
                  <label htmlFor="attachment">
                    <ImAttachment className="upload-icon" />
                  </label>
                  <input
                    type="file"
                    ref={uploadfileInputRef}
                    id="attachment"
                    style={{ display: "none" }}
                    onChange={(e) => handleUploadFileSelect(e)}
                  />
                </div>
                <div className="bg-clr-chat px-2 py-1 rounded mx-2">
                  <MdMicNone className="upload-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
