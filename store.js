// import { createStore } from "redux";
// import { MycreateStore } from "./myredux";

// const initialState = {
//   count: 0,
//   name: "Prathamesh",
//   age: 21,
// };

// const INCREMENT = "post/increment";
// const DECREMENT = "post/decrement";
// const INCREMENT_BY = "post/incrementBy";
// const DECREMENT_BY = "post/decrementBy";

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };

//     case DECREMENT:
//       return { ...state, count: state.count - 1 };

//     case INCREMENT_BY:
//       return { ...state, count: state.count + action.payload };

//     case DECREMENT_BY:
//       return { ...state, count: state.count - action.payload };

//     default:
//       return state;
//   }
// }

// // const store = createStore(
// //   reducer,
// //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
// //     window.__REDUX_DEVTOOLS_EXTENSION__()
// // );
// const myStore = MycreateStore(reducer);
// myStore.subscribe(()=>{
//   console.log(myStore.getState());
  
// })
// myStore.dispatch({ type: INCREMENT });


// // const subscribe=store.subscribe(()=>{
// //   console.log(store.getState());

// // })

// // store.dispatch({type:INCREMENT})
// // store.dispatch({type:DECREMENT})
// // store.dispatch({type:INCREMENT_BY,payload:20})
// // store.dispatch({type:DECREMENT_BY,payload:10})
// export default myStore;
