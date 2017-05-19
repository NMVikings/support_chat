const defaultAdmin = {
  role: 'Admin',
  name: 'Мария',
  image: '#'
};

const adminReducer = (state = defaultAdmin, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default adminReducer;