import React from "react";
import "./App.css";
import Sidebar from "./pages/home/Sidebar";
import Homepage from "./pages/dashboard/Homepage";
import Header from "./pages/home/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addwebsites from "./pages/addWebsite/Addwebsites";
import Adddirector from "./pages/addDirector/Adddirector";
import Tickets from "./pages/tickets/Tickets";
import Reports from "./pages/reports/Reports";
import Addtt from "./pages/addTT/Addtt";
import Packages from "./pages/packages/Packages";
import Countrycurrency from "./pages/referenceData/Countrycurrency";
import Paymentgateway from "./pages/referenceData/Paymentgateway";
import Rejectionreason from "./pages/referenceData/Rejectionreason";
import Securityquestions from "./pages/referenceData/Securityquestions";
import Broadcasting from "./pages/broadcasting/Broadcasting";
import Offersmanagement from "./pages/offersmanagement/Offersmanagement";
import Creatematch from "./pages/matchCreation/Creatematch";
import Usertransaction from "./pages/addDirector/Usertransaction";
import PolicyDocument from "./pages/referenceData/PolicyDocument";
import Settlement from "./pages/reports/Settlement";
import SettlementStatement from "./pages/reports/SettlementStatement";
import MyStatement from "./pages/reports/MyStatement";
import Statement from "./pages/statement/Statement";
import ToursManagement from "./pages/tours-tournaments/ToursManagement";
import NotificationTextMsg from "./pages/broadcasting/NotificationTextMsg";
import Chats from "./pages/chat/Chats";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex main">
        <div className="w-auto side-b">
          <Sidebar />
        </div>
        <div className="w-100 home-bg vh-100">
          {/*  */}
          <div className="w-100 homepage-div mt-8vh">
          <Header />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/addwebsites" element={<Addwebsites />}></Route>
              <Route path="/adddirectors" element={<Adddirector />}></Route>
              <Route
                path="/usertransaction"
                element={<Usertransaction />}
              ></Route>
              <Route path="/addtt" element={<Addtt />}></Route>
              <Route path="/matchCreation" element={<Creatematch />}></Route>
              <Route path="/tickets" element={<Tickets />}></Route>
              <Route path="/reports" element={<Reports />}></Route>
              <Route path="/packages" element={<Packages />}></Route>
              <Route path="/settlement" element={<Settlement />}></Route>
              <Route path="/mystatement" element={<MyStatement />}></Route>
              <Route
                path="/settlementstatement"
                element={<SettlementStatement />}
              ></Route>
              <Route
                path="/policydocuments"
                element={<PolicyDocument />}
              ></Route>
              <Route
                path="/countrycurrency"
                element={<Countrycurrency />}
              ></Route>
              <Route
                path="/paymentgateway"
                element={<Paymentgateway />}
              ></Route>
              <Route
                path="/rejectionreason"
                element={<Rejectionreason />}
              ></Route>
              <Route
                path="/securityquestions"
                element={<Securityquestions />}
              ></Route>
              <Route path="/broadcasting" element={<Broadcasting />}></Route>
              <Route
                path="/publish-notification"
                element={<NotificationTextMsg />}
              ></Route>

              <Route
                path="/offersmanagement"
                element={<Offersmanagement />}
              ></Route>
              <Route path="/statement" element={<Statement />} />
              <Route path="/tours-tournaments" element={<ToursManagement />} />
              <Route path="/support-chat" element={<Chats />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
