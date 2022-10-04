const CHECK_STATUS = 'BOOKSTORE/components/categories/CHECK_STATUS';

const statusAction = () => ({
  type: CHECK_STATUS,
});

const categoryActionReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default { categoryActionReducer, statusAction };
