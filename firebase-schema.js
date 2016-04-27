Admin app
  Profile
    admin info
  Staff
    Restaurant Staff
  Tables
    Restaurant Tables
  Menu
    Restaurant Dishes
    Restaurant Ingredients
  Reports
    Restaurant Orders

Waiter app
  Profile
    waiter info
  Orders
    Waiter Orders
  New Order
    Restaurant Dishes
    Restaurant Tables

Kitchen app
  Profile
    kitchen info
  Orders
    Restaurant Orderes (Filtered by state)



/staffProfile
  staffMemberId
    - name
    - email
    - role

/

/waiterOrders
  waiterId
    orderId
      info
        - table
        - orderedAt
        - finishedAt
        - state
        - comment
      dishes
        dishId
        info
          - name
          - description
          - price

/

/dishes
  dishId
    info
      - name
      - description
      - price
    ingredients
      ingredientId
        - name
        - description
/

/restaurants
  restaurantId
    info
      - name
      - address
      - phone
    staff
      staffMemberId
        - name
        - email
        - role
    tables
      tableId
        - name
        - number
    dishes
      dishId
        info
          - name
          - description
          - price
    ingredients
      ingredientId
        - name
        - description
    orders
      orderId
        info
          - table
          - orderedAt
          - finishedAt
          - state
          - comment
          - waiter
