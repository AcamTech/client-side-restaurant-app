export {
    fetchStaffFromRestaurant, getMember,
    updateMember, destroyMember,
    createAndSaveUser
} from './api/staff';

export {
    fetchRestaurant, fetchRestaurants,
    createRestaurant
} from './api/restaurants';

export {
    getTables, createTable,
    deleteTable, editTable
} from './api/tables';

export {
  getCategories, getCategory,
  deleteCategory, createCategory,
  updateCategory
} from './api/categories';

export {
  getDishes, getDish,
  deleteDish, createDish,
  updateDish
} from './api/dishes';

export {
  getIngredients, getIngredient,
  deleteIngredient, createIngredient,
  updateIngredient
} from './api/ingredients';