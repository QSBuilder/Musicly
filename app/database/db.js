const getDishes = (successCallback) => {
  db.transaction((tx) => {
    tx.executeSql("select * from menu", [], (_, { rows: { _array } }) => {
      successCallback(_array);
    });
  });
};
export default getDishes;
