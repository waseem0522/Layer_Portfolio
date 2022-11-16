// import React, { useState } from "react";
// import axios from "axios";
// // import { response } from "express";
// const Zoom = () => {
//   const [username, setUsername] = useState("");
//   const zoomMeeting = () => {
//     const data = {
//       email: "engmuhammadwaseem0522@gmail.com",
//     };
//     console.log(username);
//     axios.post("http://localhost:3444/meeting", data)
    
//       .than((response) => {
//         let URL =
//           response.data.join_url.replaceAll(
//             "http://us04web.zoom.us/j/",
//             "http://127.0.0.1:9999/index.html/?"
//           ) + `?role=1?name=${username}`;
//         console.log(URL);
//         window.location.replace(`${URL}`);
//       })
//       .catch((err) => console.error(err));
//   };
//   return <div className="app">
//     <header className="app-header">
//         <h1>Zoom Meeting</h1>
//         <div className="card">
//             <h5>
//                 Name&nbsp;&nbsp;
//                 <input
//                  type="text"
//                  name="name"
//                  style={{
//                     width:'300px',
//                     borderRadiuse: "5px",
//                     padding:"8px 12px",
//                     fontSize: "18px" 
//                  }}
//                  value = {username}
//                  onChange = {(e) => setUsername(e.target.value)}
//                 />
//             </h5>

//             <div className="row" style={{ margin: "10px"}}>
//                 <div className="column">
//                     <div className="row" 
//                     style={{morgin: "10px",
//                             margintop:"12px"
//                         }}
//                     >
//                         <button 
//                         className="btn btn-info"
//                         style={{width:"290px",
//                         height:"80px",
//                         fontSize:"20px",
//                         fontFamily:"cursive",
//                         }}    
//                         onClick={zoomMeeting}
//                         >
//                             create Meeting
//                         </button>    
//                     </div>
//                 </div>
//                 <div className="column" style={{ float:"right"}}>
//                     <img
//                      src="logo192.png"
//                      height="330px"
//                      width="220px"
//                      alt="web"
//                     />
//                 </div>
//             </div>
//         </div>
//     </header>

//   </div>
// };

// export default Zoom;
