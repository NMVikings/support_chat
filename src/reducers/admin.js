const defaultAdmin = {
  role: 'Admin',
  name: 'Мария',
  image: 'https://graph.facebook.com/100006276431900/picture?type=normal'
};

const adminReducer = (state = defaultAdmin, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default adminReducer;