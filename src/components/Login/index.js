// import React, { useState } from "react";
// // import { connect } from "react-redux";
// import { Modal, Form, Input } from "antd";
// // import styled from 'styled-components'
// // import { Dispatch } from "redux";

// // import { login } from "../../actions/auth"

// interface LoginProps {
//   login: Function;
// }

// export const Login = (props: LoginProps) => {
//   const [visible, setVisible] = useState(false);

//   const handleSubmit = (e: React.MouseEvent) => {
//     e.preventDefault();
//   };

//   const goBack = () => {
//     setVisible(false);
//   };

//   return (
//     <Modal
//       visible={visible}
//       onOk={handleSubmit}
//       onCancel={goBack}
//       footer={null}
//     >
//       <Form>
//         <Form.Item>
//           <Input />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// // const mapDispatch = (dispatch: Dispatch) => ({
// //   // login: (data) => dispatch(login(data))
// // });

// // export default connect(null, mapDispatch)(Login);
