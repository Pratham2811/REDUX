export function MycreateStore(reducer) {
  let state;

  let listners = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listners.forEach((listner) => {
        listner();
      });
    },
    subscribe(listner) {
      listners.push(listner);
    },
  };
  store.dispatch({ type: "@@INIT" });
  return store;
}
